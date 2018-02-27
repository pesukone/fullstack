import React from 'react'

import LoginForm from './components/Login'
import BlogList from './components/BlogList'
import BlogForm from './components/BlogForm'
import Notification from './components/Notification'
import Error from './components/Error'
import Togglable from './components/Togglable'
import blogService from './services/blogs'
import login from './services/login'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      blogs: [],
      username: '',
      password: '',
      title: '',
      author: '',
      url: '',
      user: null,
      error: null,
      notification: null
    }
  }

  componentWillMount() {
    blogService.getAll().then(blogs =>
      this.setState({ blogs })
    )

    const loggedUserJSON = window.localStorage.getItem('loggedAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      blogService.setToken(user.token)
      this.setState({ user })
    }
  } 

  login = async (e) => {
    e.preventDefault()
    try {
      const user = await login({
        username: this.state.username,
        password: this.state.password
      })

      blogService.setToken(user.token)
      window.localStorage.setItem('loggedAppUser', JSON.stringify(user))
      this.setState({ username: '', password: '', user })
    } catch (exception) {
      this.showError('invalid username or password')
    }
  }

  logout = async (e) => {
    window.localStorage.removeItem('loggedAppUser')
    blogService.setToken(null)
    this.setState({ user: null })
  }

  showNotification = (text) => {
    this.setState({ notification: text })
    setTimeout(() => {
      this.setState({ notification: null })
    }, 5000)
  }

  showError = (text) => {
    this.setState({ error: text })
    setTimeout(() => {
      this.setState({ error: null })
    }, 5000)
  }

  createBlog = async (e) => {
    e.preventDefault()
    const newBlog = {
      title: this.state.title,
      author: this.state.author,
      url: this.state.url
    }

    const createdBlog = await blogService.create(newBlog)
    this.setState({ blogs: this.state.blogs.concat(createdBlog) })
    this.showNotification(`a new blog '${createdBlog.title}' by ${createdBlog.author} added`)
  }

  like = (id) => () => {
    const blog = this.state.blogs.find(b => b.id === id)
    const changedBlog = { ...blog, likes: blog.likes + 1 }

    blogService
      .update(id, changedBlog)
      .then(updatedBlog => {
        const filtered = this.state.blogs.filter(b => b.id !== id)
        this.setState({
          blogs: filtered.concat(updatedBlog)
        })
      })
  }

  remove = (id) => () => {
    const blog = this.state.blogs.find(b => b.id === id)

    if (window.confirm(`delete ${blog.title} by ${blog.author}?`)) {
      blogService
        .remove(id)
        .then(res => {
          if (!res.message) {
            this.setState({ blogs: this.state.blogs.filter(b => b.id !== id) })
          } else {
            this.showError('delete failed')
          }
        })
    }
  }

  handleFieldChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <div>
        <Notification message={this.state.notification} />
        <Error message={this.state.error} />
        {this.state.user === null ?
          <LoginForm
            login={this.login}
            userField={this.state.username}
            passwordField={this.state.password}
            handler={this.handleFieldChange}
          /> :
          <div>
            <p>
              {this.state.user.name} logged in
              <button onClick={this.logout}>logout</button>
            </p>
            <Togglable buttonLabel="new blog">
              <BlogForm
                title={this.state.title}
                author={this.state.author}
                url={this.state.url}
                handler={this.handleFieldChange}
                create={this.createBlog}
              />
            </Togglable>
            <BlogList
              user={this.state.user}
              blogs={this.state.blogs}
              logout={this.logout}
              like={this.like}
              remove={this.remove}
            />
          </div>
        }
      </div>
    )
  }
}

export default App;

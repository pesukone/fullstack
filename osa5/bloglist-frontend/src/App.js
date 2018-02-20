import React from 'react'

import LoginForm from './components/Login'
import BlogList from './components/BlogList'
import BlogForm from './components/BlogForm'
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
      user: null
    }
  }

  componentDidMount() {
    blogService.getAll().then(blogs =>
      this.setState({ blogs })
    )

    const loggedUserJSON = window.localStorage.getItem('loggedAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      this.setState({ user })
      blogService.setToken(user.token)
    }
  } 

  login = async (e) => {
    e.preventDefault()
    try {
      const user = await login({
        username: this.state.username,
        password: this.state.password
      })

      window.localStorage.setItem('loggedAppUser', JSON.stringify(user))
      this.setState({ username: '', password: '', user })
    } catch (exception) {
      this.setState({ error: 'invalid username or password' })
      setTimeout(() => {
        this.setState({ error: null })
      }, 5000)
    }
  }

  logout = async (e) => {
    window.localStorage.removeItem('loggedAppUser')
    blogService.setToken(null)
    this.setState({ user: null })
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
  }

  handleFieldChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      this.state.user === null ?
        <LoginForm
          login={this.login}
          userField={this.state.username}
          passwordField={this.state.password}
          handler={this.handleFieldChange}
        /> :
        <div>
          <BlogForm
            title={this.state.title}
            author={this.state.author}
            url={this.state.url}
            handler={this.handleFieldChange}
            create={this.createBlog}
          />
          <BlogList
            user={this.state.user}
            blogs={this.state.blogs}
            logout={this.logout}
          />
        </div>
    )
  }
}

export default App;

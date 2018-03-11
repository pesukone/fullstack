import React from 'react'
import { connect } from 'react-redux'

import LoginForm from './components/Login'
import BlogList from './components/BlogList'
import BlogForm from './components/BlogForm'
import Notification from './components/Notification'
import Error from './components/Error'
import Togglable from './components/Togglable'

import blogService from './services/blogs'

import { notify, error } from './reducers/notificationReducer'
import { authenticateWith, loginAs, logout } from './reducers/userReducer'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      blogs: [],
      title: '',
      author: '',
      url: ''
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
      this.props.loginAs(user)
    }
  } 

  logout = async (e) => {
    window.localStorage.removeItem('loggedAppUser')
    blogService.setToken(null)
    this.props.logout()
  }

  showNotification = async (text) => {
    this.props.notify(text, 5)
  }

  showError = async (text) => {
    this.props.error(text, 5)
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
        <Notification />
        <Error />
        {this.props.user === null ?
          <LoginForm
          /> :
          <div>
            <p>
              {this.props.user.name} logged in
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
              user={this.props.user}
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

const mapStateToProps = state => ({
  user: state.user
})

export default connect(
  mapStateToProps,
  { notify, error, authenticateWith, loginAs, logout }
)(App)

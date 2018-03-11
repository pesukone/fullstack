import React from 'react'
import { connect } from 'react-redux'

import LoginForm from './components/Login'
import BlogList from './components/BlogList'
import BlogForm from './components/BlogForm'
import Notification from './components/Notification'
import Error from './components/Error'
import Togglable from './components/Togglable'

import blogService from './services/blogs'

import { notify, error } from './reducers/notificationReducer'
import { authenticateWith, loginAs, logout } from './reducers/userReducer'
import { initBlogs } from './reducers/blogReducer'

const App = (props) => {
  props.initBlogs()

  if (!props.user) {
    const loggedUserJSON = window.localStorage.getItem('loggedAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      blogService.setToken(user.token)
      props.loginAs(user)
    }
  }

  return (
    <div>
      <Notification />
      <Error />
      {props.user === null ?
        <LoginForm /> :
        <div>
          <p>
            {props.user.name} logged in
            <button
              onClick={() => {
                window.localStorage.removeItem('loggedAppUser')
                blogService.setToken(null)
                props.logout()
              }}
            >
              logout
            </button>
          </p>
          <Togglable buttonLabel="new blog">
            <BlogForm />
          </Togglable>
          <BlogList />
        </div>
      }
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.user
})

export default connect(
  mapStateToProps,
  {
    notify,
    error,
    authenticateWith,
    loginAs,
    logout,
    initBlogs
  }
)(App)

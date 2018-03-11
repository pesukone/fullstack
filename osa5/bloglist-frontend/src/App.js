import React from 'react'
import { connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import LoginForm from './components/Login'
import BlogList from './components/BlogList'
import BlogForm from './components/BlogForm'
import Notification from './components/Notification'
import Error from './components/Error'
import Togglable from './components/Togglable'
import UserList from './components/UserList'

import blogService from './services/blogs'

import { notify, error } from './reducers/notificationReducer'
import { authenticateWith, loginAs, logout } from './reducers/loginReducer'
import { initBlogs } from './reducers/blogReducer'
import { initUsers } from './reducers/userReducer'

const App = (props) => {
  props.initBlogs()
  props.initUsers()

  if (!props.user) {
    const loggedUserJSON = window.localStorage.getItem('loggedAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      blogService.setToken(user.token)
      props.loginAs(user)
    }
  }

  return (
    <Router>
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
            <Route exact path="/" render={() => <BlogList />} />
            <Route path="/users" render={() => <UserList />} />
          </div>
        }
      </div>
    </Router>
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
    initBlogs,
    initUsers
  }
)(App)

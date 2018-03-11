import React from 'react'
import { connect } from 'react-redux'

import blogService from '../services/blogs'
import { authenticateWith } from '../reducers/loginReducer'
import { error } from '../reducers/notificationReducer'

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  componentWillUnmount() {
    this.setState({ username: '', password: '' })
  }

  login = async (e) => {
    e.preventDefault()
    try {
      const user = await this.props.authenticateWith({
        username: this.state.username,
        password: this.state.password
      })
      blogService.setToken(user.token)
      window.localStorage.setItem('loggedAppUser', JSON.stringify(user))
    } catch (exception) {
      console.log(exception)
      this.props.error('invalid username or password', 5)
    }
  }

  handleFieldChange = (e) => this.setState({ [e.target.name]: e.target.value })

  render() {
    return (
      <div>
        <h2>Log in to application</h2>

        <form onSubmit={this.login}>
          <div>
            username:
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleFieldChange}
            />
          </div>
          <div>
            password:
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleFieldChange}
            />
          </div>
          <button type="submit">login</button>
        </form>
      </div>
    )
  }
}

export default connect(
  null,
  { authenticateWith, error }
)(LoginForm)

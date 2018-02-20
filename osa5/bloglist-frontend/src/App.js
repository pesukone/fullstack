import React from 'react'

import LoginForm from './components/Login'
import BlogList from './components/BlogList'
import blogService from './services/blogs'
import login from './services/login'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      blogs: [],
      username: '',
      password: '',
      user: null
    }
  }

  componentDidMount() {
    blogService.getAll().then(blogs =>
      this.setState({ blogs })
    )
  } 

  login = async (e) => {
    e.preventDefault()
    try {
      const user = await login({
        username: this.state.username,
        password: this.state.password
      })

      this.setState({ username: '', password: '', user })
    } catch (exception) {
      this.setState({ error: 'invalid username or password' })
      setTimeout(() => {
        this.setState({ error: null })
      }, 5000)
    }
  }

  handleLoginFieldChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      this.state.user === null ?
        <LoginForm
          login={this.login}
          userField={this.state.username}
          passwordField={this.state.password}
          handler={this.handleLoginFieldChange}
        /> :
        <BlogList
          user={this.state.user}
          blogs={this.state.blogs}
        />
    )
  }
}

export default App;

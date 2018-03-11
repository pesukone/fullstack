import React from 'react'
import { connect } from 'react-redux'

import { create } from '../reducers/blogReducer'
import { notify } from '../reducers/notificationReducer'

class BlogForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      author: '',
      url: ''
    }
  }

  handleFieldChange = (e) => this.setState({ [e.target.name]: e.target.value })

  createBlog = async (e) => {
    e.preventDefault()
    const createdBlog = await this.props.create({
      title: this.state.title,
      author: this.state.author,
      url: this.state.url
    })
    this.props.notify(`a new blog '${createdBlog.title}' by ${createdBlog.author} added`, 5)
  }

  render() {
    return (
      <div>
        <h3>Create new</h3>

        <form onSubmit={this.createBlog}>
          <div>
            title:
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleFieldChange}
            />
          </div>
          <div>
            author:
            <input
              type="text"
              name="author"
              value={this.state.author}
              onChange={this.handleFieldChange}
            />
          </div>
          <div>
            url:
            <input
              type="text"
              name="url"
              value={this.state.url}
              onChange={this.handleFieldChange}
            />
          </div>
          <button type="submit">create</button>
        </form>
      </div>
    )
  }
}

export default connect(
  null,
  { create, notify }
)(BlogForm)

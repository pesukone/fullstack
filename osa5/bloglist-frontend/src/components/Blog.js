import React from 'react'
import { connect } from 'react-redux'

import { like, remove } from '../reducers/blogReducer'
import { error } from '../reducers/notificationReducer'

class Blog extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
  }

  toggleVisibility = () => {
    this.setState({ visible: !this.state.visible })
  }

  removeBlog = (blog) => () => {
    if (window.confirm(`delete ${blog.title} by ${blog.author}?`)) {
      try {
        this.props.remove(blog.id)
      } catch (exception) {
        this.props.error('delete failed')
      }
    }
  }

  render() {
    const showWhenVisible = { display: this.state.visible ? '' : 'none' }

    const blogStyle = {
      paddingTop: 10,
      paddingLeft: 2,
      border: 'solid',
      borderWidth: 1,
      marginBottom: 5
    }

    return (
      <div style={blogStyle}>
        <div className="visibleDiv" onClick={this.toggleVisibility}>
          {this.props.blog.title} {this.props.blog.author}
        </div>
        <div className="hiddenDiv" style={showWhenVisible}>
          <p><a href={this.props.blog.url}>{this.props.blog.url}</a></p>
          <p>{this.props.blog.likes} likes <button onClick={() => this.props.like(this.props.blog)}>like</button></p>
          <p>added by {this.props.blog.user.name}</p>
          {this.props.user.id === this.props.blog.user._id &&
              <p><button onClick={this.removeBlog(this.props.blog)}>delete</button></p>
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
})

export default connect(
  mapStateToProps,
  { like, remove, error }
)(Blog)

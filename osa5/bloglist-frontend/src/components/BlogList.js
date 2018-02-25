import React from 'react'
import PropTypes from 'prop-types'

const BlogList = ({ user, blogs, like, remove }) => (
  <div>
    <h2>Blogs</h2>

    {blogs
        .sort((a, b) => b.likes - a.likes)
        .map(blog => 
          <Blog
            key={blog.id}
            blog={blog}
            like={like}
            delete={remove}
            user={user}
          />)
    }
  </div>
)

BlogList.propTypes = {
  user: PropTypes.object.isRequired,
  blogs: PropTypes.array.isRequired,
  like: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired
}

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
        <div onClick={this.toggleVisibility}>
          {this.props.blog.title} {this.props.blog.author}
        </div>
        <div style={showWhenVisible}>
          <p><a href={this.props.blog.url}>{this.props.blog.url}</a></p>
          <p>{this.props.blog.likes} likes <button onClick={this.props.like(this.props.blog.id)}>like</button></p>
          <p>added by {this.props.blog.user.name}</p>
          {this.props.user.id === this.props.blog.user._id &&
              <p><button onClick={this.props.delete(this.props.blog.id)}>delete</button></p>
          }
        </div>
      </div>
    )
  }
}

export default BlogList

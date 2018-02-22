import React from 'react'

const BlogList = ({ blogs, like }) => (
  <div>
    <h2>Blogs</h2>

    {blogs
        .sort((a, b) => b.likes - a.likes).map(blog => <Blog key={blog.id} blog={blog} like={like}/>)}
  </div>
)

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
        </div>
      </div>
    )
  }
}

export default BlogList

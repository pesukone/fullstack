import React from 'react'

const BlogList = ({ blogs }) => (
  <div>
    <h2>Blogs</h2>

    {blogs.map(blog => <Blog key={blog.id} blog={blog} />)}
  </div>
)

class Blog extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      blog: props.blog
    }
  }

  toggleVisibility = () => {
    this.setState({ visible: !this.state.visible })
  }

  render() {
    //const hideWhenVisible = { display: this.state.visible ? 'none' : '' }
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
          {this.state.blog.title} {this.state.blog.author}
        </div>
        <div style={showWhenVisible}>
          <p><a href={this.state.blog.url}>{this.state.blog.url}</a></p>
          <p>{this.state.blog.likes} likes <button>like</button></p>
          <p>added by {this.state.blog.user.name}</p>
        </div>
      </div>
    )
  }
}

  /*const Blog = ({blog}) => (
  <div>
    {blog.title} {blog.author}
  </div>  
)*/

export default BlogList

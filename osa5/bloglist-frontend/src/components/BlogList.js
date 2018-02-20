import React from 'react'

const BlogList = ({ user, blogs }) => (
  <div>
    <h2>Blogs</h2>

    <p>{user.name} logged in</p>

    {blogs.map(blog => <Blog key={blog.id} blog={blog} />)}
  </div>
)

const Blog = ({blog}) => (
  <div>
    {blog.title} {blog.author}
  </div>  
)

export default BlogList

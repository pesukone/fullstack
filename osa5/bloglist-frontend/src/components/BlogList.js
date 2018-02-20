import React from 'react'

const BlogList = ({ user, blogs, logout }) => (
  <div>
    <h2>Blogs</h2>

    <p>{user.name} logged in <button onClick={logout}>logout</button></p>

    {blogs.map(blog => <Blog key={blog.id} blog={blog} />)}
  </div>
)

const Blog = ({blog}) => (
  <div>
    {blog.title} {blog.author}
  </div>  
)

export default BlogList

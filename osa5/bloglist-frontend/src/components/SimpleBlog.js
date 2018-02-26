import React from 'react'

const SimpleBlog = ({ blog, onClick }) => (
  <div>
    <div className="infoDiv">
      {blog.title} {blog.author}
    </div>
    <div className="likeDiv">
      blog has {blog.likes} likes
      <button onClick={onClick}>like</button>
    </div>
  </div>
)

export default SimpleBlog

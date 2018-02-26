import React from 'react'
import PropTypes from 'prop-types'

import Blog from './Blog'

const BlogList = ({ user, blogs, like, remove }) => (
  <div>
    <h2>Blogs</h2>

    {blogs
      .sort((a, b) => b.likes - a.likes)
      .map(blog => (
        <Blog
          key={blog.id}
          blog={blog}
          like={like}
          delete={remove}
          user={user}
        />))
    }
  </div>
)

BlogList.propTypes = {
  user: PropTypes.object.isRequired,
  blogs: PropTypes.array.isRequired,
  like: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired
}

export default BlogList

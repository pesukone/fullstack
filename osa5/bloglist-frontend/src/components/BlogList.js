import React from 'react'
import { connect } from 'react-redux'

import Blog from './Blog'

import { error } from '../reducers/notificationReducer'

const BlogList = props => (
  <div>
    <h2>Blogs</h2>

    {props.blogs
      .sort((a, b) => b.likes - a.likes)
      .map(blog => (
        <Blog
          key={blog.id}
          blog={blog}
        />))
    }
  </div>
)

const mapStateToProps = state => ({
  blogs: state.blogs,
  user: state.user
})

export default connect(
  mapStateToProps,
  { error }
)(BlogList)

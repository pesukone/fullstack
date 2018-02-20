import React from 'react'

const BlogForm = ({ title, author, url, handler, create }) => (
  <div>
    <h3>Create new</h3>

    <form onSubmit={create}>
      <div>
        title:
        <input
          type="text"
          name="title"
          value={title}
          onChange={handler}
        />
      </div>
      <div>
        author:
        <input
          type="text"
          name="author"
          value={author}
          onChange={handler}
        />
      </div>
      <div>
        url:
        <input
          type="text"
          name="url"
          value={url}
          onChange={handler}
        />
      </div>
      <button type="submit">create</button>
    </form>
  </div>
)

export default BlogForm

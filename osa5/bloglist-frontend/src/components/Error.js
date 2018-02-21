import React from 'react'

const Error = ({ message }) => (
  message === null ?
    null :
    <div className="error">
      {message}
    </div>
)

export default Error

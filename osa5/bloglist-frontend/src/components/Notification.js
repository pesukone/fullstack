import React from 'react'

const Notification = ({ message }) => (
  message === null ?
    null :
    <div className="notification">
      {message}
    </div>
)

export default Notification

import React from 'react'

const Notification = ({ store }) => {
  const notification = store.getState().notification
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    notification &&
      <div style={style}>
        {store.getState().notification}
      </div>
  )
}

export default Notification

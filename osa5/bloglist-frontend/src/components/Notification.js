import React from 'react'
import { connect } from 'react-redux'

const Notification = ({ notification }) => (
  notification === null ?
    null :
    <div className="notification">
      {notification}
    </div>
)

const mapStateToProps = state => ({
  notification: state
})

export default connect(mapStateToProps)(Notification)

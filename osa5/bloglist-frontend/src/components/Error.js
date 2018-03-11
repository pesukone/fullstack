import React from 'react'
import { connect } from 'react-redux'

const Error = ({ message }) => (
  message === null ?
    null :
    <div className="error">
      {message}
    </div>
)

const mapStateToProps = state => ({
  message: state.notification.error
})

export default connect(mapStateToProps)(Error)

import React from 'react'
import { connect } from 'react-redux'
import { filtering } from '../reducers/filterReducer'

const Filter = (props) => {
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={(e) => props.filtering(e.target.value)} />
    </div>
  )
}

export default connect(
  null,
  { filtering }
)(Filter)

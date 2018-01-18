import React from 'react'

const Next = ({ func }) => {
  return (
    <button onClick={func}>
      next anecdote
    </button>
  )
}

export default Next

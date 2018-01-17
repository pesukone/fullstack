import React from 'react'

const Next = ({ func }) => {
  return (
    <p>
      <button onClick={func}>
        next anecdote
      </button>
    </p>
  )
}

export default Next

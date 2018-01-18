import React from 'react'

const Vote = ({ vote_func }) => {
  return (
    <button onClick={vote_func}>
      vote
    </button>
  )
}
    
export default Vote

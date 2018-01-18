import React from 'react'

const Anecdote = ({ anecdote }) => {
  return (
    <div>
      {anecdote.text}
      <br />
      has {anecdote.votes} votes
    </div>
  )
}

export default Anecdote

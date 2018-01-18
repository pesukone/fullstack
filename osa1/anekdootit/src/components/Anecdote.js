import React from 'react'

const Anecdote = ({ anecdote }) => {
  return (
    <div>
      <p>{anecdote.text}</p>
      <p>has {anecdote.votes} votes</p>
    </div>
  )
}

export default Anecdote

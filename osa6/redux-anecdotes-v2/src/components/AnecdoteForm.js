import React from 'react'
import { connect } from 'react-redux'
import { createNew } from '../reducers/anecdoteReducer'
import { notify } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault()

    props.createNew(e.target.anecdote.value)
    props.notify(`created '${e.target.anecdote.value}'`, 5)

    e.target.anecdote.value = ''
  }
  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={handleSubmit}>
        <div><input name='anecdote'/></div>
        <button>create</button>
      </form>
    </div>
  )
}

export default connect(
  null,
  { notify, createNew }
)(AnecdoteForm)

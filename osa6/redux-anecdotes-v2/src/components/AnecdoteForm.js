import React from 'react'
import { connect } from 'react-redux'
import { creating } from '../reducers/anecdoteReducer'
import { notify } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'

const AnecdoteForm = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault()

    anecdoteService
      .createNew(e.target.anecdote.value)
      .then(created => {
        props.creating(created)
        props.notify(`created '${created.content}'`)
        setTimeout(() => props.notify(''), 5000)
      })

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
  { notify, creating }
)(AnecdoteForm)

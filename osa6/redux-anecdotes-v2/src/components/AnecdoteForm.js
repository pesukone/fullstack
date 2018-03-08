import React from 'react'
import { connect } from 'react-redux'
import { creating } from '../reducers/anecdoteReducer'
import { notify } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    const content = e.target.anecdote.value
    props.creating(content)

    props.notify(`created '${content}'`)
    setTimeout(() => props.notify(''), 5000)

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

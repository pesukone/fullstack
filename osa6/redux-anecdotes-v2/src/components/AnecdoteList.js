import React from 'react'
import { connect } from 'react-redux'

import { vote } from '../reducers/anecdoteReducer'
import { notify } from '../reducers/notificationReducer'

const AnecdoteList = (props) =>
  <div>
    <h2>Anecdotes</h2>
    {props.anecdotesToShow
      .map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => {
              props.vote(anecdote)
              props.notify(`you voted '${anecdote.content}'`)
              setTimeout(() => props.notify(''), 5000)
            }}>
              vote
            </button>
          </div>
        </div>
      )}
  </div>

const mapStateToProps = (state) => {
  const anecdotes = state
    .anecdotes
    .filter(anecdote =>
      anecdote
        .content
        .toLowerCase()
        .includes(state.filter)
    )
    .sort((a, b) => b.votes - a.votes)

  return {
    anecdotesToShow: anecdotes
  }
}

export default connect(
  mapStateToProps,
  { vote, notify }
)(AnecdoteList)

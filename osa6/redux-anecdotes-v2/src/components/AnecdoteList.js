import React from 'react'

import { voting } from '../reducers/anecdoteReducer'
import { notify } from '../reducers/notificationReducer'

class AnecdoteList extends React.Component {
  render() {
    const state = this.props.store.getState()

    const filterFunction = anecdote =>
      anecdote.content
        .toLowerCase()
        .includes(state.filter)

    const anecdotes = state
      .anecdotes
      .filter(filterFunction)

    return (
      <div>
        <h2>Anecdotes</h2>
        {anecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => {
                this.props.store.dispatch(voting(anecdote.id))
                this.props.store.dispatch(notify(`you voted '${anecdote.content}'`))
                setTimeout(() => this.props.store.dispatch(notify('')), 5000)
              }}>
                vote
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default AnecdoteList

import React from 'react'
import actionFor from './actionCreators'

class App extends React.Component {
  vote = (id) => () => {
    this.props.store.dispatch(
      actionFor.voting(id)
    )
  }

  addAnecdote = (e) => {
    e.preventDefault()
    this.props.store.dispatch(
      actionFor.anecdoteCreation(e.target.anecdote.value)
    )
    e.target.anecdote.value = ''
  }

  render() {
    const anecdotes = this.props.store.getState().sort((a, b) => b.votes - a.votes)
    return (
      <div>
        <h2>Anecdotes</h2>
        {anecdotes.map(anecdote=>
          <div key={anecdote.id}>
            <div>
              {anecdote.content} 
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={this.vote(anecdote.id)}>vote</button>
            </div>
          </div>
        )}
        <h2>create new</h2>
        <form onSubmit={this.addAnecdote}>
          <div><input name="anecdote" /></div>
          <button type="submit">create</button> 
        </form>
      </div>
    )
  }
}

export default App

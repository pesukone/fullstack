import React from 'react'
import actionFor from './actionCreators'

class App extends React.Component {
  vote = (id) => () => {
    this.props.store.dispatch(
      actionFor.vote(id)
    )
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
        <form>
          <div><input /></div>
          <button>create</button> 
        </form>
      </div>
    )
  }
}

export default App
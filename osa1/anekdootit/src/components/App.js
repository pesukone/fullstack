import React, { Component } from 'react';

import Next from './Next'
import Vote from './Vote'
import Anecdote from './Anecdote'

class App extends Component {
  constructor(props) {
    super(props)
    const anec_array = this.props.anecdotes.map(anec => ({ text: anec, votes: 0 }))
    this.state = {
      selected: anec_array[0],
      anecdotes: anec_array
    }
  }

  next_anecdote = () => this.setState({ selected: this.state.anecdotes[Math.floor(Math.random() * this.state.anecdotes.length)] })

  vote_anecdote = (anecdote) => () => {
    const new_anecs = this.state.anecdotes.slice()
    new_anecs[new_anecs.indexOf(anecdote)].votes++
    this.setState({ anecdotes: new_anecs })
  }

  most_votes = () => this.state.anecdotes.slice().sort((a, b) => b.votes - a.votes)[0]

  render() {
    return (
      <div>
        <Anecdote anecdote={this.state.selected} />
        <Next func={this.next_anecdote} />
        <Vote vote_func={this.vote_anecdote(this.state.selected)} />
        <br />
        <br />
        <b>anecdote with most votes:</b>
        <Anecdote anecdote={this.most_votes()} />
      </div>
    )
  }
}

export default App;

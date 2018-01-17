import React, { Component } from 'react';

import Next from './Next'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0
    }
  }

  anecdotes = this.props.anecdotes
  next_anecdote = () => this.setState({ selected: Math.floor(Math.random() * this.anecdotes.length) + 1 })

  render() {
    console.log(this.anecdotes.length)
    return (
      <div>
        <p>
          <b>{this.anecdotes[this.state.selected]}</b>
        </p>
        <Next func={this.next_anecdote} />
      </div>
    )
  }
}

export default App;

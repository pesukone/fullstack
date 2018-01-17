import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      hyva: 0,
      neutraali: 0,
      huono: 0
    }
  }

  return(
    <div>
      <h1>{this.state.hyva}</h1>
    </div>
  )
}

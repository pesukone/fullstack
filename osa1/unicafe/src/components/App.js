import React from 'react'
import ReactDOM from 'react-dom'

import Button from './Button'
import Stats from './Stats'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      hyva: 0,
      neutraali: 0,
      huono: 0
    }
  }

  lisaaHyva = () => this.setState({ hyva: this.state.hyva + 1 })
  lisaaNeutraali = () => this.setState({ neutraali: this.state.neutraali + 1 })
  lisaaHuono = () => this.setState({ huono: this.state.huono + 1 })

  render() {
    return (
      <div>
        <h1>anna palautetta</h1>
        <Button nimi="hyvä" lisays={this.lisaaHyva} />
        <Button nimi="neutraali" lisays={this.lisaaNeutraali} />
        <Button nimi="huono" lisays={this.lisaaHuono} />
        <Stats tila={this.state} />
      </div>
    )
  }
}

export default App

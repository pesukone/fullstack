import React from 'react'

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

  lisaa = (avain) => () => this.setState({ [avain]: this.state[avain] + 1 })

  render() {
    return (
      <div>
        <h1>anna palautetta</h1>
        <Button nimi="hyvä" lisays={this.lisaa("hyva")} />
        <Button nimi="neutraali" lisays={this.lisaa("neutraali")} />
        <Button nimi="huono" lisays={this.lisaa("huono")} />
        <Stats tila={this.state} />
      </div>
    )
  }
}

export default App

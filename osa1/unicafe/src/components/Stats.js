import React from 'react'
import ReactDOM from 'react-dom'

const Stats = ({ tila }) => {
  console.log(tila)
  return (
    <div>
      <h1>statistiikka</h1>
      <p>hyvä: {tila.hyva}</p>
      <p>neutraali: {tila.neutraali}</p>
      <p>huono: {tila.huono}</p>
    </div>
  )
}

export default Stats

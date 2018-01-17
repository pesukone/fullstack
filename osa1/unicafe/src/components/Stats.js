import React from 'react'
import ReactDOM from 'react-dom'

const keskiarvo = ({ hyva, neutraali, huono }) => {
  if (hyva + neutraali + huono === 0) {
    return 0
  }
  
  return (hyva - huono) / (hyva + neutraali + huono)
}

const positiivisia = ({ hyva, neutraali, huono }) => {
  if (hyva + neutraali + huono === 0) {
    return 0
  }

  return 100 * (hyva / (hyva + neutraali + huono))
}

const Stats = ({ tila }) => {
  const { hyva, neutraali, huono } = tila
  return (
    <div>
      <h1>statistiikka</h1>
      <p>hyvä: {hyva}</p>
      <p>neutraali: {neutraali}</p>
      <p>huono: {huono}</p>
      <p>keskiarvo: {keskiarvo(tila)}</p>
      <p>positiivisia: {positiivisia(tila)} %</p>
    </div>
  )
}

export default Stats

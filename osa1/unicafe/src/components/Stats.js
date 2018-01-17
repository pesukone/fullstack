import React from 'react'

import Stat from './Stat'

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
  if (hyva === 0 && neutraali === 0 && huono === 0) {
    return (
      <p>yhtään palautetta ei ole annettu</p>
    )
  }

  return (
    <div>
      <h1>statistiikka</h1>
      <Stat nimi="hyvä" arvo={hyva} />
      <Stat nimi="neutraali" arvo={neutraali} />
      <Stat nimi="huono" arvo={huono} />
      <Stat nimi="keskiarvo" arvo={keskiarvo(tila)} />
      <Stat nimi="positiivisia" arvo={positiivisia(tila) + " %"} />
    </div>
  )
}

export default Stats

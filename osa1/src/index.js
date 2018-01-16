import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const kurssi = 'Half Stack -sovelluskehitys'
  const osat = [
    {
      nimi: 'Reactin perusteet',
      tehtavia: 10
    },
    {
      nimi: 'Tiedonvälitys propseilla',
      tehtavia: 7
    },
    {
      nimi: 'Komponenttien tila',
      tehtavia: 7
    }
  ]

  return (
    <div>
      <Otsikko kurssi={kurssi} />
      <Sisalto osat={osat} />
      <Yhteensa osat={osat} />
    </div>
  )
}

const Otsikko = ({ kurssi }) => <h1>{kurssi}</h1>

const Sisalto = ({ osat }) => {
  return (
    <div>
      <Osa osa={osat[0]} />
      <Osa osa={osat[1]} />
      <Osa osa={osat[2]} />
    </div>
  )
}

const Yhteensa = ({ osat }) => <p>yhteensä {osat[0].tehtavia+ osat[1].tehtavia + osat[2].tehtavia} tehtävää</p>

const Osa = ({ osa }) => <p>{osa.nimi} {osa.tehtavia}</p>

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

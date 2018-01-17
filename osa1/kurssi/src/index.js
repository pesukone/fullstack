import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const kurssi = {
    nimi: 'Half Stack -sovelluskehitys',
    osat: [
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
  }

  return (
    <div>
      <Otsikko kurssi={kurssi} />
      <Sisalto kurssi={kurssi} />
      <Yhteensa kurssi={kurssi} />
    </div>
  )
}

const Otsikko = ({ kurssi }) => <h1>{kurssi.nimi}</h1>

const Sisalto = ({ kurssi }) => {
  console.log(kurssi)
  return (
    <div>
      <Osa osa={kurssi.osat[0]} />
      <Osa osa={kurssi.osat[1]} />
      <Osa osa={kurssi.osat[2]} />
    </div>
  )
}

const Yhteensa = ({ kurssi }) => <p>yhteensä {kurssi.osat[0].tehtavia + kurssi.osat[1].tehtavia + kurssi.osat[2].tehtavia} tehtävää</p>

const Osa = ({ osa }) => <p>{osa.nimi} {osa.tehtavia}</p>

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

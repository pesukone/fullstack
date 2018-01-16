import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const kurssi = 'Half Stack -sovelluskehitys'
  const osa1 = 'Reactin perusteet'
  const tehtavia1 = 10
  const osa2 = 'Tiedonvälitys propseilla'
  const tehtavia2 = 7
  const osa3 = 'Komponenttien tila'
  const tehtavia3 = 14

  return (
    <div>
      <Otsikko kurssi={kurssi} />
      <Sisalto
        o1={osa1} t1={tehtavia1}
        o2={osa2} t2={tehtavia2}
        o3={osa3} t3={tehtavia3}
      />
      <Yhteensa
        t1={tehtavia1}
        t2={tehtavia2}
        t3={tehtavia3}
      />
    </div>
  )
}

const Otsikko = ({ kurssi }) => <h1>{kurssi}</h1>

const Sisalto = ({ o1, t1, o2, t2, o3, t3 }) => {
  return (
    <div>
      <Osa nimi={o1} tehtavia={t1} />
      <Osa nimi={o2} tehtavia={t2} />
      <Osa nimi={o3} tehtavia={t3} />
    </div>
  )
}

const Yhteensa = ({t1, t2, t3 }) => <p>yhteensä {t1 + t2 + t3} tehtävää</p>

const Osa = ({ nimi, tehtavia }) => <p>{nimi} {tehtavia}</p>

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

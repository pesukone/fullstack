import React from 'react'

const klik = (reducer, nappi) => () => {
  return reducer.dispatch({ type: nappi })
}

const Statistiikka = ({ reducer }) => {
  let good, ok, bad
  ({ good, ok, bad } = reducer.getState())

  if (!good && !ok && !bad) {
    return (
      <div>
        <h2>statistiikka</h2>
        <div>ei yhtään palautetta annettu</div>
      </div>
    )
  }

  return (
    <div>
      <h2>statistiikka</h2>
      <table>
        <tbody>
          <tr>
            <td>hyvä</td>
            <td>{good}</td>
          </tr>
          <tr>
            <td>neutraali</td>
            <td>{ok}</td>
          </tr>
          <tr>
            <td>huono</td>
            <td>{bad}</td>
          </tr>
          <tr>
            <td>keskiarvo</td>
            <td>{((good - bad) / (good + ok + bad)).toFixed(2)}</td>
          </tr>
          <tr>
            <td>positiivisia</td>
            <td>{(good / (good + ok + bad) * 100).toFixed(0)} %</td>
          </tr>
        </tbody>
      </table>
      <button onClick={klik(reducer, 'ZERO')}>nollaa tilasto</button>
    </div >
  )
}

const App = ({ reducer }) => (
  <div>
    <h2>anna palautetta</h2>
    <button onClick={klik(reducer, 'GOOD')}>hyvä</button>
    <button onClick={klik(reducer, 'OK')}>neutraali</button>
    <button onClick={klik(reducer, 'BAD')}>huono</button>
    <Statistiikka
      reducer={reducer}
    />
  </div>
)

export default App;

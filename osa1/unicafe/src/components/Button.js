import React from 'react'
import ReactDOM from 'react-dom'

const Button = ({ nimi, lisays }) => {
  return (
    <button onClick={lisays}>
      {nimi}
    </button>
  )
}

export default Button

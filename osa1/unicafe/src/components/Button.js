import React from 'react'

const Button = ({ nimi, lisays }) => {
  return (
    <button onClick={lisays}>
      {nimi}
    </button>
  )
}

export default Button

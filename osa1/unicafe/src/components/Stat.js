import React from 'react'

const Stat = ({ nimi, arvo }) => {
  return (
    <tr>
      <td>{nimi}</td>
      <td>{arvo}</td>
    </tr>
  )
}

export default Stat

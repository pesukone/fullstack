import React from 'react'

const Numbers = ({ persons, del }) => {
  return (
    <div>
      <h2>Numerot</h2>
      <table>
        <tbody>
          {persons.map(person => <Phone person={person} del={del} key={person.id} />)}
        </tbody>
      </table>
    </div>
  )
}

const Phone = ({ person, del }) => {
  return(
    <tr>
      <td>{person.name}</td>
      <td>{person.number}</td>
      <td>
        <button onClick={del(person)}>
          poista
        </button>
      </td>
    </tr>
  )
}

export default Numbers

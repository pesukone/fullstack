import React from 'react'

const Numbers = ({ persons }) => {
  return (
    <div>
      <h2>Numerot</h2>
      <table>
        <tbody>
          {persons.map(person => <Phone person={person} key={person.name} />)}
        </tbody>
      </table>
    </div>
  )
}

const Phone = ({ person }) => <tr><td>{person.name}</td> <td>{person.number}</td></tr>

export default Numbers

import React from 'react'

const Numbers = ({ persons, filter }) => {
  return (
    <div>
      <h2>Numerot</h2>
      <table>
        <tbody>
          {filterPersons(persons, filter).map(person => <Phone person={person} key={person.name} />)}
        </tbody>
      </table>
    </div>
  )
}

const Phone = ({ person }) => <tr><td>{person.name}</td><td>{person.number}</td></tr>

const filterPersons = (persons, filter) => 
  persons.filter(person =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  )

export default Numbers

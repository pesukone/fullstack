import React from 'react';

import Numbers from './Numbers'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Martti Tienari', number: '040-123456' },
        { name: 'Arto Järvinen', number: '040-123456' },
        { name: 'Lea Kutvonen', number: '040-123456' }
      ],
      newName: '',
      newNumber: '',
      filter: ''
    }
  }

  addPerson = (event) => {
    event.preventDefault()

    if (this.nameInList(this.state.newName)) {
      return;
    }

    const new_persons = this.state.persons
    new_persons.push({ name: this.state.newName, number: this.state.newNumber })
    this.setState({ persons: new_persons })
  }

  nameInList = (name) => this.state.persons.map(person => person.name === name).includes(true)

  handleChange = (field) => (event) => {
    this.setState({ [field]: event.target.value })
  }

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        rajaa näytettäviä
        <input
          value={this.state.filter}
          onChange={this.handleChange("filter")}
        />
        <h2>Lisää uusi</h2>
        <form onSubmit={this.addPerson}>
          <div>
            nimi:
            <input 
              value={this.state.newName}
              onChange={this.handleChange("newName")}
            />
          </div>
          <div>
            numero:
            <input
              value={this.state.newNumber}
              onChange={this.handleChange("newNumber")}
            />
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
        <Numbers persons={this.state.persons} filter={this.state.filter} />
      </div>
    )
  }
}

export default App

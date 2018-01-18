import React from 'react';

import Numbers from './Numbers'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        {
          name: 'Arto Hellas',
          number: '00000123'
        }
      ],
      newName: '',
      newNumber: ''
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

  handleNameChange = (event) => {
    this.setState({ newName: event.target.value })
  }

  handleNumberChange = (event) => {
    this.setState({ newNumber: event.target.value })
  }

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <form onSubmit={this.addPerson}>
          <div>
            nimi:
            <input 
              value={this.state.newName}
              onChange={this.handleNameChange}
            />
          </div>
          <div>
            numero:
            <input
              value={this.state.newNumber}
              onChange={this.handleNumberChange}
            />
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
        <Numbers persons={this.state.persons} />
      </div>
    )
  }
}

export default App

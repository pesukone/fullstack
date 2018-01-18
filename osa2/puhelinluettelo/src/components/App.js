import React from 'react';

import Numbers from './Numbers'
import Input from './Input'
import Filter from './Filter'

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
        <Filter filter={this.state.filter} change={this.handleChange("filter")} />
        <Input state={this.state} addPerson={this.addPerson} change={this.handleChange} />
        <Numbers persons={this.state.persons} filter={this.state.filter} />
      </div>
    )
  }
}

export default App

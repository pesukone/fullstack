import React from 'react';
import axios from 'axios'

import Numbers from './Numbers'
import Input from './Input'
import Filter from './Filter'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newNumber: '',
      filter: ''
    }
  }

  componentWillMount() {
    axios.get('http://127.0.0.1:3001/persons')
      .then(response => {
        this.setState({ persons: response.data })
      })
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

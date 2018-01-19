import React from 'react';

import Numbers from './components/Numbers'
import Input from './components/Input'
import Filter from './components/Filter'
import numberService from './services/numbers'

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
    numberService.getAll()
      .then(response => {
        this.setState({ persons: response.data })
      })
  }

  addPerson = (event) => {
    event.preventDefault()

    if (this.nameInList(this.state.newName)) {
      return;
    }

    const newPersons = this.state.persons
    const newPerson = { name: this.state.newName, number: this.state.newNumber }
    newPersons.push(newPerson)
    this.setState({ persons: newPersons })
    
    numberService.create(newPerson)
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

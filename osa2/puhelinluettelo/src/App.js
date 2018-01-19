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

    numberService.create({ name: this.state.newName, number: this.state.newNumber })
      .then((res) => {
        const persons = this.state.persons
        persons.push(res.data)
        this.setState({ persons: persons })
      })
  }

  deletePerson = (person) => () => {
    if (window.confirm(`poistetaanko ${person.name}`)) {
      numberService.del(person)

      const newPersons = this.state.persons
      newPersons.splice(newPersons.indexOf(person), 1)

      this.setState({ persons: newPersons })
    }
  }

  nameInList = (name) => this.state.persons.map(person => person.name === name).includes(true)

  handleChange = (field) => (event) => {
    this.setState({ [field]: event.target.value })
  }

  filterNames = () => this.state.persons.filter(person => person.name.toLowerCase().includes(this.state.filter.toLowerCase()))

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <Filter filter={this.state.filter} change={this.handleChange("filter")} />
        <Input state={this.state} addPerson={this.addPerson} change={this.handleChange} />
        <Numbers persons={this.filterNames()} del={this.deletePerson} />
      </div>
    )
  }
}

export default App

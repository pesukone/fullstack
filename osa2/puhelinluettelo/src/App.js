import React from 'react';

import Numbers from './components/Numbers'
import Input from './components/Input'
import Filter from './components/Filter'
import Notification from './components/Notification'
import numberService from './services/numbers'

import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newNumber: '',
      filter: '',
      notification: null
    }
  }

  componentWillMount() {
    numberService.getAll()
      .then(persons => {
        this.setState({ persons: persons })
      })
  }

  addPerson = (event) => {
    event.preventDefault()

    const person = this.findByName(this.state.newName)

    if (person) {
      if (window.confirm(`${person.name} on jo luettelossa, korvataanko vanha numero uudella?`)) {
        const newPerson = Object.assign(person, { number: this.state.newNumber })
        numberService.update(newPerson.id, newPerson)
          .catch(error => {
            numberService.create(newPerson)
          })

        const persons = this.state.persons.filter(p => p.id !== newPerson.id).concat(newPerson)
        this.setState({
          persons: persons,
          notification: "numero päivitetty"
        })
        setTimeout(() => {
          this.setState({ notification: null })
        }, 3000)
      }
    } else {
      numberService.create({ name: this.state.newName, number: this.state.newNumber })
        .then((created) => {
          const persons = this.state.persons
          persons.push(created)
          this.setState({
            persons: persons,
            notification: `lisättiin ${created.name}`
          })
          setTimeout(() => {
            this.setState({ notification: null })
          }, 3000)
        })
    }
  }

  deletePerson = (person) => () => {
    if (window.confirm(`poistetaanko ${person.name}`)) {
      numberService.del(person)

      const newPersons = this.state.persons
      newPersons.splice(newPersons.indexOf(person), 1)

      this.setState({
        persons: newPersons,
        notification: `poistettiin ${person.name}`
      })
      setTimeout(() => {
        this.setState({ notification: null })
      }, 3000)
    }
  }

  //nameInList = (name) => this.state.persons.map(person => person.name === name).includes(true)

  findByName = (name) => this.state.persons.filter(person => person.name.toLowerCase() === name.toLowerCase())[0]

  handleChange = (field) => (event) => {
    this.setState({ [field]: event.target.value })
  }

  filterNames = () => this.state.persons.filter(person => person.name.toLowerCase().includes(this.state.filter.toLowerCase()))

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <Notification message={this.state.notification} />
        <Filter filter={this.state.filter} change={this.handleChange("filter")} />
        <Input state={this.state} addPerson={this.addPerson} change={this.handleChange} />
        <Numbers persons={this.filterNames()} del={this.deletePerson} />
      </div>
    )
  }
}

export default App

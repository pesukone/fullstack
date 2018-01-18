import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas' }
      ],
      newName: ''
    }
  }

  addPerson = (event) => {
    event.preventDefault()

    if (this.nameInList(this.state.newName)) {
      return;
    }

    const new_persons = this.state.persons
    new_persons.push({ name: this.state.newName })
    this.setState({ persons: new_persons })
  }

  nameInList = (name) => this.state.persons.map(person => person.name === name).includes(true)

  handleFieldChange = (event) => {
    this.setState({ newName: event.target.value })
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
            onChange={this.handleFieldChange}
          />
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
        <h2>Numerot</h2>
        {this.state.persons.map(person => <Name person={person} key={person.name} />)}
      </div>
    )
  }
}

const Name = ({ person }) => <div>{person.name}</div>

export default App

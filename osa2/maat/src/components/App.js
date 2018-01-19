import React from 'react'
import axios from 'axios'

import Countries from './Countries'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: [],
      filter: ''
    }
  }

  componentWillMount() {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(res => {
        this.setState({ countries: res.data })
      })
  }

  handleFilterChange = (event) => {
    this.setState({ filter: event.target.value })
  }

  setFilter = (new_filter) => () => {
    this.setState({ filter: new_filter })
  }

  filteredCountries = () =>
    this.state.countries.filter(country =>
      country.name
        .toLowerCase()
        .includes(this.state.filter.toLowerCase()))

  render() {
    return (
      <div>
        <div>
          find countries:
          <input 
            value={this.state.filter}
            onChange={this.handleFilterChange}
          />
        </div>
        <Countries countries={this.filteredCountries()} setter={this.setFilter} />
      </div>
    )
  }
}

export default App

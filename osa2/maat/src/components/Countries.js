import React from 'react'

const Countries = ({ countries, setter }) => 
  moreThanTen(countries) ?
    <div>too many matches, specify another filter</div> :
    justOne(countries) ?
      <Detailed country={countries[0]} /> :
      countries.map(country =>
        <Country
          country={country}
          setter={setter}
          key={country.name}
        />
      )

const Country = ({ country, setter }) => <div onClick={setter(country.name)}>{country.name + "\n"}</div>

const Detailed = ({ country }) => {
  return(
    <div>
      <p><b>{country.name}</b></p>
      <p>capital: {country.capital}</p>
      <p>population: {country.population}</p>
      <img src={country.flag} width="400" alt="" />
    </div>
  )
}

const moreThanTen = (countries) => countries.length > 10

const justOne = (countries) => countries.length === 1

export default Countries

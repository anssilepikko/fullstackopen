import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter.js'
import Countries from './components/Countries.js'

const App = () => {

  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  const hook = () => {
    console.log('Hook effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('Hook promise fulfilled')
        console.log(response.data)
        setCountries(response.data)
      })
  }

  useEffect(hook, [])

  // What happens when there is a change in the filter field
  const handleFilterChange = (event) => {
    console.log(event.target.value)
    // Prints input event value to the input field
    setFilter(event.target.value)
  }

  // Set filter according to input
  const filterCountries = () => {
    if (filter === '') return countries
    const filtered = countries.filter(country => country.name.toUpperCase().includes(filter.toUpperCase()))
    return filtered
  }


  return (
    <div>
      <Filter name={filter} handleName={handleFilterChange} />
      <ul>
        <Countries countries={filterCountries()} />
      </ul>
    </div>
  )
}

export default App
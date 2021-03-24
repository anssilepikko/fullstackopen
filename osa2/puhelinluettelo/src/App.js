import React, { useState } from 'react'
import Numbers from './components/Numbers.js'
import Form from './components/Form.js'
import Filter from './components/Filter.js'

const App = (props) => {
  // All persons in the phonebook
  const [persons, setPersons] = useState(props.persons)
  // State-variables for field entries
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    // Do nothing if name not given
    if (newName === '') return
    // Check if person (name) already exists
    if (findPerson(newName)) {
      // Alert window template string
      window.alert(`${newName} is already added to phonebook`)
      return
    }

    // One persons's details stored in a object
    const personObject = {
      id: persons.length + 1,
      name: newName,
      number: newNumber
    }

    // Add new person to persons-state
    setPersons(persons.concat(personObject))
    console.log('New person added to phonebook:', personObject)

    // Reset the states (input fields)
    setNewName('')
    setNewNumber('')
    setNewNumber('')
    console.log('Fields reset')
  }

  // What happens when there is a change in the name
  const handleNameChange = (event) => {
    console.log(event.target.value)
    // Prints input event value to the input field
    setNewName(event.target.value)
  }

  // What happens when there is a change in the number field
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    // Prints input event value to the input field
    setNewNumber(event.target.value)
  }

  // What happens when there is a change in the filter field
  const handleFilterChange = (event) => {
    console.log(event.target.value)
    // Prints input event value to the input field
    setNewFilter(event.target.value)
  }

  const findPerson = (person) => {
    console.log(persons)
    console.log('FindPerson input:', person)
    // Loop trough objects and find an object with the same name
    // Return true if found, false if not found
    const found = persons.find(item => item.name === person)
    console.log('Found:', found)
    return found
  }

  const filterNumbers = () => {
    if (newFilter === '') return persons
    // Serach matching strings from names
    const filtered = persons.filter(person => person.name.toUpperCase().includes(newFilter.toUpperCase()))
    return filtered
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Form addPerson={addPerson} name={newName} handleName={handleNameChange} number={newNumber} handleNumber={handleNumberChange} />
      <h2>Numbers</h2>
      <Filter name={newFilter} handleName={handleFilterChange} />
      <ul>
        <Numbers numbers={filterNumbers()} />
      </ul>
    </div>
  )

}

export default App
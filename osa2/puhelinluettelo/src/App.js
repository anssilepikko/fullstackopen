import React, { useState } from 'react'
import Person from './components/Person'

const App = (props) => {
  // All persons in the phonebook
  const [persons, setPersons] = useState(props.persons)
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    // Check if person (name) already exists
    if (findPerson(newName)) {
      // Template string
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
    
    // Clean the input fields
    setNewName('')
    setNewNumber('')
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

  const findPerson = (person) => {
    console.log('FindPerson input:', person)
    // Loop trough objects and find an object with the same name
    // Return true if found, false if not found
    const found = persons.find(item => item.name === person)
    if (found) {
      console.log('FindPerson found:', found)
      return true
    }
    console.log('FindPerson', person, 'not in phonebook')
    return false
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person =>
          <Person key={person.id} person={person} />
        )}
      </ul>
    </div>
  )

}

export default App
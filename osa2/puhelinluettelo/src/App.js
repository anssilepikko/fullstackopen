import React, { useState } from 'react'
import Person from './components/Person'

const App = (props) => {
  // All persons in the phonebook
  const [ persons, setPersons] = useState(props.persons) 
  const [ newName, setNewName ] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    // One persons's details stored in a object
    const personObject = {
      id: persons.length + 1,
      name: newName,
      number: 1234567890
    }
  // Add new person to persons-state
  setPersons(persons.concat(personObject))
  // Cleans the input field
  setNewName('')
  }

  // What happens when there is a change in the input field
  const handleNameChange = (event) => {
    console.log(event.target.value)
    // Prints input event value to the input field
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
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
import React, { useEffect, useState } from 'react'
import Numbers from './components/Numbers.js'
import Form from './components/Form.js'
import Filter from './components/Filter.js'
import personService from './services/persons.js'


const App = (props) => {
  // Tilojen määritys
  // Kaikki henkilöt puhelinluettelossa
  const [persons, setPersons] = useState(props.persons)
  // Tilamuuttujat inputeille
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  // Haetaan henkilöt serveriltä ja asetetaan
  // ne tilamuuttujaan
  useEffect(() => {
    personService
      .getAll()
      .then(serverPersons => {
        setPersons(serverPersons)
      })
  }, [])

  const addPerson = (event) => {
    // Estetään sivun latautuminen
    event.preventDefault()

    // Palataan, jos nimeä ei ole annettu
    if (newName === '') return

    // Henkilö-objekti, jossa nimi ja numero
    const personObject = {
      name: newName,
      number: newNumber
    }

    // Tarkistetaan löytyykö nimi jo luettelosta
    if (findPerson(newName)) {
      // Ilmoitusikkuna, jos löytyy
      const confirmReplace = window.confirm(`${newName} is already added to phonebook. Replace the number with a new one?`)

      if (confirmReplace) {
        // Etsitään nimeä vastaava henkilö
        const person = persons.find(person => person.name === newName)
        // Kopioidaan person ja muutetaan kopion number-kenttää
        const edited = { ...person, number: newNumber }
        // const id = person.id
        const { id } = person

        personService
          .update(id, edited)
          .then(returned => {
            // Päivitetään tilan henkilö
            setPersons(
              persons.map(person =>
                person.id !== id ? person : returned
              )
            )
          }
          )
      }
      // Palataan takaisin, jos numeroa ei vaihdeta
      return
    }

    // Lähetetään henkilön tiedot oliona serverille
    // Vastaanotetaan serveriltä saatu vastaus,
    // jossa tiedot ja lisätään ne ohjelman tilaan
    personService
      .create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
      })

    console.log('New person added to phonebook:', personObject)

    // Input-kenttien nollaus
    setNewName('')
    setNewNumber('')
    setNewFilter('')
    console.log('Fields reset')
  }

  // Mitä tapahtuu, kun nimikentässä havaitaan tapahtuma
  const handleNameChange = (event) => {
    // console.log(event.target.value)
    // Printataan tapahtuman arvo eli kirjain kenttään
    setNewName(event.target.value)
  }

  // Mitä tapahtuu, kun numerokentässä havaitaan tapahtuma
  const handleNumberChange = (event) => {
    //console.log(event.target.value)
    // Printataan tapahtuman arvo eli numero kenttään
    setNewNumber(event.target.value)
  }

  // Mitä tapahtuu, kun filtterikentässä havaitaan tapahtuma
  const handleFilterChange = (event) => {
    //console.log(event.target.value)
    // Printataan tapahtuman arvo eli kirjain kenttään
    setNewFilter(event.target.value)
  }

  const handleRemove = (id) => {
    console.log('app.js / handleRemove / id:', id)
    const person = persons.find(person => person.id === id)
    const remove = window.confirm(`Remove ${person.name} from phonebook?`)
    if (remove) {
      personService.remove(id).then(() => {
        const filterOut = persons.filter(person => person.id !== id)
        setPersons(filterOut)
        console.log((`Person ${person.name} removed from phonebook`))
      })
    }

  }

  const findPerson = (person) => {
    console.log(persons)
    console.log('FindPerson input:', person)
    // Käydään nimet läpi
    // Palautetaan true, jos löytyy
    // Palautetaan false, jos ei löydy
    const found = persons.find(item => item.name === person)
    console.log('Found:', found)
    return found
  }

  const filterNumbers = () => {
    if (newFilter === '') return persons
    // Etsitään hakuehtoa vastaavat nimet ja palautetaan ne
    const filtered = persons.filter(person => person.name.toUpperCase().includes(newFilter.toUpperCase()))
    return filtered
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Form addPerson={addPerson}
        name={newName}
        handleName={handleNameChange}
        number={newNumber}
        handleNumber={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Filter
        name={newFilter}
        handleName={handleFilterChange}
      />
      <ul>
        <Numbers
          numbers={filterNumbers()}
          handleRemove={handleRemove}
        />
      </ul>
    </div>
  )

}

export default App
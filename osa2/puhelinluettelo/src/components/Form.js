import React from 'react'

const Form = ({addPerson, newName, handleName, newNumber, handleNumber }) => {
  return (
    <div>
      <form onSubmit={addPerson}>
        <div>
          Name: <input value={newName} onChange={handleName} />
        </div>
        <div>
          Number: <input value={newNumber} onChange={handleNumber} />
        </div>
        <div>
          <button type="submit">Add a new person</button>
        </div>
      </form>
    </div>
  )
}

export default Form





import React from 'react'

const Number = ({ person, handleRemove }) => {
  return (
    <li>{person.name} / {person.number} / {person.id} / <button className="button" onClick={() => handleRemove(person.id)}>Remove</button></li>
  )
}

export default Number
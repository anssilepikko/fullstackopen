import React from 'react'

const Number = ({ person, handleRemove }) => {
  return (
    <li className='note'>{person.name} / {person.number} / {person.id} / <button type='button' className='button' onClick={() => handleRemove(person.id)}>Remove</button></li>
  )
}

export default Number
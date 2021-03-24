import React from 'react'

const Filter = ({newFilter, handleName }) => {
  return (
        <div>
          Filter: <input value={newFilter} onChange={handleName} />
        </div>
  )
}

export default Filter




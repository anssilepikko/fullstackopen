import React from 'react'
import Number from './Number.js'

const Numbers = ({ numbers, handleRemove }) => {
    return (
        <>
            {numbers.map(person =>
                <Number key={person.id}
                person={person}
                // Remove-nappi
                handleRemove={handleRemove}
                />
            )}

        </>
    )
}

export default Numbers
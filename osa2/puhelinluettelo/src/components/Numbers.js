import React from 'react'
import Number from './Number.js'

const Numbers = ({ numbers }) => {
    return (
        <>
            {numbers.map(person =>
                <Number key={person.id} person={person} />
            )}

        </>
    )
}

export default Numbers
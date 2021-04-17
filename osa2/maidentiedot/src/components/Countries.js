import React from 'react'
import Country from './Country.js'

const Countries = ({ countries }) => {
    if (countries.length > 10) {
        return (
            <>
                <p>Too many matches, specify another filter</p>
            </>
        )
    }

    if (countries.length === 1) {
        return (
            <>
            {countries.map(country =>
                <Country key={country.name} country={country} details={true} />
            )}

        </>
        )
    }
    

    return (
        <>
            {countries.map(country =>
                <Country key={country.name} country={country} />
            )}

        </>
    )
}

export default Countries
import React from 'react'
import Country from './Country.js'

const Countries = ({ countries, showDetails, selected }) => {

    if (countries.length > 10) {
        return (
            <>
                <p>Too many matches, specify another filter</p>
            </>
        )
    }

    if (countries.length === 1) {
        selected = countries[0].name
        console.log('Countries.js / selected:', selected)
    }

    return (
        <>
            {countries.map(country =>
                <Country key={country.name} country={country} showDetails={showDetails} selected={selected} />
            )}

        </>
    )
}

export default Countries
import React from 'react'
import Language from './Language.js'

const Country = ({ country, details }) => {
    if (details === true) {
        return (
            <li>
                <h2>{country.name}</h2>
                Capital: {country.capital}<br />
                Population: {country.population}<br />
                <h3>Languages</h3>
                <ul>
                    {country.languages.map(language =>
                        <Language key={language.name} language={language} />
                    )}
                </ul>
            </li>
        )
    }

    return (
        <li>{country.name}</li>
    )
}

export default Country
import React from 'react'
import Language from './Language.js'

const Country = ({ country, showDetails, selected }) => {

    //console.log('Country.js / country:', country.name)
    //console.log('Country.js / selected:', selected)

    if (country.name === selected) {
        console.log('Country.js / Showing details of:', selected)
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
                <br />
            </li>
        )
    }

    return (
        <li>{country.name} <button value={country.name} onClick={showDetails}>show</button></li>
    )
}

export default Country
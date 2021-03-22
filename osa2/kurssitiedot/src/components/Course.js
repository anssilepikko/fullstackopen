import React from 'react'
import Total from './Total.js'
import Name from './Content.js'

const Course = ({courses}) => {
    return (
        <div>
            <h1>Web Development Curriculum</h1>
            <Name courses={courses} />
            <Total courses={courses} />
        </div>
    )
}

export default Course
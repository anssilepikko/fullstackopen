import React from 'react'

const Course = ({ courses }) => {
    console.log(courses)
    console.log(courses.parts)
    const total = courses.parts.reduce((acc, current) => acc + current.exercises, 0)
    return (
        <div>
            <h1>{courses.name}</h1>
            <ul>
                {courses.parts.map(course =>
                    <li key={course.id}>{course.name} {course.exercises}</li>)}
            </ul>
            <ul>
                <li>Total of {total} exercises</li>
            </ul>
        </div>
    )
}

export default Course
import React from 'react'

const Total = ({ courses }) => {
    const totalExercises = courses.reduce((allTotal, course) => {
        const sum = course.parts.reduce((total, exercise) => {
            return total + exercise.exercises
        }, 0)
        return allTotal + sum
    }, 0)
    console.log(totalExercises)
    return (
        <>
            <br />
            <b>Curriculum consist of {totalExercises} exercises</b>
        </>
    )
}

export default Total
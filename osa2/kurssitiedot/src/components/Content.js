import React from 'react'

const Content = ({ courses }) => {
    console.log(courses)
    return (
        <>
            {courses.map((item, index) => (
                <div key={index}>
                    <h3>{item.name}</h3>
                    {item.parts.map((c, i) => (
                        <ul key={i}>
                            <li>{c.name} {c.exercises}</li>
                        </ul>
                    ))}
                    <ul>
                        <li><b>Total of {item.parts.reduce((sum, { exercises }) => sum + exercises, 0)} exercises</b></li>
                    </ul>
                </div>
            ))
            }
        </>
    )
}

export default Content













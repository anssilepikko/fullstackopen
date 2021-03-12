import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  console.log(props)
  return (
    <>
    <h1>{props.course}</h1>
    </>
    )
}

const Content = (props) => {
  console.log(props)
  return (
    <>
      <Part parts={props.parts[0].name} exercises={props.parts[0].exercises} />
      <Part parts={props.parts[1].name} exercises={props.parts[1].exercises} />
      <Part parts={props.parts[2].name} exercises={props.parts[2].exercises} />
    </>
    )
}

const Part = (props) => {
  console.log(props)
  return (
    <p>{props.parts} {props.exercises}</p>
  )
}

const Total = (props) => {
  let sumOfParts = props.parts.reduce((name, item) => item.exercises, 0)
  return (
    <>
    <p>Number of exercise {sumOfParts}</p>
    </>
    )
}

const App = () => {
  const course = {
    name: 'Half Stack Application Development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using Props to Pass Data',
        exercises: 7
      },
      {
        name: 'State of a Component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course = {course.name} />
      <Content parts = {course.parts} />
      <Total parts = {course.parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
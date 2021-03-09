import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <>
    <h1>{props.course}</h1>
    </>
    )
}

const Content = (props) => {
  return (
    <>
      <p>
      <Part parts={props.parts[0]} exercises={props.exercises[0]} />
      </p>
      <p>
      <Part parts={props.parts[1]} exercises={props.exercises[1]} />
      </p>
      <p>
      <Part parts={props.parts[2]} exercises={props.exercises[2]} />
      </p>
    </>
    )
}

const Part = (props) => {
  return (
    <p>{props.parts} {props.exercises}</p>
  )
}

const Total = (props) => {
  return (
    <>
    <p>Number of exercise {props.exercises.reduce((a, b, c) => a + b + c)}</p>
    </>
    )
}

const App = () => {
  const course = 'Half Stack Application Development'

  const parts = ['Fundamentals of React', 'Using Props To Pass Data', 'State of A Component']
  const exercises = [10, 7, 14]

  return (
    <div>
      <Header course={course} />
      <Content exercises = {exercises} parts = {parts} />
      <Total exercises = {exercises} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
import React, { useState } from 'react'

// Napin parametrit, tuodaan funktio ja napin teksti
const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>{text}</button>
)

const Statistics = ({good, neutral, bad}) => {

  const countVotes = () => {
    return good + neutral + bad
  }

  const countAverage = () => {
    let plus = good * 1
    let minus = bad * -1
    let points = plus + minus
    return points / countVotes()
  }

  const countPositive = () => {
    return good / countVotes()
  }
  
  if (countVotes() > 0) {
    return (
    <div>
    good: {good}<br/>
    neutral: {neutral}<br/>
    bad: {bad}<br/>
    votes: {countVotes()}<br/>
    average: {countAverage()}<br/>
    positive: {countPositive()}<br/>
    </div>
    )
  }
  return (
  <div>No feedback given!</div>
  )
}

const App = () => {
  // Jokaiselle äänelle oma state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const voteGood = () => { 
    setGood(good + 1)
  }

  const voteNeutral = () => {
    setNeutral(neutral + 1)
  }

  const voteBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>Vote</h1>
      <div>
        <Button handleClick={voteGood} text='Good' />
        <Button handleClick={voteNeutral} text='Neutral' />
        <Button handleClick={voteBad} text='Bad' />
      </div>
      <h1>Statistics</h1>
      <div>
        <Statistics good={good} neutral={neutral} bad={bad} />
      </div>
    </div>
  )
}

export default App
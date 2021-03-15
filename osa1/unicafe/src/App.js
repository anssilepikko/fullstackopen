import React, { useState } from 'react'

// Napin parametrit, tuodaan funktio ja napin teksti
const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>{text}</button>
)

const Display = ({element, text}) => <div>{text}: {element}</div>

const App = () => {
  // Jokaiselle äänelle oma state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const [votes, setVotes] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const voteGood = () => { 
    setGood(good + 1)
    countVotes()
    countAverage()
    countPositive()
  }

  const voteNeutral = () => {
    setNeutral(neutral + 1)
    countVotes()
    countAverage()
    countPositive()
  }

  const voteBad = () => {
    setBad(bad + 1)
    countVotes()
    countAverage()
    countPositive()
  }
  
  const countVotes = () => {
    setVotes(votes + 1)
  }

  const countAverage = () => {
    let plus = good * 1
    let minus = bad * -1
    let points = plus + minus
    setAverage(points / votes)
  }

  const countPositive = () => {
    setPositive(good / votes)
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
        <Display element={good} text='Good' />
        <Display element={neutral} text='Neutral' />
        <Display element={bad} text='Bad' />
        <Display element={votes} text='All' />
        <Display element={average} text='Average' />
        <Display element={positive} text='Positive' />
      </div>
    </div>
  )
}

export default App
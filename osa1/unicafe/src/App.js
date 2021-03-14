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

  const voteGood = () => setGood(good + 1)
  const voteNeutral = () => setNeutral(neutral + 1)
  const voteBad = () => setBad(bad + 1)

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
      </div>
    </div>
  )
}

export default App
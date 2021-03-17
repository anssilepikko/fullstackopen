import React, { useState } from 'react'

// Napin parametrit, tuodaan funktio ja napin teksti
const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>{text}</button>
)

const StatisticLine = ({statistic, text}) => {
  return (
  <>
  <tr>
    <td>{text}:</td>
    <td>{statistic}</td>
  </tr>
  </>
  )
}

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
    <>
      <table>
        <tbody>
          <StatisticLine statistic={good} text='Good' />
          <StatisticLine statistic={neutral} text='Neutral' />
          <StatisticLine statistic={bad} text='Good' />
          <StatisticLine statistic={countVotes()} text='Votes' />
          <StatisticLine statistic={countAverage()} text='Average' />
          <StatisticLine statistic={countPositive()} text='Positive' />
        </tbody>
      </table>
    </>
    )
  }
  return (
  <div>No feedback given!</div>
  )
}

const App = () => {
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
    <h1>Give feedback!</h1>
  <table>
    <tbody>
      <tr>
        <td><Button handleClick={voteGood} text='Good' /></td>
        <td><Button handleClick={voteNeutral} text='Neutral' /></td>
        <td><Button handleClick={voteBad} text='Bad' /></td>
        </tr>
    </tbody>
  </table>
  <h1>Results</h1>
    <Statistics good={good} neutral={neutral} bad={bad} />
  </div>
  )
}

export default App
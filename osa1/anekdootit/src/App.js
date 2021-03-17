import React, { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes]= useState(new Uint8Array(anecdotes.length))
  const [best, setBest] = useState(0)
  
  const randomize = () => {
    let rand = Math.floor(Math.random() * anecdotes.length)
    setSelected(rand)
  }

  const vote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
    setBest(copy.indexOf(findMax(copy)))
    console.log(copy)
  }

  function findMax(array) {
    return array.reduce(function (a, b) {
      return ( a > b ? a : b );
    });
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Button event={randomize} text='Randomize' />
      <Button event={vote} text='Vote' />
      <p>{anecdotes[selected]}</p>
      <p>Voted {votes[selected]} times</p>  
      <h1>Most voted anecdote</h1>
      <p>{anecdotes[best]}</p>
      <p>Voted {votes[best]} times</p> 
    </div>
  )
}

const Button = ({event, text}) => (
  <button onClick = {event}>{text}</button>
)

export default App
import React, {useState} from 'react'

const App = () => {
  const [counter, setCounter] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  return (
    <div>
      <Display counter={counter} />
      <Button handleClick={setToZero} text='zero' />
      <Button handleClick={increaseByOne} text='plussa' />
      <Button handleClick={decreaseByOne} text='miinus' />
    </div>
  )
}

// Komponentti tarvitsee ainoastaan propsin kenttää counter,
// joten se voidaan yksinkertaistaa destrukturoinnin avulla
// seuraavaan muotoon: (props) -> ({counter})

// Koska komponentin määrittelevä funktio ei sisällä muuta
// kuin returnin, voimme määritellä sen hyödyntäen
// nuolifunktioiden tiiviimpää ilmaisumuotoa ilman return-lausetta
const Display = ({counter}) => <div>{counter}</div>


const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>
      {text}
    </button>
)

export default App
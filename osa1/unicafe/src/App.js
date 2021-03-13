import React, {useState} from 'react'

// Komponentin tila ja tapahtumankäsittely

const App1 = () => {
  const [counter, setCounter] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  return (
    <div>
      <Display counter={counter} />
      <ButtonOne handleClick={setToZero} text='zero' />
      <ButtonOne handleClick={increaseByOne} text='plussa' />
      <ButtonOne handleClick={decreaseByOne} text='miinus' />
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

const ButtonOne = ({handleClick, text}) => (
    <button onClick={handleClick}>
      {text}
    </button>
)


// Monimutkaisempi tila, Reactin debuggaus

const App2 = () => {
  // Olio nappien left ja right painalluksille arvon 0 sijasta
  const [clicks, setClicks] = useState({
    left: 0,
    right: 0
  })

/*
  const handleLeftClick = () => {
    const newClicks = {
      left: clicks.left + 1,
      // Kentän arvo sama kuin alkuperäinen
      right: clicks.right
    }
    setClicks(newClicks)
  }

  const handleRightClick = () => {
    const newClicks = {
      // Kentän arvo sama kuin alkuperäinen
      left: clicks.left,
      right: clicks.right + 1
    }
    setClicks(newClicks)
  }
 */

  // ...olionNimi luo uuden olion kopiona vanhasta
  const handleLeftClick = () => setClicks({ ...clicks, left: clicks.left + 1})
  const handleRightClick = () => setClicks({ ...clicks, right: clicks.right + 1})

  return (
    <div>
      <div>
        {clicks.left}
        <button onClick={handleLeftClick}>left</button>
        <button onClick={handleRightClick}>right</button>
        {clicks.right}
      </div>
    </div>
  )
}


// Taulukon käsittelyä

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        The app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
    Button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  return (
    <div>
      <div>
        {left}
        <Button handleClick={handleLeftClick} text='LEFT' />
        <Button handleClick={handleRightClick} text='RIGHT' />
        {right}
        <p>{allClicks.join('')}</p>
        <History allClicks={allClicks} />
      </div>
    </div>
  )
}


export default App
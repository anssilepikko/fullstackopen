import ReactDOM from 'react-dom'
import App from './App.js'

const persons = [
  {
    id: 1,
    name: 'Arto Hellas',
    number: 1234567890
  }
]

ReactDOM.render(
  <App persons={persons} />,
  document.getElementById('root')
)
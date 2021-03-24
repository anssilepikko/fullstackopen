import ReactDOM from 'react-dom'
import App from './App.js'

const persons = [
  {
    id: 1,
    name: 'Arto Hellas',
    number: '091847567'
  },
  {
    id: 2,
    name: 'Katto Kassinen',
    number: '059566409'
  },
  {
    id: 3,
    name: 'Kaapo Kaulin',
    number: '026740567'
  },
  {
    id: 4,
    name: 'Kierre Kulmikas',
    number: '018465595'
  },
  {
    id: 5,
    name: 'Kaato Kolmikas',
    number: '027595649'
  }
]

ReactDOM.render(
  <App persons={persons} />,
  document.getElementById('root')
)
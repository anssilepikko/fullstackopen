import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

// Hakee tiedot serveriltä ja palauttaa reponsen
// data-kentän, jossa tiedot ovat taulukkomuodossa
const getAll = () => {
    // Axios palauttaa promisen
    const request =  axios.get(baseUrl)
    console.log('persons.js / getAll / request', request)
    // Koska then:in parametri palauttaa suoraan arvon
    // response.data, on funktion getAll palauttama
    // promise sellainen, että jos HTTP-kutsu onnistuu,
    // antaa promise takaisinkutsulleen HTTP-pyynnön
    // mukana olleen datan
    return request.then(response => response.data)

}
const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}
const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
}
const remove = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    console.log('persons.js / remove / request', request)
    return request.then(response => response.data)
}


// Koska olion kenttien nimet ovat samat kuin
// niiden arvon määrittelevien muuttujien nimet,
// voidaan olion määrittely kirjoittaa tiivimmässä muodossa:
export default { getAll, create, update, remove }
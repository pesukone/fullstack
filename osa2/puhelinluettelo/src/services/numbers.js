import axios from 'axios'
const baseUrl = 'http://127.0.0.1:3001/persons'

const getAll = () => axios.get(baseUrl)

const create = (newPerson) => axios.post(baseUrl, newPerson)

const del = (person) => axios.delete(`${baseUrl}/${person.id}`)

const update = (id, person) => axios.put(`${baseUrl}/${id}`, person)

export default { getAll, create, del, update }

import axios from 'axios'
const baseUrl = 'http://127.0.0.1:3001/persons'

const getAll = () => axios.get(baseUrl).then(res => res.data)

const create = (newPerson) => axios.post(baseUrl, newPerson).then(res => res.data)

const del = (person) => axios.delete(`${baseUrl}/${person.id}`).then(res => res.data)

const update = (id, person) => axios.put(`${baseUrl}/${id}`, person).then(res => res.data)

export default { getAll, create, del, update }

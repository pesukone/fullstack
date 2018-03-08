import axios from 'axios'

const url = 'http://127.0.0.1:3001/anecdotes'

const getAll = async () => {
  const res = await axios.get(url)
  return res.data
}

const createNew = async (content) => {
  const res = await axios.post(url, { content, votes: 0 })
  return res.data
}

const update = async (id, data) => {
  const res = await axios.put(`${url}/${id}`, data)
  return res.data
}

export default { getAll, createNew, update }

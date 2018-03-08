import axios from 'axios'

const url = 'http://127.0.0.1:3001/anecdotes'

const getAll = async () => {
  const res = await axios.get(url)
  return res.data
}

export default { getAll }

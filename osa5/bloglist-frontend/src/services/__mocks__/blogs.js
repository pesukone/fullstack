let token = null

const blogs = [
  {
    id: '12345',
    title: 'otsake1',
    author: 'kirjoittaja1',
    url: 'http.cat',
    likes: 10,
    user: {
      name: 'asd'
    }
  },
  {
    id: '12346',
    title: 'otsake2',
    author: 'kirjoittaja2',
    url: 'http.cat',
    likes: 10,
    user: {
      name: 'asd'
    }
  },
  {
    id: '12347',
    title: 'otsake3',
    author: 'kirjoittaja3',
    url: 'http.cat',
    likes: 10,
    user: {
      name: 'asd'
    }
  }
]

const getAll = () => Promise.resolve(blogs)

const setToken = (newToken) => {
  token = newToken
}

export default { blogs, getAll, setToken }

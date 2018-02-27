const blogs = [
  {
    id: '12345',
    title: 'otsake1',
    author: 'kirjoittaja1',
    url: 'http.cat',
    likes: 10
  },
  {
    id: '12346',
    title: 'otsake2',
    author: 'kirjoittaja2',
    url: 'http.cat',
    likes: 10
  },
  {
    id: '12347',
    title: 'otsake3',
    author: 'kirjoittaja3',
    url: 'http.cat',
    likes: 10
  }
]

const getAll = () => Promise.resolve(blogs)

export default { blogs, getAll }

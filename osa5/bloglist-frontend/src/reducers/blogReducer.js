import blogService from '../services/blogs'

const initialState = []

const blogReducer = (store = initialState, action) => {
  switch (action.type) {
    case 'INIT_BLOGS':
      return action.blogs
    case 'DELETE':
      return store.filter(b => b.id !== action.id)
    case 'LIKE': {
      const liked = store.filter(b => b.id === action.id)[0]
      const rest = store.filter(b => b.id !== action.id)
      return [...rest, { ...liked, likes: liked.likes + 1 }]
    }
    case 'CREATE':
      return [...store, action.created]
    default:
      return store
  }
}

export const initBlogs = () =>
  async (dispatch) => {
    const blogs = await blogService.getAll()
    dispatch({
      type: 'INIT_BLOGS',
      blogs
    })
  }

export const create = blog =>
  async (dispatch) => {
    const created = await blogService.create(blog)
    dispatch({
      type: 'CREATE',
      created
    })
    return created
  }

export const remove = id =>
  async (dispatch) => {
    await blogService.remove(id)
    dispatch({
      type: 'DELETE',
      id
    })
  }

export const like = blog =>
  async (dispatch) => {
    await blogService.update(blog.id, { ...blog, likes: blog.likes + 1 })
    dispatch({
      type: 'LIKE',
      id: blog.id
    })
  }

export default blogReducer

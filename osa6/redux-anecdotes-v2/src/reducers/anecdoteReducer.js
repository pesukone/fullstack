import anecdoteService from '../services/anecdotes'

const reducer = (store = [], action) => {
  switch (action.type) {
    case 'VOTE': {
      const old = store.filter(a => a.id !==action.id)
      const voted = store.find(a => a.id === action.id)

      return [...old, { ...voted, votes: voted.votes + 1 } ]
    }
    case 'CREATE':
      return [...store, action.anecdote]
    case 'INIT_ANECDOTES':
      return action.data
    default:
      return store
  }
}

export const voting = (id) => ({
  type: 'VOTE',
  id: id
})

export const creating = (anecdote) => ({
  type: 'CREATE',
  anecdote
})

export const initAnecdotes = (data) => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }
}

export default reducer

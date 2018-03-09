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

export const vote = (anecdote) => {
  return async (dispatch) => {
    await anecdoteService
      .update(
        anecdote.id,
        { ...anecdote, votes: anecdote.votes + 1 }
      )
    dispatch({
      type: 'VOTE',
      id: anecdote.id
    })
  }
}

export const createNew = (content) => {
  return async (dispatch) => {
    const anecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'CREATE',
      anecdote
    })
  }
}

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

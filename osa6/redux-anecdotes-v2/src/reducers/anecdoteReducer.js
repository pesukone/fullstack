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

export const anecdoteInitialization = (data) => ({
  type: 'INIT_ANECDOTES',
  data
})

export default reducer

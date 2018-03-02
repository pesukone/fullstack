const actionFor = {
  voting(id) {
    return {
      type: 'VOTE',
      data: { id }
    }
  },
  anecdoteCreation(anecdote) {
    return {
      type: 'CREATE',
      data: { anecdote }
    }
  }
}

export default actionFor

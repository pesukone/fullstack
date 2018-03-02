const actionFor = {
  vote(id) {
    return {
      type: 'VOTE',
      data: { id }
    }
  }
}

export default actionFor

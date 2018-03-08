const initialState = 'kukkuu'

const notificationReducer = (store = initialState, action) => {
  switch (action.type) {
    case 'NOTIFICATION':
      return action.text
    default:
      return store
  }
}

export const notify = (text) => ({
  type: 'NOTIFICATION',
  text
})

export default notificationReducer

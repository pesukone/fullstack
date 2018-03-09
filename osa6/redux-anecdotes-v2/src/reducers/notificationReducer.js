const initialState = ''

const notificationReducer = (store = initialState, action) => {
  switch (action.type) {
    case 'NOTIFICATION':
      return action.text
    default:
      return store
  }
}

export const notify = (text, time) => {
  return async (dispatch) => {
    dispatch({
      type: 'NOTIFICATION',
      text
    })
    setTimeout(() =>
      dispatch({
      type: 'NOTIFICATION',
      text: ''
    }), time * 1000)
  }
}

export default notificationReducer

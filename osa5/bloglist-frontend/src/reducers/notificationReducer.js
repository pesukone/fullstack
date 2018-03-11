const initialState = { notification: '', error: '' }

const notificationReducer = (store = initialState, action) => {
  switch (action.type) {
    case 'NOTIFICATION':
      return { ...store, notification: action.text }
    case 'ERROR':
      return { ...store, error: action.text }
    default:
      return store
  }
}

const show = type => (text, time) =>
  async (dispatch) => {
    dispatch({
      type,
      text
    })
    setTimeout(() => {
      dispatch({
        type,
        text: ''
      })
    }, time * 1000)
  }

export const error = show('ERROR')

export const notify = show('NOTIFICATION')

export default notificationReducer

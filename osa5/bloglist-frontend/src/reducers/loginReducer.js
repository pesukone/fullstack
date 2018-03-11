import login from '../services/login'

const initialState = null

const loginReducer = (store = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...store, current: action.user }
    case 'LOGOUT':
      return { ...store, current: null }
    default:
      return store
  }
}

export const loginAs = user => dispatch =>
  dispatch({
    type: 'LOGIN',
    user
  })

export const authenticateWith = credentials => async (dispatch) => {
  const user = await login(credentials)
  dispatch({
    type: 'LOGIN',
    user
  })
  return user
}

export const logout = () =>
  dispatch => dispatch({ type: 'LOGOUT' })

export default loginReducer

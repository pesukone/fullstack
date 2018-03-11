import login from '../services/login'

const initialState = null

const userReducer = (store = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return action.user
    case 'LOGOUT':
      return null
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
}

export const logout = () =>
  dispatch => dispatch({ type: 'LOGOUT' })


export default userReducer

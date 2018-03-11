import userService from '../services/users'

const initialState = []

const userReducer = (store = initialState, action) => {
  switch (action.type) {
    case 'INIT_USERS':
      return action.users
    default:
      return store
  }
}

export const initUsers = () => async (dispatch) => {
  const users = await userService.getAll()
  dispatch({
    type: 'INIT_USERS',
    users
  })
}

export default userReducer

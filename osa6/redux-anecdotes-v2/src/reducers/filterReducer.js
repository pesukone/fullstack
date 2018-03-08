const initialFilter = ''

const filterReducer = (store = initialFilter, action) => {
  switch (action.type) {
    case 'FILTER':
      return action.text
    default:
      return store
  }
}

export const filtering = (text) => ({
  type: 'FILTER',
  text
})

export default filterReducer

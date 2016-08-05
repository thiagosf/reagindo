import { SET_PAGINATION } from '../constants'

const initialState = {
  page: 1,
  page_count: 0,
  limit: 1,
  sort: null
}

function pagination(state = initialState, action) {
  switch (action.type) {
    case SET_PAGINATION:
      return Object.assign({}, initialState, action.options)
    default:
      return state
  }
}

export default pagination

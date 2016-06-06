import {
  REMOVE_POST,
  REQUEST_POSTS,
  RECEIVE_POSTS
} from '../constants'

const initialState = { isFetching: false, posts: [], page: 1 }

function posts(state = initialState, action) {
  switch (action.type) {
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true
      })

    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        posts: action.posts
      })

    default:
      return state
  }
}

export default posts

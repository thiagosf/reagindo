import {
  REMOVE_POST,
  REQUEST_POSTS,
  REQUEST_POST,
  RECEIVE_POSTS,
  RECEIVE_POST
} from '../constants'

const initialState = {
  isFetching: false,
  posts: [],
  page: 1,
  post: {},
  id: null
}

function posts(state = initialState, action) {
  switch (action.type) {
    case REQUEST_POSTS:
    case REQUEST_POST:
      return Object.assign({}, state, {
        isFetching: true
      })

    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        posts: action.posts
      })

    case RECEIVE_POST:
      return Object.assign({}, state, {
        isFetching: false,
        post: action.post,
        id: action.id
      })

    default:
      return state
  }
}

export default posts

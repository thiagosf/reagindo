import {
  REMOVE_POST,
  REQUEST_POSTS,
  REQUEST_POST,
  RECEIVE_POSTS,
  RECEIVE_POST,
  SENDING_POST
} from '../constants'

const initialState = {
  isFetching: false,
  isSending: false,
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
        isFetching: true,
        isSending: false
      })

    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        isSending: false,
        posts: action.posts
      })

    case RECEIVE_POST:
      return Object.assign({}, state, {
        isFetching: false,
        isSending: false,
        post: action.post,
        id: action.id
      })

    case SENDING_POST:
      return Object.assign({}, state, {
        isFetching: false,
        isSending: true
      })

    case SAVED_POST:
      return Object.assign({}, state, {
        isFetching: false,
        isSending: false,
        id: action.id
      })

    default:
      return state
  }
}

export default posts

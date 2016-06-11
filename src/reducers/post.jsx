import {
  REMOVE_POST,
  REQUEST_POSTS,
  REQUEST_POST,
  RECEIVE_POSTS,
  RECEIVE_POST,
  SENDING_POST,
  SAVED_POST
} from '../constants'

const initialState = {
  isFetching: false,
  isSending: false,
  isSaved: false,
  posts: [],
  page: 1,
  post: {},
  id: null,
  message: null
}

function post(state = initialState, action) {
  switch (action.type) {
    case REQUEST_POSTS:
    case REQUEST_POST:
      return Object.assign({}, state, {
        isFetching: true,
        isSending: false,
        isSaved: false,
        message: null
      })

    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        isSending: false,
        isSaved: false,
        posts: action.posts,
        message: null
      })

    case RECEIVE_POST:
      return Object.assign({}, state, {
        isFetching: false,
        isSending: false,
        isSaved: false,
        post: action.post,
        id: action.id,
        message: null
      })

    case SENDING_POST:
      return Object.assign({}, state, {
        isFetching: false,
        isSending: true,
        message: null
      })

    case SAVED_POST:
      return Object.assign({}, state, {
        isFetching: false,
        isSending: false,
        isSaved: true,
        id: action.id,
        message: action.message
      })

    default:
      return state
  }
}

export default post

import {
  CREATE_POST,
  REMOVE_POST,
  REQUEST_POSTS,
  REQUEST_POST,
  RECEIVE_POSTS,
  RECEIVE_POST,
  SENDING_POST,
  CREATED_POST,
  UPDATED_POST
} from '../constants'

const initialState = {
  isFetching: false,
  isSending: false,
  isSaved: false,
  posts: [],
  page: 1,
  page_count: 0,
  limit: 1,
  post: {
    title: '',
    author: ''
  },
  id: null,
  message: null,
  newPost: false
}

function post(state = initialState, action) {
  switch (action.type) {
    case CREATE_POST:
      return Object.assign({}, initialState, {
        newPost: true
      })

    case REQUEST_POSTS:
    case REQUEST_POST:
      return Object.assign({}, state, {
        isFetching: true,
        isSending: false,
        isSaved: false,
        posts: [],
        post: {},
        page_count: 0,
        limit: 1,
        message: null
      })

    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        isSending: false,
        isSaved: false,
        posts: action.posts,
        page_count: action.page_count,
        limit: action.limit,
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

    case CREATED_POST:
      return Object.assign({}, state, {
        isFetching: false,
        isSending: false,
        isSaved: true,
        id: action.id,
        message: action.message
      })

    case UPDATED_POST:
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

import {
  SENDING_LOGIN,
  SUCCESS_LOGIN,
  ERROR_LOGIN
} from '../constants'

let initialState = {
  sending: false,
  error: false
}

const login = (state = initialState, action) => {
  switch (action.type) {
    case SENDING_LOGIN:
      return Object.assign({}, state, {
        sending: true,
        error: false
      })

    case SUCCESS_LOGIN:
      return Object.assign({}, state, {
        sending: false,
        error: false
      })

    case ERROR_LOGIN:
      return Object.assign({}, state, {
        sending: false,
        error: true
      })

    default:
      return state
  }
}

export default login

import {
  USER_LOGGED_IN,
  USER_LOGGED_OUT
} from '../constants'

const user = (state = {}, { type, user }) => {
  if (type === USER_LOGGED_IN) {
    return user
  }
  if (type === USER_LOGGED_OUT) {
    return {}
  }
  return state
}

export default user

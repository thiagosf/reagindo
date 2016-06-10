import { CLEAR_NOTIFICATION } from '../constants'

const initialState = {
  message: null
}

function notifications(state = initialState, action) {
  switch (action.type) {
    case CLEAR_NOTIFICATION:
      return Object.assign({}, state, {
        message: null
      })
  }
  
  if (action.message) {
    return Object.assign({}, state, {
      message: action.message
    })
  }

  return state
}

export default notifications

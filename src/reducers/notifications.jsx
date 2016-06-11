import {
  CLEAR_NOTIFICATION,
  NOTIFICATION_SUCCESS,
  NOTIFICATION_INFO,
  NOTIFICATION_ERROR,
  NOTIFICATION_WARNING,
  NOTIFICATION_PRIMARY
} from '../constants'

const initialState = {
  message: null,
  message_type: NOTIFICATION_INFO,
  message_duration: 3000
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
      message: action.message,
      message_type: (action.message_type || initialState.message_type),
      message_duration: (action.message_duration || initialState.message_duration)
    })
  }

  return state
}

export default notifications

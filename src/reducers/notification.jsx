import {
  HIDING_NOTIFICATION,
  HIDDEN_NOTIFICATION,
  NOTIFICATION_SUCCESS,
  NOTIFICATION_INFO,
  NOTIFICATION_ERROR,
  NOTIFICATION_WARNING,
  NOTIFICATION_PRIMARY
} from '../constants'

const initialState = {
  message: null,
  message_type: NOTIFICATION_INFO,
  message_duration: 3000,
  status: 'hidden'
}

function notification(state = initialState, action) {
  switch (action.type) {
    case HIDING_NOTIFICATION:
      return Object.assign({}, state, {
        status: 'hiding'
      })

    case HIDDEN_NOTIFICATION:
      return Object.assign({}, state, {
        status: 'hidden'
      })
  }
  
  if (action.message) {
    return Object.assign({}, state, {
      message: action.message,
      message_type: (action.message_type || initialState.message_type),
      message_duration: (action.message_duration || initialState.message_duration),
      status: 'show'
    })
  }

  return state
}

export default notification

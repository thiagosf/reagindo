import {
  HIDING_NOTIFICATION,
  HIDDEN_NOTIFICATION
} from '../constants'

let hiddenTimeOut;
let hideTimeOut;

export const hideNotification = () => {
  return dispatch => {
    dispatch({ type: HIDING_NOTIFICATION })
    clearTimeout(hiddenTimeOut)
    clearTimeout(hideTimeOut)
    hiddenTimeOut = window.setTimeout(() => {
      dispatch({ type: HIDDEN_NOTIFICATION })
    }, 500)
  }
}

export const hideTimeOutNotification = (notification) => {
  const timeoutTime = 3000
  return dispatch => {
    if (notification && notification.status == 'show') {
      clearTimeout(hideTimeOut)
      hideTimeOut = window.setTimeout(() => {
        dispatch(hideNotification())
      }, timeoutTime)
    }
  }
}

export const cancelTimeOutNotification = () => {
  return dispatch => {
    clearTimeout(hiddenTimeOut)
    clearTimeout(hideTimeOut)
  }
}

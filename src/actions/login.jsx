import {
  SENDING_LOGIN,
  USER_LOGGED_IN,
  ERROR_LOGIN,
  NOTIFICATION_INFO,
  NOTIFICATION_SUCCESS,
  NOTIFICATION_ERROR
} from '../constants'

import { push } from 'react-router-redux'

const sendingLogin = () => {
  return {
    type: SENDING_LOGIN,
    message: 'login.sending_login',
    message_type: NOTIFICATION_INFO
  }
}

const successLogin = (user) => {
  return {
    type: USER_LOGGED_IN,
    message: 'login.user_logged_in',
    message_type: NOTIFICATION_SUCCESS,
    user: user
  }
}

const errorLogin = () => {
  return {
    type: ERROR_LOGIN,
    message: 'login.error_login',
    message_type: NOTIFICATION_ERROR
  }
}

export function submitLogin({ username, password }) {
  return dispatch => {
    dispatch(sendingLogin())
    setTimeout(() => {
      const credentials = {
        username: 'admin',
        password: '123'
      }
      if (credentials.username == username && credentials.password == password) {
        dispatch(successLogin(credentials))
        dispatch(push('/dashboard'))
      } else {
        dispatch(errorLogin())
      }
    }, 1000)
  }
}

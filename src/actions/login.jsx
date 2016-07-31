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
        name: 'Admin',
        id: 1,
        token: '123',
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

let checked_session = false

export function checkSession() {
  return dispatch => {
    if (!checked_session) {
      checked_session = true
      // fetch api
      let random = Math.floor(Math.random() * (3 - 1)) + 1;
      let err = random % 2 == 0
      // if (!err) {
        setTimeout(() => {
          let user = { name: 'Admin', id: 1, token: '123' }
          dispatch(successLogin(user))
          dispatch(push('/dashboard'))
        }, 500);
      // }
    }
  }
}

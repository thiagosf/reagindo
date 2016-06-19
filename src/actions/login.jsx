import {
  SENDING_LOGIN,
  SUCCESS_LOGIN,
  ERROR_LOGIN,
  NOTIFICATION_INFO,
  NOTIFICATION_SUCCESS,
  NOTIFICATION_ERROR
} from '../constants'

import { push } from 'react-router-redux'

const sendingLogin = () => {
  return {
    type: SENDING_LOGIN,
    message: 'Enviando, aguarde um instante...',
    message_type: NOTIFICATION_INFO
  }
}

const successLogin = () => {
  return {
    type: SUCCESS_LOGIN,
    message: 'Entrando na Matrix...',
    message_type: NOTIFICATION_SUCCESS
  }
}

const errorLogin = () => {
  return {
    type: ERROR_LOGIN,
    message: 'Credenciais inválidas',
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
        dispatch(successLogin())
        dispatch(push('/dashboard'))
      } else {
        dispatch(errorLogin())
      }
    }, 1500)
  }
}

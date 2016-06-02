import { ADD_MESSAGE, REMOVE_MESSAGE } from '../constants'

export const addMessage = (text) => {
  return {
    type: ADD_MESSAGE,
    text
  }
}

export const removeMessage = (id) => {
  return {
    type: REMOVE_MESSAGE,
    id
  }
}

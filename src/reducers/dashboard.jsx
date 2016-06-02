import { ADD_MESSAGE, REMOVE_MESSAGE } from '../constants'

// mover funcao para um diretorio de funcoes diversas
function tokenize() {
  return Math.random();
}

let initialState = { messages: [{ id: tokenize(), text: 'Default message' }] }

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return Object.assign({}, state, {
        messages: [
          ...state.messages,
          {
            id: tokenize(),
            text: action.text
          }
        ]
      })

    case REMOVE_MESSAGE:
      return {
        messages: state.messages.filter(message => {
          return message.id != action.id
        })
      }

    default:
      return state
  }
}

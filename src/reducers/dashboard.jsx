import { ADD_MESSAGE, REMOVE_MESSAGE } from '../constants'
import { tokenize } from '../helpers'
import undoable, { distinctState } from 'redux-undo'

let initialState = { messages: [{ id: tokenize(), text: 'Default message' }] }

const dashboard = (state = initialState, action) => {
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

const undoableTodos = undoable(dashboard, {
  filter: distinctState()
})

export default undoableTodos

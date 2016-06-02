import { combineReducers } from 'redux'

let initialState = { messages: [{ id: 0, text: 'Default message' }] }

const dashboardApp = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      let id = state.messages.length
      return Object.assign({}, state, {
        messages: [
          ...state.messages,
          {
            id: id,
            text: action.text
          }
        ]
      })

    case 'REMOVE_MESSAGE':
      // state.messages.splice(action.index, 1)
      // return state.messages
      console.log(state, action);
      return {
        messages: state.messages.filter(message => {
          return message.id != action.id
        })
      }

    default:
      return state
  }
}

export const mainApp = combineReducers({
  dashboardApp
})

import { SET_TITLE } from '../constants'

let initialState = { title: 'Reagindo' }

const structure = (state = initialState, action) => {
  switch (action.type) {
    case SET_TITLE:
      return Object.assign({}, state, {
        title: action.title
      })

    default:
      return state
  }
}

export default structure

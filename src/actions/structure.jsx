import { SET_TITLE } from '../constants'

const changeDocumentTitle = (title) => {
  document.title = title
}

export const setTitle = (title) => {
  changeDocumentTitle(title)
  return {
    type: SET_TITLE,
    title
  }
}

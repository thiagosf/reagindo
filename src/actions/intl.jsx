import { CHANGE_LANGUAGE } from '../constants'

const loadLanguage = (locale) => {
  return {
    type: CHANGE_LANGUAGE,
    locale: locale
  }
}

export const changeLanguage = (locale) => {
  return dispatch => {
    dispatch(loadLanguage(locale))
  }
}

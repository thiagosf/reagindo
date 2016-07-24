import { CHANGE_LANGUAGE } from '../constants'

let load_by_query = false

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

export const checkLocaleInQuery = (query) => {
  return dispatch => {
    if (query.locale && !load_by_query) {
      load_by_query = true
      dispatch(loadLanguage(query.locale))
    }
  }
}

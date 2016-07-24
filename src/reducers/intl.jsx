import { CHANGE_LANGUAGE } from '../constants'
import enUsLocaleData from '../locales/en-US.json'
import ptBrLocaleData from '../locales/pt-BR.json'
import esEsLocaleData from '../locales/es-ES.json'

import { addLocaleData } from 'react-intl'
import en from 'react-intl/locale-data/en'
import pt from 'react-intl/locale-data/pt'
import es from 'react-intl/locale-data/es'
import { intlReducer } from 'react-intl-redux'

addLocaleData([...en, ...pt, ...es])

const messages = {
  'en-US': enUsLocaleData,
  'pt-BR': ptBrLocaleData,
  'es-ES': esEsLocaleData
}

let initialState = {
  defaultLocale: 'en-US',
  locale: 'en-US',
  messages: messages['en-US'],
  options: [{
    locale: 'en-US',
    name: 'English'
  }, {
    locale: 'pt-BR',
    name: 'Português'
  }, {
    locale: 'es-ES',
    name: 'Español'
  }]
}

const intl = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return Object.assign({}, state, {
        locale: action.locale,
        messages: messages[action.locale]
      })

    default:
      return state
  }
}

export default intl

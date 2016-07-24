import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Button } from '../components'
import { changeLanguage } from '../actions/intl'
import classNames from 'classnames'

const LanguageItem = ({ current_locale, name, locale, onClick }) => {
  let link = `?locale=${locale}`
  let className = classNames({
    'active-locale': current_locale == locale
  })
  return (
    <li>
      <a className={className} onClick={onClick} href={link}>{name}</a>
    </li>
  )
}

class LanguageBox extends Component {
  onChangeLanguage(locale, e) {
    e.preventDefault()
    this.props.onChangeLanguage(locale)
  }
  render() {
    return (
      <div className="text-center">
        <hr />
        <ul className="list-inline">
          {this.props.options.map(item => 
            <LanguageItem
              key={item.locale}
              {...item}
              current_locale={this.props.locale}
              onClick={this.onChangeLanguage.bind(this, item.locale)}
              />
          )}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.intl
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeLanguage: (locale) => {
      dispatch(changeLanguage(locale))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LanguageBox)

import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import classNames from 'classnames'
import { FormattedMessage } from 'react-intl'

import { toggleMobileNav, toggleDropdownLanguages, setCurrentNavItem } from '../actions/nav'
import { changeLanguage } from '../actions/intl'
import { LanguageItem } from '../components'

class Nav extends Component {
  openLanguages(e) {
    e.preventDefault()
    this.props.onToggleDropdownLanguages();
  }
  renderNav(item) {
    let current_key = null
    if (this.props.nav.current_nav_item) {
      current_key = this.props.nav.current_nav_item.key
    }
    let className = classNames({
      'active': item.key == current_key
    })
    let label = this.props.intl.messages[item.label]
    return (<li className={className} key={item.key}><Link to={item.link} onClick={this.setCurrentNavItem.bind(this, item)}>{label}</Link></li>)
  }
  setCurrentNavItem(nav_item) {
    this.props.onSetCurrentNavItem(nav_item)
  }
  onChangeLanguage(locale, e) {
    e.preventDefault()
    this.props.onChangeLanguage(locale)
  }
  render() {
    let navbarClassname = classNames({
      'navbar-collapse': true,
      'collapse': true,
      'in': this.props.nav.opened_nav
    })
    let languagesClassname = classNames({
      'dropdown': true,
      'open': this.props.nav.opened_languages
    })
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" onClick={this.props.onToggleMobileNav}>
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand" to="/">Reagindo</Link>
          </div>
          <div id="navbar" className={navbarClassname}>
            <ul className="nav navbar-nav" ref="main_nav">
              {this.props.links.map(item => this.renderNav(item))}
              <li className={languagesClassname} onClick={this.openLanguages.bind(this)}>
                <a aria-expanded="false" aria-haspopup="true" role="button" data-toggle="dropdown" className="dropdown-toggle" href="#">
                  <FormattedMessage id="nav.languages" />
                  <span className="caret"></span>
                </a>
                <ul className="dropdown-menu">
                  {this.props.intl.options.map(item => 
                    <LanguageItem
                      key={item.locale}
                      {...item}
                      current_locale={this.props.locale}
                      onClick={this.onChangeLanguage.bind(this, item.locale)}
                      />
                  )}
                </ul>
              </li>
            </ul>
            <ul className="nav navbar-nav pull-right">
              <li>
                <a href="#">Ola {this.props.user.name}</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

Nav.defaultProps = {
  links: [
    { label: 'nav.home', link: '/', key: 'home' },
    { label: 'nav.posts', link: '/posts', key: 'posts' },
    { label: 'nav.logout', link: '/login', key: 'logout' }
  ]
}

Nav.propTypes = {
  links: PropTypes.array
}

const mapStateToProps = (state) => {
  return {
    routing: state.routing,
    nav: state.nav,
    user: state.user,
    intl: state.intl
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onToggleMobileNav: () => {
      dispatch(toggleMobileNav())
    },
    onToggleDropdownLanguages: () => {
      dispatch(toggleDropdownLanguages())
    },
    onSetCurrentNavItem: (nav_item) => {
      dispatch(setCurrentNavItem(nav_item))
    },
    onChangeLanguage: (locale) => {
      dispatch(changeLanguage(locale))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)

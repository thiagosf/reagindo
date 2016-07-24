// @TODO Colocar migrar state para redux

import React, { Component } from 'react'
const { PropTypes } = React;
import { Link } from 'react-router'
import { connect } from 'react-redux'
import classNames from 'classnames'
import { FormattedMessage } from 'react-intl'

class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      opened_nav: false,
      opened_languages: false
    }
  }
  openNav() {
    this.setState({ opened_nav: !this.state.opened_nav })
  }
  openLanguages() {
    this.setState({ opened_languages: !this.state.opened_languages })
  }
  changeNavClass(path) {
    [...this.refs.main_nav.children].map(li => {
      let link = li.children[0]
      li.className = link.getAttribute('href') == path ? 'active' : ''
    })
  }
  renderNav(item) {
    return (<li key={item.link}><Link to={item.link}>{item.label}</Link></li>)
  }
  componentDidUpdate() {
    this.changeNavClass(this.props.routing.locationBeforeTransitions.pathname)
  }
  render() {
    let navbarClassname = classNames({
      'navbar-collapse': true,
      'collapse': true,
      'in': this.state.opened_nav
    })
    let languagesClassname = classNames({
      'dropdown': true,
      'open': this.state.opened_languages
    })
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" onClick={() => this.openNav()}>
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand" to="/">Reagindo</Link>
          </div>
          <div id="navbar" className={navbarClassname}>
            <ul className="nav navbar-nav" ref="main_nav">
              {this.props.nav.map(item => this.renderNav(item))}
              <li className={languagesClassname} onClick={() => this.openLanguages()}>
                <a aria-expanded="false" aria-haspopup="true" role="button" data-toggle="dropdown" className="dropdown-toggle" href="#">
                  <FormattedMessage id="nav.languages" />
                  <span className="caret"></span>
                </a>
                <ul className="dropdown-menu">
                  <li><a href="#">English</a></li>
                  <li><a href="#">Portugues</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

Nav.defaultProps = {
  nav: [
    { label: 'Home', link: '/' },
    { label: 'Posts', link: '/posts' },
    { label: 'Sair', link: '/login' }
  ]
}

Nav.propTypes = {
  nav: PropTypes.array
}

const mapStateToProps = (state) => {
  return {
    routing: state.routing
  }
}

export default connect(mapStateToProps, null)(Nav)

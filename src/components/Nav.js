import React, { Component } from 'react'
import { Link } from 'react-router'
import classNames from 'classnames'

export default class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      opened_nav: false
    }
  }
  openNav() {
    this.setState({ opened_nav: !this.state.opened_nav })
  }
  render() {
    let navbarClassname = classNames({
      'navbar-collapse': true,
      'collapse': true,
      'in': this.state.opened_nav
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
            <ul className="nav navbar-nav">
              <li className="active"><Link to="/">Home</Link></li>
              <li><Link to="/error-page">Error page</Link></li>
              <li><Link to="/login">Login</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

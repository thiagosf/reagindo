import React, { Component } from 'react'
const { PropTypes } = React;
import { Link } from 'react-router'
import { connect } from 'react-redux'
import classNames from 'classnames'

class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      opened_nav: false
    }
  }
  openNav() {
    this.setState({ opened_nav: !this.state.opened_nav })
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

import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Nav extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/error">Error page2</Link></li>
        </ul>
      </nav>
    )
  }
}

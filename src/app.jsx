import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import classNames from 'classnames'

import NoMatch from './no_match'
import UsersLogin from './pages/users/login'
import Dashboard from './pages/dashboard'

// const App = React.createClass({
class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h1>Reagindo</h1>
        <nav>
          <ul>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/error">Error page2</Link></li>
          </ul>
        </nav>
        {this.props.children}
      </div>
    )
  }
}

render((
  <Router history={browserHistory}>
    <Route path="/login" component={UsersLogin} />
    <Route path="/" component={App}>
      <Route path="/dashboard" component={Dashboard} />
      <Route path="*" component={NoMatch} />
    </Route>
  </Router>
), document.getElementById('content'))

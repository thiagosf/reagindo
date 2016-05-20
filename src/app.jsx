import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import classNames from 'classnames'

import Loader from './components/loader'
import Button from './components/bootstrap'
import NoMatch from './no_match'

const App = React.createClass({
  getInitialState() {
    return {
      messages: []
    }
  },
  clickButton(e) {
    let messages = this.state.messages
    messages.push('Mais um click ' + e.target.className + ' - ' + messages.length)
    this.setState({ messages: messages })
  },
  removeMe(index, e) {
    let messages = this.state.messages
    messages.splice(index, 1)
    this.setState({ messages: messages })
  },
  messages() {
    let i = -1
    return this.state.messages.map(item => {
      return (<p key={++i} onClick={this.removeMe.bind(this, i)}>{item}</p>)
    })
  },
  render() {
    return (
      <div className="container-fluid">
        <h1>Reagindo</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/error">Error page</Link>
            </li>
          </ul>
        </nav>
        <div>
          <Button type="warning" onClick={this.clickButton}>Ola mundo</Button>
          <div className="well">{this.messages()}</div>
          <Loader />
        </div>
        {this.props.children}
      </div>
    )
  }
})

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="*" component={NoMatch} />
    </Route>
  </Router>
), document.getElementById('content'))

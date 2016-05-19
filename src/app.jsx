// http://mikevalstar.com/post/fast-gulp-browserify-babelify-watchify-react-build/

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import classNames from 'classnames'


const Button = React.createClass({
  getDefaultProps() {
    type: 'primary'
    style: null
  },
  getClassName() {
    return "btn btn-" + this.props.type
  },
  render() {
    return (
      <button 
        className={this.getClassName()} 
        onClick={this.props.onClick} 
        style={this.props.style} 
        >{this.props.children}</button>
    )
  }
})

const App = React.createClass({
  getInitialState() {
    return {
      messages: []
    }
  },
  clickButton(e) {
    let messages = this.state.messages
    messages.push('Mais um click ' + e.target.className)
    this.setState({ messages: messages })
  },
  removeMe(index, e) {
    console.log(arguments)
  },
  messages() {
    let i = 0
    return this.state.messages.map(item => {
      return (<p key={i++} onClick={this.removeMe.bind(this, i)}>{item}</p>)
    })
  },
  render() {
    return (
      <div className="container-fluid">
        <h1>Teste 2</h1>
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
        </div>
        {this.props.children}
      </div>
      )
  }
})

const NoMatch = React.createClass({
  render() {
    return (
      <div className="row">
        <div className="col-sm-6">
          <h2>NoMatch 1</h2>
        </div>
      </div>
      )
  }
})

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="error" component={NoMatch} />
      <Route path="*" component={NoMatch} />
    </Route>
  </Router>
), document.getElementById('content'))

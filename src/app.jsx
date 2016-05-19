// http://mikevalstar.com/post/fast-gulp-browserify-babelify-watchify-react-build/

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'

const App = React.createClass({
  render() {
    return (
      <div className="container-fluid">
        <h1>Teste</h1>
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
        {this.props.children}
      </div>
      )
  }
});

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
});

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="error" component={NoMatch} />
      <Route path="*" component={NoMatch} />
    </Route>
  </Router>
), document.body);

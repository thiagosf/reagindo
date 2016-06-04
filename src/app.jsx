import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import { Login, Dashboard, NoMatch, Nav } from './components'
import { DashboardContainer } from './containers'
import * as reducers from './reducers'

// Add the reducer to your store on the `routing` key
const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  })
)

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="container">
          {this.props.children}
        </div>
      </div>
    )
  }
}

ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/login" component={Login} />
      <Route path="/" component={App}>
        <IndexRoute component={DashboardContainer} />
        <Route path="/dashboard" component={DashboardContainer} />
        <Route path="*" component={NoMatch} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('content'))

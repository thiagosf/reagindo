import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import { Login, NoMatch, Nav } from './components'
import { DashboardContainer, PostsContainer, PostsTableContainer, PostFormContainer, NotificationContainer } from './containers'
import * as reducers from './reducers'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

// Add the reducer to your store on the `routing` key
const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  }),
  applyMiddleware(thunkMiddleware, createLogger())
)

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="container">
          <NotificationContainer />
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
        <Route path="/posts" component={PostsContainer}>
          <IndexRoute component={PostsTableContainer} />
          <Route path="/posts/:id" component={PostFormContainer} />
        </Route>
        <Route path="*" component={NoMatch} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('content'))

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import { 
  AppContainer,
  DashboardContainer,
  PostsContainer,
  PostsTableContainer,
  PostFormContainer,
  LoginFormContainer,
  NoMatchContainer
} from './containers'
import * as reducers from './reducers'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  }),
  applyMiddleware(thunkMiddleware, createLogger())
)

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/login" component={LoginFormContainer} />
      <Route path="/" component={AppContainer}>
        <IndexRoute component={DashboardContainer} />
        <Route path="/dashboard" component={DashboardContainer} />
        <Route path="/posts" component={PostsContainer}>
          <IndexRoute component={PostsTableContainer} />
          <Route path="new" component={PostFormContainer} />
          <Route path=":id" component={PostFormContainer} />
        </Route>
        <Route path="*" component={NoMatchContainer} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('content'))

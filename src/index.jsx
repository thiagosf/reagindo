import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import store from './store'
import * as containers from './containers'
import { Provider } from 'react-intl-redux'
import { UserAuthWrapper } from 'redux-auth-wrapper'

const UserIsAuthenticated = UserAuthWrapper({
  authSelector: state => state.user,
  wrapperDisplayName: 'UserIsAuthenticated'
})

// <Route path="/" component={UserIsAuthenticated(containers.AppContainer)}>

ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/login" component={containers.LoginFormContainer} />
      <Route path="/" component={containers.AppContainer}>
        <IndexRoute component={containers.DashboardContainer} />
        <Route path="/dashboard" component={containers.DashboardContainer} />
        <Route path="/posts" component={containers.PostsContainer}>
          <IndexRoute component={containers.PostsTableContainer} />
          <Route path="new" component={containers.PostFormContainer} />
          <Route path=":id" component={containers.PostFormContainer} />
        </Route>
        <Route path="*" component={containers.NoMatchContainer} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('content'))

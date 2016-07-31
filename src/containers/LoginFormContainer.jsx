import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FormattedMessage } from 'react-intl'

import { Loader, LoginForm, LanguageBox } from '../components'
import { submitLogin, forceLogin } from '../actions/login'
import { NotificationContainer } from './'
import { meta, translate } from '../helpers'
import { checkLocaleInQuery } from '../actions/intl'

class LoginFormContainer extends Component {
  componentDidMount() {
    let messages = translate.getMessages(this.props)
    meta.setTitle(messages['login.login'])
    this.props.onCheckLocaleInQuery(this.props.location.query)
    setTimeout(() => {
      this.props.onForceLogin({ name: 'Admin', id: 1, token: '123' })
    }, 500);
  }
  render() {
    return(
      <div className="container-fluid">
        <NotificationContainer />
        <div className="row">
          <div className="col-sm-4 col-sm-offset-4">
            <h2>
              <FormattedMessage id="login.login" />
            </h2>
            <LoginForm {...this.props} />
            <LanguageBox />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.login,
    intl: state.intl
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (data) => {
      return dispatch(submitLogin(data))
    },
    onCheckLocaleInQuery: (query) => {
      dispatch(checkLocaleInQuery(query))
    },
    onForceLogin: (user) => {
      dispatch(forceLogin(user))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer)

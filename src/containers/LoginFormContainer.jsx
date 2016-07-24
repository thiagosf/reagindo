import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Loader, LoginForm, LanguageBox } from '../components'
import { submitLogin } from '../actions/login'
import { NotificationContainer } from './'
import { meta } from '../helpers'
import { FormattedMessage } from 'react-intl'

class LoginFormContainer extends Component {
  constructor(props) {
    super(props)
    meta.setTitle(this.props.intl.messages['login.login'])
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer)

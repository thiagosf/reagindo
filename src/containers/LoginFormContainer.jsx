import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Loader, LoginForm } from '../components'
import { submitLogin } from '../actions/login'
import { NotificationContainer } from './'
import { meta } from '../helpers'

class LoginFormContainer extends Component {
  constructor(props) {
    super(props)
    meta.setTitle('Login')
  }
  render() {
    return(
      <div className="container-fluid">
        <NotificationContainer />
        <div className="row">
          <div className="col-sm-4 col-sm-offset-4">
            <h2>Login</h2>
            <LoginForm {...this.props} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.login
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

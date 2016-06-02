import React, { Component } from 'react'
import { div, h2 } from 'react-dom'
import classNames from 'classnames'

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = { sending: false }
  }
  handleSubmit(e) {
    e.preventDefault();

    let _this = this
    let username = this.refs.username.value;
    let password = this.refs.password.value;

    this.setState({ sending: true })
    
    setTimeout(() => {
      _this.context.router.push('/dashboard')
    }, 1500)
  }
  btnClass() {
    return classNames({
      'btn': true,
      'btn-primary': true,
      'disabled': this.state.sending
    })
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-4 col-sm-offset-4">
            <h2>Login</h2>
            <form action="#" onSubmit={this.handleSubmit.bind(this)} method="post">
              <div className="form-group">
                <label htmlFor="username">Nome de usuário</label>
                <input type="text" className="form-control" id="username" ref="username" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Senha</label>
                <input type="password" className="form-control" id="password" ref="password" />
              </div>
              <button className={this.btnClass()}>Entrar</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

Login.contextTypes = {
  router: React.PropTypes.object.isRequired
}

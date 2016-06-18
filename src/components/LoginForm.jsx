import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

class LoginForm extends Component {
  handleSubmit(e) {
    e.preventDefault();
    const data = {
      username: this.refs.username.value,
      password: this.refs.password.value
    }
    this.props.onSubmit(data)
  }
  render() {
    const btn_class = classNames({
      'btn': true,
      'btn-primary': true,
      'btn-lg': true,
      'btn-block': true,
      'disabled': this.props.sending
    })
    const form_class = classNames({
      'shake-me': this.props.error
    })
    return (
      <form action="#" onSubmit={this.handleSubmit.bind(this)} method="post" className={form_class}>
        <div className="form-group">
          <label htmlFor="username">Nome de usuário</label>
          <input type="text" className="form-control" id="username" ref="username" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Senha</label>
          <input type="password" className="form-control" id="password" ref="password" required />
        </div>
        <button className={btn_class} disabled={this.props.sending}>Entrar</button>
      </form>
    )
  }
}

LoginForm.propTypes = {
  sending: PropTypes.bool,
  error: PropTypes.bool,
  onSubmit: PropTypes.func
}

export default LoginForm

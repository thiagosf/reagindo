import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Button } from '../components'
import { addMessage } from '../actions/dashboard'

class MessageEntry extends Component {
  sendMessage(e) {
    this.props.onAddMessage(this.refs.text.value)
    this.refs.text.value = ''
    this.refs.text.focus()
  }
  handleSubmit(e) {
    this.sendMessage(e)
  }
  render() {
    return (
      <form className="form-inline" action="#" onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-group">
          <input type="text" className="form-control" ref="text" />
        </div>
        <span> </span>
        <Button buttonType="submit" type="success">Adicionar</Button>
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddMessage: (text) => {
      dispatch(addMessage(text))
    }
  }
}

export default connect(null, mapDispatchToProps)(MessageEntry)

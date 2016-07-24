import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FormattedMessage } from 'react-intl'

import { Button } from '../components'
import { addMessage } from '../actions/dashboard'

class MessageEntry extends Component {
  sendMessage(e) {
    e.preventDefault()
    if (this.refs.text.value != '') {
      this.props.onAddMessage(this.refs.text.value)
      this.refs.text.value = ''
    }
    this.refs.text.focus()
  }
  handleSubmit(e) {
    this.sendMessage(e)
  }
  render() {
    return (
      <div>
        <form className="form-inline2" action="#" onSubmit={this.handleSubmit.bind(this)}>
          <div className="row">
            <div className="col-sm-7">
              <div className="form-group">
                <input type="text" className="form-control" ref="text" />
              </div>
            </div>
            <div className="col-sm-5">
              <Button type="submit" primary block>
                <FormattedMessage id="actions.add" />
              </Button>
            </div>
          </div>
        </form>
      </div>
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

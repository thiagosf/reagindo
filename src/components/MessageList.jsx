import React, { Component } from 'react'
import classNames from 'classnames'
import { connect } from 'react-redux'

import { removeMessage } from '../actions/dashboard'

function formatMessages(message, onMessageClick) {
  return (
    <li key={message.id} onClick={() => onMessageClick(message.id)}>{message.id} {message.text}</li>
  )
}

function MessageList({ messages, onMessageClick }) {
  return (
    <div>
      <ul>{messages.map(message => formatMessages(message, onMessageClick))}</ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    messages: state.dashboard.messages
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onMessageClick: (id) => {
      dispatch(removeMessage(id))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageList)

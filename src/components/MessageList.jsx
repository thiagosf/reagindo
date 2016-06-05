import React, { Component } from 'react'
import { connect } from 'react-redux'

import { removeMessage } from '../actions/dashboard'
import { Button } from '../components'

function formatMessages(message, onMessageClick) {
  return (
    <div className="message-item" key={message.id}>
      <Button danger xsmall className="text-danger" onClick={() => onMessageClick(message.id)}>
        <span className="glyphicon glyphicon-remove"></span>
      </Button>
      <span> </span>
      <span>{message.text}</span>
    </div>
  )
}

function MessageList({ messages, onMessageClick }) {
  return (
    <div className="message-list">
      {messages.map(message => formatMessages(message, onMessageClick))}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    messages: state.dashboard.present.messages
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

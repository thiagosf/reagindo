import React, { Component } from 'react'
import { div, h2 } from 'react-dom'
import classNames from 'classnames'
import { connect } from 'react-redux'

import Button from '../components/bootstrap'
import Loader from '../components/loader'
import { addMessage, removeMessage } from '../actions/dashboard'

function formatMessages(message, onMessageClick) {
  return (
    <li key={message.id} onClick={() => onMessageClick(message.id)}>{message.id} {message.text}</li>
  )
}

function Dashboard({ messages, onAddMessage, onMessageClick }) {
  return (
    <div>
      <Button type="warning" onClick={() => onAddMessage('Ola mundo')}>Ola mundo</Button>
      <div className="well">
        <ul>{messages.map(message => formatMessages(message, onMessageClick))}</ul>
      </div>
      <Loader />
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
    onAddMessage: (text) => {
      dispatch(addMessage(text))
    },
    onMessageClick: (id) => {
      dispatch(removeMessage(id))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)

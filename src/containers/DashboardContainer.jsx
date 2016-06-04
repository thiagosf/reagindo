import React, { Component } from 'react'
import { addMessage } from '../actions/dashboard'
import { MessageList, MessageEntry, Loader } from '../components'

export default class DashboardContainer extends Component {
  render() {
    return(
      <div>
        <header>
          <h1>Dashboard</h1>
          <div className="well">
            <h2>Mensagens</h2>
            <MessageEntry />
            <hr />
            <MessageList />
          </div>
          <Loader />
        </header>
      </div>
    )
  }
}

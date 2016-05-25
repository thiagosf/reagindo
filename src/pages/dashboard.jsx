import React, { Component } from 'react'
import { div, h2 } from 'react-dom'
import classNames from 'classnames'
import Button from '../components/bootstrap'
import Loader from '../components/loader'

export default class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = { messages: [] }
  }
  clickButton(e) {
    let messages = this.state.messages
    messages.push('Mais um click ' + e.target.className + ' - ' + messages.length)
    this.setState({ messages: messages })
  }
  removeMe(index, e) {
    let messages = this.state.messages
    messages.splice(index, 1)
    this.setState({ messages: messages })
  }
  messages() {
    let i = -1
    return this.state.messages.map(item => {
      return (<p key={++i} onClick={this.removeMe.bind(this, i)}>{item}</p>)
    })
  }
  render() {
    return (
      <div>
        <Button type="warning" onClick={this.clickButton.bind(this)}>Ola mundo</Button>
        <div className="well">{this.messages()}</div>
        <Loader />
      </div>
    )
  }
}

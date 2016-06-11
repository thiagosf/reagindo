import React, { PropTypes, Component } from 'react'
import classnames from 'classnames'

export default class Notification extends Component  {
  render() {
    let { message, message_duration, message_type, status, onClick, onMouseEnter } = this.props
    let class_name = classnames({
      'notification': true,
      'notification-show': (status == 'show' || status == 'hiding'),
      'notification-hiding': status == 'hiding',
      'notification-hidden': status == 'hidden'
    })
    return (
      <div className={class_name}>
        <div className={`alert alert-${message_type}`} onClick={onClick} onMouseEnter={onMouseEnter}>
          {message}
          <br />
          <small><i>Fechando em alguns segungos</i></small>
        </div>
      </div>
    )
  }
}

Notification.propTypes = {
  message: PropTypes.string,
  message_type: PropTypes.string,
  message_duration: PropTypes.number,
  onClick: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func,
  status: PropTypes.string
}

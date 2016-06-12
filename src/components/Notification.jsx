import React, { PropTypes, Component } from 'react'
import classnames from 'classnames'

export default class Notification extends Component  {
  render() {
    let class_name = classnames({
      'notification': true,
      'notification-show': (this.props.status == 'show' || this.props.status == 'hiding'),
      'notification-hiding': this.props.status == 'hiding',
      'notification-hidden': this.props.status == 'hidden'
    })
    let class_name_time_left = classnames({ 'hide': this.props.time_left_cancelled })
    let class_name_time_left_cancelled = classnames({ 'hide': !this.props.time_left_cancelled })
    return (
      <div className={class_name}>
        <div className={`alert alert-${this.props.message_type}`} onClick={this.props.onClick} onMouseEnter={this.props.onMouseEnter}>
          {this.props.message}
          <br />
          <small>
            <span className={class_name_time_left}>
              <i>Fechando em {this.props.time_left} segundos</i>
            </span>
            <span className={class_name_time_left_cancelled}>
              <i>Clique para fechar</i>
            </span>
          </small>
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
  status: PropTypes.string,
  time_left: PropTypes.number,
  time_left_cancelled: PropTypes.bool
}

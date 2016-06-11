import React, { Component } from 'react'
import { connect } from 'react-redux'
import { clearNotification } from '../actions/notifications'
import { Notification } from '../components'

class NotificationContainer extends Component {
  render() {
    return (
      <Notification 
        message={this.props.message}
        message_type={this.props.message_type} 
        message_duration={this.props.message_duration} 
        onClick={this.props.clearNotification} 
        />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    message: state.notifications.message,
    message_type: state.notifications.message_type,
    message_duration: state.notifications.message_duration
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    clearNotification: () => {
      dispatch(clearNotification())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotificationContainer)

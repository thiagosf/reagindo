import React, { Component } from 'react'
import { connect } from 'react-redux'
import { clearNotification } from '../actions/notifications'

class NotificationContainer extends Component {
  render() {
    return (
      <div className="notification">
        <div className="alert alert-info">
          {this.props.message}
          <button onClick={this.props.clearNotification}>Fechar</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    message: state.notifications.message
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

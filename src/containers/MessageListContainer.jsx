import { connect } from 'react-redux'
import { MessageList } from '../components'
import { removeMessage } from '../actions/dashboard'

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

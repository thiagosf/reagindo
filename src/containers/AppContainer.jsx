import React, { Component } from 'react'
import { connect } from 'react-redux'
import { checkLocaleInQuery } from '../actions/intl'

class AppContainer extends Component {
  render() {
    this.props.onCheckLocaleInQuery(this.props.location.query)
    console.log("aqui");
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCheckLocaleInQuery: (query) => {
      dispatch(checkLocaleInQuery(query))
    }
  }
}

export default connect(null, mapDispatchToProps)(AppContainer)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { checkLocaleInQuery } from '../actions/intl'
import { checkPaginationParams } from '../actions/pagination'

class AppContainer extends Component {
  componentDidMount() {
    this.props.onCheckLocaleInQuery(this.props.location.query)
    this.props.onCheckPaginationParams(this.props.location.query)
  }
  render() {
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
    },
    onCheckPaginationParams: (query) => {
      dispatch(checkPaginationParams(query))
    }
  }
}

export default connect(null, mapDispatchToProps)(AppContainer)

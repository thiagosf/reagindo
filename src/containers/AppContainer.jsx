import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Nav } from '../components'
import { NotificationContainer } from '../containers'

class AppContainer extends Component {
  render() {
    return (
      <div>
        <Nav />
        <header className="header main-header">
          <div className="container">
            <h1>{this.props.title}</h1>
          </div>
        </header>
        <div className="container">
          <NotificationContainer />
          {this.props.children}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.structure
  }
}

export default connect(mapStateToProps, null)(AppContainer)

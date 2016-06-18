import React, { Component, PropTypes } from 'react'
import { Nav } from '../components'
import { NotificationContainer } from '../containers'

class BaseContainer extends Component {
  render() {
    return(
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

BaseContainer.propTypes = {
  title: PropTypes.string
}

export default BaseContainer

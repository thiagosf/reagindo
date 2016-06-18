import React, { Component, PropTypes } from 'react'
import { Nav } from '../components'
import { NotificationContainer } from '../containers'
import { meta } from '../helpers'

class BaseContainer extends Component {
  constructor(props) {
    super(props)
    meta.setTitle(this.props.title)
  }
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

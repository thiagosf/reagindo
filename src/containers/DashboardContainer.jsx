import React, { Component } from 'react'
import { DashboardMessagesContainer } from './'
import { Loader } from '../components'
import { BaseContainer } from './'

class DashboardContainer extends Component {
  render() {
    return(
      <BaseContainer title="Dashboard">
        <div className="row">
          <div className="col-sm-4">
            <DashboardMessagesContainer />
          </div>
          <div className="col-sm-4">
            <Loader />
          </div>
        </div>
      </BaseContainer>
    )
  }
}

export default DashboardContainer

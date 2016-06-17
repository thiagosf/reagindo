import React from 'react'
import { DashboardMessagesContainer } from './'
import { Loader } from '../components'

export default function() {
  return(
    <div>
      <div className="row">
        <div className="col-sm-4">
          <DashboardMessagesContainer />
        </div>
        <div className="col-sm-4">
          <Loader />
        </div>
      </div>
    </div>
  )
}

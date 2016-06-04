import React from 'react'
import { DashboardMessagesContainer } from './'
import { Loader } from '../components'

export default function() {
  return(
    <div>
      <header>
        <h1>Dashboard</h1>
        <DashboardMessagesContainer />
        <Loader />
      </header>
    </div>
  )
}

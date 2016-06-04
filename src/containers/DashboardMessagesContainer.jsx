import React from 'react'
import { DashboardItemContainer } from './'
import { MessageList, MessageEntry } from '../components'

export default function() {
  return (
    <DashboardItemContainer>
      <h2>Mensagens</h2>
      <MessageEntry />
      <hr />
      <MessageList />
    </DashboardItemContainer>
  )
}

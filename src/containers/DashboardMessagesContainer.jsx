import React from 'react'
import { DashboardItemContainer, MessageListContainer } from './'
import { MessageEntry } from '../components'
import UndoRedoMessages from './UndoRedoMessages'

export default function() {
  return (
    <DashboardItemContainer item="message-entry" title="dashboard.messages.title">
      <UndoRedoMessages />
      <MessageEntry />
      <MessageListContainer />
    </DashboardItemContainer>
  )
}

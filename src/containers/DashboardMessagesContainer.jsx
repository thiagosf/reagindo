import React from 'react'
import { DashboardItemContainer } from './'
import { MessageList, MessageEntry } from '../components'
import UndoRedoMessages from './UndoRedoMessages'

export default function() {
  return (
    <DashboardItemContainer item="message-entry" title="Mensagens">
      <UndoRedoMessages />
      <MessageEntry />
      <MessageList />
    </DashboardItemContainer>
  )
}

import React, { PropTypes } from 'react'
import { Message } from '../components'

const MessageList = ({ messages, onMessageClick }) => {
  return (
    <div className="message-list">
      {messages.map(message => 
        <Message
          key={message.id}
          {...message}
          onClick={() => onMessageClick(message.id)}
          />
      )}
    </div>
  )
}

MessageList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onMessageClick: PropTypes.func.isRequired
}

export default MessageList

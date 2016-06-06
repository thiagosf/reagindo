import React, { PropTypes } from 'react'
import { Button } from '../components'

const Message = ({ text, onClick }) => {
  return (
    <div  className="message-item">
      <Button danger xsmall className="text-danger" onClick={onClick}>
        <span className="glyphicon glyphicon-remove"></span>
      </Button>
      <span> </span>
      <span>{text}</span>
    </div>
  )
}

Message.propTypes = {
  id: PropTypes.number,
  text: PropTypes.string
}

export default Message

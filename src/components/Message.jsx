import React, { PropTypes } from 'react'
import classNames from 'classnames'
import { Button } from '../components'

const Message = ({ text, deleted, onClick }) => {
  const className = classNames({
    'message-item': true,
    'dismiss': deleted
  })
  return (
    <div className={className}>
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

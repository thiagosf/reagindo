import React, { PropTypes } from 'react'

export default Notification = ({ message, message_type, message_duration, onClick }) => {
  if (!message) return false
  // let timeout = setTimeout(() => onClick(), message_duration)
  let i = message_duration / 1000
  let timeout = setInterval(() => {
    --i
    if (i == 0) clearInterval(timeout)
  }, message_duration)
  const cancelTimeout = () => {
    clearInterval(timeout)
  }
  return (
    <div className="notification" onMouseEnter={cancelTimeout}>
      <div className={`alert alert-${message_type}`} onClick={onClick}>
        {message}
        <br />
        <small>Fechando em {i}s</small>
      </div>
    </div>
  )
}

Notification.propTypes = {
  message: PropTypes.string,
  message_type: PropTypes.string,
  message_duration: PropTypes.number,
  onClick: PropTypes.func.isRequired
}

import React from 'react'
import { FormattedMessage } from 'react-intl'

export default function({ title = 'Dashboard item', item, children }) {
  let className = "well dashboard-item"
  if (item) className += ` dashboard-${item}`
  return (
    <div className={className}>
      <h2>
        <FormattedMessage id={title} />
      </h2>
      {children}
    </div>
  )
}

import React from 'react'

export default function({ title = 'Dashboard item', item, children }) {
  let className = "well dashboard-item"
  if (item) className += ` dashboard-${item}`
  return (
    <div className={className}>
      <h2>{title}</h2>
      {children}
    </div>
  )
}

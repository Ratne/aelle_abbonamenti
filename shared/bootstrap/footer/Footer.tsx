import React, { ReactChild } from 'react'

export const FooterComponent = ({ leftTemplate }: { leftTemplate: ReactChild }) => {
  return (
    <div className="sh footer">
      <div className="container-fluid">{leftTemplate}</div>
    </div>
  )
}

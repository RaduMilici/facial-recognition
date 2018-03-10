import React from 'react'
import './Containers.css'

const LeftContainer = ({ children }) => {
  return (
    <div className="left-container">
      <div className="left-container__child">{children}</div>
    </div>
  )
}

export default LeftContainer

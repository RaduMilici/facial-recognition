import React, { Component } from 'react'
import './LeftContainer.css'

const LeftContainer = ({ children }) => {
  return (
    <div className='left-container'>
      <div className='left-container__child'>
        {children}
      </div>
    </div>
  )
}

export default LeftContainer

import React, { Component } from 'react'
import './main.css'
import { goTo } from '../../3D/cameraControl'

class Main extends Component {
  tweenToMonitor = () => {
    goTo('videoPlane')
    this.props.nextSlide()
  }

  render() {
    return (
      <div className="welcome">
        <div className="welcome-child">
          <div className="description">
            <h1>facial recognition with KAIROS</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default Main

import React, { Component } from 'react'
import './main.css'
import { goTo } from '../../3D/cameraControl'
import kairosLogoUrl from '../../img/kairos-logo.png'

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
            <h1>Face recognition made easy</h1>
            <img src={kairosLogoUrl} alt="" />
          </div>
        </div>
      </div>
    )
  }
}

export default Main

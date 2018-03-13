import React, { Component } from 'react'
import { sceneLights } from '../3D/start3D'
import { Tween, Easing } from '@tweenjs/tween.js/src/Tween'
import { application } from 'ecs-three';
import positions from './../3D/positions'

class Thanks extends Component {
  constructor() {
    super()
    this.easing = Easing.Quadratic.InOut
    this.time = 3000
    this.offIntensity = 0.01
    this.onIntensity = 1
  }

  componentDidMount() {
    this.controlLights(this.offIntensity, true)
  }

  componentWillUnmount() {
    application._special.room.videoPlane.position.z = positions.videoPlane.pos.z;
    this.controlLights(this.onIntensity)
  }

  controlLights(intensity, turnOffMonitor) {
    new Tween(sceneLights.directionalLight)
    .to({ intensity }, this.time)
    .easing(this.easing)
    .onComplete(() => {
      if (turnOffMonitor) {
        application._special.room.videoPlane.position.z = 10000;
      }
    })
    .start()


    new Tween(sceneLights.ambientLight.intensity)
    .to({ intensity }, this.time)
    .easing(this.easing)
    .start()
  }

  render() {
    return (
        <div className="center-container">
          <div className="description" style={{ width: '400px', height: '150' }}>
            <h1 className="description__title">Thank you!</h1>
          </div>
        </div>
    )
  }
}

export default Thanks

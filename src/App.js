import React, { Component } from 'react'
import start3D from './3D/start3D'
import { application } from 'ecs-three'
import navTo from './navMap'
import './App.css'
import './Description.css'
import Room from './3D/Room'
import Webcam from './Webcam'
import slides from './components/slides'
import { setVideo as setVideoKairos } from './api/kairos'

class App extends Component {
  constructor() {
    super()
    this.state = {
      result: null,
      slides,
      video: null,
      index: 0,
      startAt: slides.length - 1,
      debug: false,
    }
    this.settings = {
      fov: 70,
      width: window.innerWidth,
      height: window.innerHeight,
      near: 0.1,
      far: 10,
      containerId: 'webgl',
    }
  }

  componentDidMount() {
    start3D({ settings: this.settings })
    const video = this.refs.webcam.getVideo()
    this.setState({ slides, video }, () => {
      this.setSlide(this.state.startAt)
      setVideoKairos(video)
      const room = new Room(video)
      application.add(room)
    })
  }

  getSize() {
    return {
      width: 800,
      height: 600,
    }
  }

  currentSlide = () => {
    const Slide = this.state.slides[this.state.index]
    return Slide ? <Slide video={this.state.video} /> : null
  }

  turnSlide = num => {
    const index = this.state.index + num
    this.setSlide(index)
  }

  setSlide = index => {
    if (this.isValidIndex(index)) {
      navTo(index, this.state.debug)
      this.setState({ index })
    }
  }

  isValidIndex = index => index >= 0 && index < this.state.slides.length

  render() {
    return (
      <div className="app">
        <div id="webgl" />

        <div className="twin-containers">{this.currentSlide()}</div>

        <div className="nav-buttons">
          {this.isValidIndex(this.state.index - 1) ? (
            <button onClick={() => this.turnSlide(-1)}>←</button>
          ) : null}

          {this.isValidIndex(this.state.index + 1) ? (
            <button onClick={() => this.turnSlide(1)}>→</button>
          ) : null}
        </div>
        <Webcam size={this.getSize()} ref="webcam" />
      </div>
    )
  }
}

export default App

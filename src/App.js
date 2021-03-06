import React, { Component } from 'react'
import start3D from './3D/start3D'
import { application } from 'ecs-three'
import navTo from './util/navMap'
import './App.css'
import './Description.css'
import Room from './3D/Room'
import Webcam from './util/Webcam'
import slides from './components/slides'
import { setVideo as setVideoUtil } from './util/canvas'
import settings3D from './3D/initSettings'

class App extends Component {
  constructor() {
    super()
    this.state = {
      result: null,
      slides,
      video: null,
      index: 0,
      startAt: 0,
      debug: false,
    }
  }

  componentDidMount() {
    start3D({ settings: settings3D })
    const video = this.refs.webcam.getVideo()

    const startAt = this.state.debug ? this.state.slides.length - 1 : this.state.startAt

    this.setState({ slides, video, startAt }, () => {
      this.setSlide(this.state.startAt)
      setVideoUtil(video)
      const room = new Room(video)
      room.videoPlane.position.z = 10000
      application.add(room)
      application._special = { room }
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

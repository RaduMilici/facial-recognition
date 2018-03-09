import React, { Component } from 'react'
import start3D from './3D/start3D'
import { application } from 'ecs-three'
import { detect } from './api/kairos'
import { goTo } from './3D/cameraControl'
import './App.css'
import Room from './3D/Room'
import Webcam from './Webcam'
import Main from './components/1_welcome/main'
import BackStory from './components/2_Backstory/backstory'

class App extends Component {
  constructor() {
    super()
    this.state = {
      result: null,
      slides: [],
      index: 0,
    }
    this.settings = {
      fov: 70,
      width: window.innerWidth,
      height: window.innerHeight,
      near: 0.1,
      far: 100,
      containerId: 'webgl',
    }
  }

  componentDidMount() {
    start3D({ settings: this.settings })
    const slides = [Main, BackStory]
    this.setState({ slides })
    const video = this.refs.webcam.getVideo()
    const room = new Room(video)
    application.add(room)

    //goTo('videoPlane')
    //this.setSlide(1)
  }

  getSize() {
    return {
      width: 800,
      height: 600,
    }
  }

  takeScreenshot = () => {
    const dataUrl = application.renderer.screenshot()
    const callback = result => this.setState({ result })
    detect(dataUrl, callback)
  }

  currentSlide = () => {
    const Slide = this.state.slides[this.state.index]
    return Slide ? <Slide nextSlide={this.nextSlide}/> : null
  }

  nextSlide = () => {
    this.setState(prevState => {
      return { index: prevState.index + 1 }
    })
  }

  setSlide = index => {
    this.setState({ index })
  }

  render() {
    return (
      <div className="app">
        <div id="webgl" />
        {this.currentSlide()}
        <Webcam size={this.getSize()} ref="webcam" />
      </div>
    )
  }
}

export default App

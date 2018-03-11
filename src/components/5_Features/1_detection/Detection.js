import React, { Component } from 'react'
import Feature from '../Feature'
import { detect } from '../../../api/kairos'
import { frameFaces } from '../../../util/canvas'
import { takeScreenshot } from '../../../util/canvas'

class Detection extends Component {
  constructor() {
    super()
    this.state = {
      dataUrl: null,
      result: null,
    }
  }

  detectFace = () => {
    const dataUrl = takeScreenshot()
    const callback = async ({ result }) => {
      const framed = await frameFaces({ result, dataUrl })
      this.setState({ dataUrl: framed, result: JSON.stringify(result, null, 2) })
    }
    detect({ dataUrl, callback })
  }

  reset = () => this.setState({ dataUrl: null, result: null })

  render() {
    return (
      <Feature
        title="Face detection"
        onClick={this.detectFace}
        reset={this.reset}
        dataUrl={this.state.dataUrl}
        result={this.state.result}
      />
    )
  }
}

export default Detection

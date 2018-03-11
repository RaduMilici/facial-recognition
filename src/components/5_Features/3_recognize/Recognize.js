import React, { Component } from 'react'
import Feature from '../Feature'
import { recognize } from '../../../api/kairos'
import { takeScreenshot } from '../../../util/canvas'

class Recognize extends Component {
  constructor() {
    super()
    this.state = {
      result: null,
      dataUrl: null,
      name: null,
    }
  }

  recognizeFace = () => {
    const dataUrl = takeScreenshot()
    const gallery_name = 'ui_cop_demo'
    const callback = async ({ result }) => {
      this.setState({ result: JSON.stringify(result, null, 2) })
    }
    recognize({ dataUrl, gallery_name, callback })
  }

  render() {
    return <Feature result={this.state.result} onClick={this.recognizeFace} title="Recognize" />
  }
}

export default Recognize

import React, { Component } from 'react'
import Feature from '../Feature'
import { verify } from '../../../api/kairos'
import { takeScreenshot } from '../../../util/canvas'

class Verify extends Component {
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
    const subject_id = this.state.name
    const gallery_name = 'ui_cop_demo'
    const callback = async ({ result }) => {
      this.setState({ result: JSON.stringify(result, null, 2) })
    }
    verify({ dataUrl, subject_id, gallery_name, callback })
  }

  render() {
    return (
      <Feature result={this.state.result} onClick={this.recognizeFace} title="Verify">
        <input
          placeholder="name"
          onChange={({ target }) => this.setState({ name: target.value })}
          type="text"
        />
      </Feature>
    )
  }
}

export default Verify

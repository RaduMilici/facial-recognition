import React, { Component } from 'react'
import Feature from '../Feature'
import { enroll } from '../../../api/kairos'
import { takeScreenshot } from '../../../util/canvas'

class Enroll extends Component {
  constructor() {
    super()
    this.state = {
      result: null,
      dataUrl: null,
      name: null,
    }
  }

  enrollFace = () => {
    const dataUrl = takeScreenshot()
    const subject_id = this.state.name
    const gallery_name = 'ui_cop_demo'
    const callback = async ({ result }) => {
      this.setState({ result: JSON.stringify(result, null, 2) })
    }
    enroll({ dataUrl, subject_id, gallery_name, callback })
  }

  render() {
    return (
      <Feature result={this.state.result} onClick={this.enrollFace} title="Enroll">
        <input
          onChange={({ target }) => this.setState({ name: target.value })}
          id="enroll-input"
          type="text"
        />
      </Feature>
    )
  }
}

export default Enroll

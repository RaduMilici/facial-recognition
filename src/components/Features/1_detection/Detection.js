import React, { Component } from 'react'
import LeftContainer from '../../Containers/LeftContainer'
import { takeScreenshot } from '../../../api/kairos'

class Detection extends Component {
  constructor() {
    super()
    this.state = {
      result: null,
      dataUrl: null,
    }
  }

  detectFace = () => {
    takeScreenshot(({ result, dataUrl }) => {
      console.log(dataUrl)
      this.setState({ dataUrl, result: JSON.stringify(result, null, 2) })
    })
  }

  render() {
    return (
      <div className="twin-containers">
        <LeftContainer>
          <div className="description">
            <h1 className="description__title">Face detection</h1>
            <div className="result">
              <pre>{this.state.result}</pre>
            </div>
            <div className="description__button-container">
              <button onClick={this.detectFace}>Detect</button>
            </div>
          </div>
        </LeftContainer>

        <LeftContainer>
          <img src={this.state.dataUrl} alt="dataUrl" />
        </LeftContainer>
      </div>
    )
  }
}

export default Detection

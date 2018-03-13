import React, { Component } from 'react'
import LeftContainer from '../Containers/LeftContainer'
import './Feature.css'

class Feature extends Component {
  buttonText() {
    return this.props.reset !== false && this.props.dataUrl ? 'Reset' : 'Detect'
  }

  onClick = () => {
    this.props.reset !== false && this.props.dataUrl ? this.props.reset() : this.props.onClick()
  }

  render() {
    return (
      <div className="feature twin-containers">
        <LeftContainer>
          <div className="description">
            <h1 className="description__title">{this.props.title}</h1>
            {this.props.hideResult ? null : (
              <div className="result">
                <pre>{this.props.result}</pre>
              </div>
            )}

            {this.props.children}
            <div className="description__button-container">
              <button onClick={this.onClick}>{this.buttonText()}</button>
            </div>
          </div>
        </LeftContainer>

        <LeftContainer>
          {this.props.dataUrl ? (
            <div className="description">
              <div className="image-center">
                <img className="image-large" src={this.props.dataUrl} alt="dataUrl" />
              </div>
              {this.props.leftContent}
            </div>
          ) : null}
        </LeftContainer>
      </div>
    )
  }
}

export default Feature

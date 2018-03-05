import React, { Component } from 'react';
import start3D from './3D/start3D';
import Webcam from './Webcam';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { webcamSide: 512 }
  }

  componentDidMount() {
    const video = this.refs.webcam.getVideo();
    start3D({ video });
  }

  render() {
    return (
        <div>
          <div id='webgl'/>
          <Webcam side={this.state.webcamSide} ref='webcam'/>
        </div>
    );
  }
}

export default App;

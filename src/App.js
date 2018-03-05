import React, { Component } from 'react';
import start3D from './3D/start3D';
import Webcam from './Webcam';
import './App.css';

class App extends Component {
  componentDidMount() {
    const video = this.refs.webcam.getVideo();
    start3D({ video });
  }

  render() {
    return (
        <div>
          <div id='webgl'/>
          <Webcam ref='webcam'/>
        </div>
    );
  }
}

export default App;

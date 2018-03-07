import React, { Component } from 'react';
import { application } from 'ecs-three';
import start3D from './3D/start3D';
import Dummy from './3D/Dummy';
import Webcam from './Webcam';
import { detect } from './api/kairos';
import { load } from './api/poly';
import MeshLoader from './3D/MeshLoader';
import './App.css';
import VideoPlane from './3D/VideoPlane';

class App extends Component {
  constructor() {
    super();
    this.state = { result: null } ;
    this.settings = {
      fov: 75,
      width: 500,
      height: 500,
      near: 0.1,
      far: 100,
      containerId: 'webgl'
    };
  }

  getSize() {
    return {
      width: this.settings.width,
      height: this.settings.height
    };
  }

  componentDidMount() {
    const video = this.refs.webcam.getVideo();
    start3D({ video, settings: this.settings });
    this.loadModel('5vbJ5vildOq');
  }

  async loadModel(id) {
    const meshData = await load(id);
    const loader = new MeshLoader(meshData)
    const mesh = await loader.load();
    application.add(new Dummy(mesh));
  }

  takeScreenshot = () => {
    const dataUrl = application.renderer.screenshot();
    const callback = result => this.setState({ result });
    detect(dataUrl, callback);
  }

  render() {
    return (
      <div className='app'>
        <div id='webgl'/>
        <button id='kairos' onClick={this.takeScreenshot}>KAIROS</button>
        <pre id='result'>{JSON.stringify(this.state.result, null, 2)}</pre>
        <Webcam size={this.getSize()} ref='webcam'/>
      </div>
    );
  }
}

export default App;

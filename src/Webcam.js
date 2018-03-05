import React, { Component } from 'react';

class Webcam extends Component {
  getVideo() {
    return this.refs.video;
  }

  render() {
    return <video ref='video' autoPlay style={{display: 'none'}}></video>
  }
}

export default Webcam;

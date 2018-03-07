import React, { Component } from 'react';

class Webcam extends Component {
  componentDidMount() {
    this.startWebcam();
  }

  render () { return <video ref='video' style={{display: 'none'}} autoPlay/>; }

  async startWebcam() {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) return;
    try {
      const width = this.props.size.width;
      const height = this.props.size.height;
      const constraints = { video: { width, height, facingMode: 'user' } };
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      const video = this.getVideo();
      video.src = window.URL.createObjectURL(stream);
      video.play();
    }
    catch(error) {
      console.error('Unable to access the camera/webcam.', error);
    };
  }

  getVideo() {
    return this.refs.video;
  }
}

export default Webcam;

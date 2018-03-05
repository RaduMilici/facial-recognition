import React, { Component } from 'react';

class Webcam extends Component {
  componentDidMount() {
    this.startWebcam();
  }

  render = () => <video ref='video' style={{display: 'none'}} autoPlay/>

  startWebcam() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      const constraints = { video: { width: this.props.side, height: this.props.side, facingMode: 'user' } };
      navigator.mediaDevices.getUserMedia(constraints).then( stream => {
        const video = this.getVideo();
        video.src = window.URL.createObjectURL(stream);
        video.play();
      }).catch( function( error ) {
        console.error( 'Unable to access the camera/webcam.', error );
      });
    }
  }

  getVideo() {
    return this.refs.video;
  }
}

export default Webcam;

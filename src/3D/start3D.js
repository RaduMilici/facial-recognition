import { application } from 'ecs-three';
// import { WebGLRenderer } from 'three';
import VideoPlane from './VideoPlane';

const start = ({ video, settings }) => {
  application.init(settings);
  // application.renderer.renderer = new WebGLRenderer({preserveDrawingBuffer: true});
  application.camera.position.z = 1;
  const videoPlane = new VideoPlane({video, settings});
  application.add(videoPlane);
};

export default start;

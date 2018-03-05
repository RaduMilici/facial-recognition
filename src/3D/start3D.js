import { application } from 'ecs-three';
import VideoPlane from './plane';

const start = ({ video }) => {
  const settings = {
    fov: 75,
    width: 512,
    height: 512,
    near: 0.1,
    far: 100,
    containerId: 'webgl',
  };
  application.init(settings);
  application.camera.position.z = 10;
  const videoPlane = new VideoPlane({ video });
  application.add(videoPlane);
};

export default start;

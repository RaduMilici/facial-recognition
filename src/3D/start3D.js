import { application } from 'ecs-three';
import VideoPlane from './VideoPlane';

const start = ({ video, settings }) => {
  application.init(settings);
  application.camera.position.z = 1;
  application.add(new VideoPlane({video, settings}));
};

export default start;

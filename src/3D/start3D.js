import { application } from 'ecs-three';
import { OrbitControls } from 'threejs-full-es6';
import Commodore64 from './Commodore64';
import Lights from './Lights';

const start = ({ video, settings }) => {
  application.init(settings);
  application.camera.position.set(-1, 1, 1);
  new OrbitControls(application.camera);
  application.add(new Commodore64(video));
  application.add(new Lights());
};

export default start;

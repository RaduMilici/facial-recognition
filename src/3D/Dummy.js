import { Entity } from 'ecs-three';
import Rotate from './components/rotate';

class Dummy extends Entity {
  constructor(mesh) {
    super();
    this.components = [Rotate];
    this.add(mesh);
    this.scale.setScalar(0.3);
  }

  dispatchEvent() {}
}

export default Dummy;

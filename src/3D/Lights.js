import { AmbientLight } from 'three';
import { Entity } from 'ecs-three';

class Lights extends Entity {
  constructor() {
    super();
    this.name = 'Lights';
    this.addLights();
  }

  addLights() {
    const ambientLight = new AmbientLight(0xffffff, 1);
    this.add(ambientLight);
  }
}

export default Lights;
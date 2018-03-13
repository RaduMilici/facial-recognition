import { AmbientLight, DirectionalLight } from 'three'
import { Entity } from 'ecs-three'

class Lights extends Entity {
  constructor() {
    super()
    this.name = 'Lights'
    this.addLights()
  }

  addLights() {
    this.directionalLight = new DirectionalLight(0xffffff, 1)
    this.directionalLight.position.set(5, 5, 5)

    this.ambientLight = new AmbientLight(0x404040, 1)

    this.add(this.directionalLight, this.ambientLight)
  }
}

export default Lights

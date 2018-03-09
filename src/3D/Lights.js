import { AmbientLight, DirectionalLight } from 'three'
import { Entity } from 'ecs-three'

class Lights extends Entity {
  constructor() {
    super()
    this.name = 'Lights'
    this.addLights()
  }

  addLights() {
    const directionalLight = new DirectionalLight(0xffffff, 1)
    directionalLight.position.set(5, 5, 5)

    const ambientLight = new AmbientLight(0x404040, 2)

    this.add(directionalLight, ambientLight)
  }
}

export default Lights

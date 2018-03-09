import { Entity } from 'ecs-three'

class Dummy extends Entity {
  constructor(mesh) {
    super()
    this.add(mesh)
  }

  dispatchEvent() {}
}

export default Dummy

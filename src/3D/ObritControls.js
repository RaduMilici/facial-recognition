import { OrbitControls } from 'threejs-full-es6'
import { application } from 'ecs-three'

class Controls {
  create() {
    this.controls = new OrbitControls(application.camera)
  }

  dispose() {
    this.controls.dispose()
  }
}

export default new Controls()

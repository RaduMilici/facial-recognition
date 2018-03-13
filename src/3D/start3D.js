import { Vector3 } from 'three'
import { application } from 'ecs-three'
import positions from './positions'
import Lights from './Lights'
const sceneLights = new Lights()

const start = ({ settings }) => {
  application.init(settings)
  application.camera.position.copy(positions.camera.welcome.pos)
  application.camera.target = new Vector3().copy(positions.camera.welcome.lookAt)
  application.camera.lookAt(application.camera.target)
  application.add(sceneLights)
}

export { start as default, sceneLights }

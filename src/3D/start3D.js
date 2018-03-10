import { application } from 'ecs-three'
import positions from './positions'
import Lights from './Lights'

const start = ({ settings }) => {
  application.init(settings)
  application.camera.position.copy(positions.camera.welcome.pos)
  application.camera.target = positions.camera.welcome.lookAt.clone()
  application.camera.lookAt(application.camera.target)
  application.add(new Lights())
}

export default start

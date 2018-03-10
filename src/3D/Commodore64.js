import { Entity } from 'ecs-three'
import ids from '../util/meshIds'
import loadMesh from './loader/load'
import VideoPlane from './VideoPlane'

class Commodore64 extends Entity {
  constructor(video) {
    super()
    this.loadCommodoreMesh()
    const settings = { width: 0.1, height: 0.1 }
    const videoPlane = new VideoPlane({ video, settings })
    videoPlane.position.set(-0.055, 0.3, -0.33)
    videoPlane.rotation.y = 0.025
    videoPlane.scale.set(0.37, 0.3, 1)
    this.add(videoPlane)
  }

  async loadCommodoreMesh() {
    const mesh = await loadMesh(ids.commodore64)
    this.add(mesh)
  }
}

export default Commodore64

import { Entity } from 'ecs-three'
import ids from '../meshIds'
import loadMesh from './loader/load'
import VideoPlane from './VideoPlane'
import TweenUpdate from './components/TweenUpdate'
import positions from './positions'

class Room extends Entity {
  constructor(video) {
    super()
    this.components = [TweenUpdate]
    this.loadMesh()
    const videoPlane = new VideoPlane({ video })
    videoPlane.position.copy(positions.videoPlane.pos)
    videoPlane.scale.copy(positions.videoPlane.scale)
    this.add(videoPlane)
  }

  async loadMesh() {
    const mesh = await loadMesh(ids.room)
    this.add(mesh)
  }
}

export default Room

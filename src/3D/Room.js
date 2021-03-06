import { Entity } from 'ecs-three'
import ids from '../util/meshIds'
import loadMesh from './loader/load'
import VideoPlane from './VideoPlane'
import TweenUpdate from './components/TweenUpdate'
import positions from './positions'
import KinectEntity from './Kinect'

class Room extends Entity {
  constructor(video) {
    super()
    this.components = [TweenUpdate]
    this.loadMesh()
    this.videoPlane = new VideoPlane({ video })
    this.videoPlane.position.copy(positions.videoPlane.pos)
    this.videoPlane.scale.copy(positions.videoPlane.scale)
    this.add(this.videoPlane)
  }

  async loadMesh() {
    const mesh = await loadMesh(ids.room)
    this.add(mesh)
    this.add(new KinectEntity())
    this.add(new KinectEntity())
  }
}

export default Room

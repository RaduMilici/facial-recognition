import { MeshBasicMaterial, VideoTexture, NearestFilter, RGBFormat, DoubleSide } from 'three'
import { Entity } from 'ecs-three'
import * as THREE from 'three'

const ScreenQuad = require('three-screen-quad')(THREE)

class VideoPlane extends Entity {
  constructor({ video }) {
    super()
    this.name = 'VideoPlane'
    this.video = video
    this.makeScreenQuad()
  }

  start() {}

  makeMap() {
    const map = new VideoTexture(this.video)
    map.minFilter = NearestFilter
    map.magFilter = NearestFilter
    map.format = RGBFormat
    return map
  }

  makeScreenQuad() {
    const map = this.makeMap(this.video)
    const screenQuad = new ScreenQuad()
    const material = new MeshBasicMaterial({ map, side: DoubleSide })
    screenQuad.material = material
    this.add(screenQuad)
  }
}

export default VideoPlane

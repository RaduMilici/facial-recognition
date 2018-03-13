import { Entity } from 'ecs-three'
import { vertexShader, fragmentShader } from '../components/4_kairos/KinectShaders'
import kinectVideo from '../img/kinect.webm'
import {
  VideoTexture,
  BufferGeometry,
  NearestFilter,
  RGBFormat,
  BufferAttribute,
  ShaderMaterial,
  AdditiveBlending,
  Vector3,
  Points,
} from 'three'

class Kinect extends Entity {
  constructor() {
    super()
    this.name = 'Kinect'
    this.center = new Vector3()
    this.video = document.createElement('video')
    this.video.addEventListener('loadedmetadata', this.onVideoLoaded)
    this.video.loop = true
    this.video.muted = true
    this.video.src = kinectVideo
    this.video.setAttribute('webkit-playsinline', 'webkit-playsinline')
    this.video.play()
  }

  onVideoLoaded = () => {
    const step = 1
    const width = 640
    const height = 480
    const geometry = new BufferGeometry()
    const vertices = new Float32Array(width * height * 3)

    for (let i = 0, j = 0, l = vertices.length; i < l; i += 3, j += step) {
      vertices[i] = j % width
      vertices[i + 1] = Math.floor(j / width)
    }

    geometry.addAttribute('position', new BufferAttribute(vertices, 3))
    const material = this.makeMaterial(width, height)
    const mesh = new Points(geometry, material)
    this.add(mesh)
  }

  makeMaterial(width, height) {
    const nearClipping = 850
    const farClipping = 4000
    const texture = new VideoTexture(this.video)

    texture.minFilter = NearestFilter
    texture.format = RGBFormat

    return new ShaderMaterial({
      uniforms: {
        map: { value: texture },
        width: { value: width },
        height: { value: height },
        nearClipping: { value: nearClipping },
        farClipping: { value: farClipping },
        pointSize: { value: 1 },
        zOffset: { value: 1000 },
      },
      vertexShader,
      fragmentShader,
      blending: AdditiveBlending,
      transparent: false,
    })
  }
}

export default Kinect

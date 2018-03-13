import { Vector3 } from 'three'

const positions = {
  camera: {
    welcome: {
      pos: new Vector3(1.5, 0.5, 1.5),
      lookAt: new Vector3(0, 0, 0.2),
    },
    backstory: {
      pos: new Vector3(1, 0.5, 1),
      lookAt: new Vector3(0.2, 0.2, 0),
    },
    howItWorks: {
      pos: new Vector3(0.8, 0.5, 0.5),
      lookAt: new Vector3(0.4, 0.3, -0.6),
    },
    videoPlane: {
      pos: new Vector3(0.65, 0.42, -0.3),
      lookAt: new Vector3(0.65, 0.42, -0.87),
    },
    kinect: {
      pos: new Vector3(0.65, 6, 2),
      lookAt: new Vector3(0.65, 6, -0.87),
    },
  },
  videoPlane: {
    pos: new Vector3(0.97, 0.42, -0.87),
    scale: new Vector3(0.28, 0.22, 1),
  },
}

export default positions

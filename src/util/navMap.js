import { goTo } from '../3D/cameraControl'

const navMap = number => {
  switch (number) {
    case 0:
      return { name: 'welcome' }
    case 1:
      return { name: 'backstory' }
    case 2:
      return { name: 'howItWorks' }
    case 3:
      return { name: 'videoPlane' }
    case 10:
      return { name: 'kinect', time: 2000 }
    default:
      return { name: 'videoPlane' }
  }
}

const navTo = (slideNumber, debug) => {
  const { name, time } = navMap(slideNumber)
  if (name) {
    goTo(name, debug, time)
  }
}

export default navTo

import { goTo } from '../3D/cameraControl'

const navMap = number => {
  switch (number) {
    case 0:
    case 1:
    case 2:
    case 16:
      return { name: 'welcome' }
    case 3:
      return { name: 'backstory' }
    case 4:
      return { name: 'howItWorks' }
    case 5:
    case 15:
      return { name: 'videoPlane' }
    case 14:
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

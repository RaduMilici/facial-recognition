import { goTo } from '../3D/cameraControl'

const navMap = number => {
  switch (number) {
    case 0:
      return 'welcome'
    case 1:
      return 'backstory'
    case 2:
      return 'howItWorks'
    case 3:
      return 'videoPlane'
    default:
      return 'videoPlane'
  }
}

const navTo = (slideNumber, debug) => {
  const destination = navMap(slideNumber)
  if (destination) {
    goTo(destination, debug)
  }
}

export default navTo

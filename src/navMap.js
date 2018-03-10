import { goTo } from './3D/cameraControl'

const navMap = number => {
  switch (number) {
    case 0:
      return 'welcome'
    case 1:
      return 'backstory'
    case 2:
      return 'howItWorks'
    case 3:
    case 4:
    case 5:
      return 'videoPlane'
    default:
      return null
  }
}

const navTo = (slideNumber, debug) => {
  const destination = navMap(slideNumber)
  if (destination) {
    goTo(destination, debug)
  }
}

export default navTo

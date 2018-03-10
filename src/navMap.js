import { goTo } from './3D/cameraControl'

const navMap = {
  '0': 'welcome',
  '1': 'videoPlane',
}

const navTo = slideNumber => {
  if (navMap[slideNumber]) {
    goTo(navMap[slideNumber])
  }
}

export default navTo

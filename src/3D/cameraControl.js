import positions from './positions'
import { Tween, Easing } from '@tweenjs/tween.js/src/Tween'
import { application } from 'ecs-three'

const time = 2000
const debugTime = 100
const easing = Easing.Quadratic.Out

const goTo = (name, debug) => {
  const selected = getCameraPos(name)
  if (selected) {
    tweenCamera(selected, debug)
    tweenLookAt(selected, debug)
  } else {
    console.error(`Invalid position name: ${name}`)
  }
}

const getCameraPos = name => (positions.camera[name] ? positions.camera[name] : null)

const tweenCamera = (selected, debug) => {
  new Tween(application.camera.position)
    .to(selected.pos, debug ? debugTime : time)
    .easing(easing)
    .start()
}

const tweenLookAt = (selected, debug) => {
  new Tween(application.camera.target)
    .to(selected.lookAt, debug ? debugTime : time)
    .easing(easing)
    .onUpdate(() => {
      application.camera.lookAt(application.camera.target)
    })
    .start()
}

export { goTo }

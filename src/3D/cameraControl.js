import positions from './positions'
import { Tween, Easing } from '@tweenjs/tween.js/src/Tween'
import { application } from 'ecs-three'

const time = 2000
const debugTime = 100
const easing = Easing.Quadratic.InOut

const goTo = (name, debug, customTime) => {
  const selected = getCameraPos(name)
  if (selected) {
    let selectedTime = time
    if (debug) selectedTime = debugTime
    if (!debug && customTime) selectedTime = customTime

    tweenCamera(selected, selectedTime)
    tweenLookAt(selected, selectedTime)
  } else {
    console.error(`Invalid position name: ${name}`)
  }
}

const getCameraPos = name => (positions.camera[name] ? positions.camera[name] : null)

const tweenCamera = (selected, selectedTime) => {
  new Tween(application.camera.position)
    .to(selected.pos, selectedTime)
    .easing(easing)
    .start()
}

const tweenLookAt = (selected, selectedTime) => {
  new Tween(application.camera.target)
    .to(selected.lookAt, selectedTime)
    .easing(easing)
    .onUpdate(() => {
      application.camera.lookAt(application.camera.target)
    })
    .start()
}

export { goTo }

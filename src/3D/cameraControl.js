import positions from './positions'
import { Tween, Easing } from '@tweenjs/tween.js/src/Tween'
import { application } from 'ecs-three'

const time = 2000
const easing = Easing.Quadratic.Out

const goTo = name => {
  tweenCamera(name)
  tweenLookAt(name)
}

const tweenCamera = name => {
  new Tween(application.camera.position)
    .to(positions.camera[name].pos, time)
    .easing(easing)
    .start()
}

const tweenLookAt = name => {
  new Tween(application.camera.target)
    .to(positions.camera[name].lookAt, time)
    .easing(easing)
    .onUpdate(() => application.camera.lookAt(application.camera.target))
    .start()
}

export { goTo }

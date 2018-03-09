import { Component } from 'ecs-three'
import tween from '@tweenjs/tween.js'

class TweenUpdate extends Component {
  constructor() {
    super()
    this.name = 'TweenUpdate'
  }

  update({ timestamp }) {
    tween.update(timestamp)
  }
}

export default TweenUpdate

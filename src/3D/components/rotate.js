import { Component } from 'ecs-three';

export default class Rotate extends Component {
  constructor() {
    super();
    this.name = 'Rotate';
    this.speed = 0.5;
  }

  update(delta) {
    this.entity.rotation.y += this.speed * delta;
  }
}
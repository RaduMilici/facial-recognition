import { Component } from 'ecs-three';

export default class Rotate extends Component {
  constructor() {
    super();
    this.name = 'Rotate';
    this.speed = 0.5;
    this.axis = 'y';
  }

  setAxis(axis) {
    const isValidAxis = ['x', 'y', 'z'].includes(axis);
    if(isValidAxis) this.axis = axis;
  }

  update(delta) {
    this.entity.rotation[this.axis] += this.speed * delta;
  }
}
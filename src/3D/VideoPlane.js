import { MeshBasicMaterial, VideoTexture, NearestFilter, RGBFormat, DoubleSide } from 'three';
import { Entity } from 'ecs-three';
import Rotate from './components/rotate';
import * as THREE from 'three';

const ScreenQuad = require('three-screen-quad')(THREE);

class VideoPlane extends Entity {
  constructor({ video, settings }) {
    super();
    this.name = 'VideoPlane';
    this.components = [Rotate];
    this.makeMesh(video, settings);
  }

  start() {
    this.components.Rotate.setAxis('z');
    this.components.Rotate.speed = 0.05;
  }

  makeMesh(video, { width, height }) {
    const map = new VideoTexture(video);
    map.minFilter = NearestFilter;
    map.magFilter = NearestFilter;
    map.format = RGBFormat;

    const screenQuad = new ScreenQuad();
    screenQuad.setScreenSize(width, height);
    const material = new MeshBasicMaterial({ map, side: DoubleSide });
    screenQuad.material = material;
    this.add(screenQuad);
  }

  onClick() {}

  dispatchEvent() {}
}

export default VideoPlane;
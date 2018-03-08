import { MeshBasicMaterial, VideoTexture, NearestFilter, RGBFormat, DoubleSide,
  PlaneBufferGeometry, Mesh } from 'three';
import { Entity } from 'ecs-three';
import * as THREE from 'three';

const ScreenQuad = require('three-screen-quad')(THREE);

class VideoPlane extends Entity {
  constructor({ video, settings }) {
    super();
    this.name = 'VideoPlane';
    this.video = video;
    this.settings = settings;
    this.makeScreenQuad(video, settings);
    //this.makePlane();
  }

  start() {
  }

  makeMap() {
    const map = new VideoTexture(this.video);
    map.minFilter = NearestFilter;
    map.magFilter = NearestFilter;
    map.format = RGBFormat;
    return map;
  }

  makePlane() {
    const map = this.makeMap(this.video);
    const geometry = new PlaneBufferGeometry(1, 1);
    const material = new MeshBasicMaterial();
    const mesh = new Mesh(geometry, material);
    this.add(mesh);
  }

  makeScreenQuad() {
    const map = this.makeMap(this.video);
    const screenQuad = new ScreenQuad();
    const material = new MeshBasicMaterial({ map, side: DoubleSide });
    screenQuad.material = material;
    this.add(screenQuad);
  }
}

export default VideoPlane;
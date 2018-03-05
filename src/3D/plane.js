import { BoxBufferGeometry, MeshBasicMaterial, Mesh, VideoTexture, NearestFilter, RGBFormat } from 'three';
import { Entity } from 'ecs-three';
import Rotate from './components/rotate';

class VideoPlane extends Entity {
  constructor({ video }) {
    super();
    this.name = 'VideoPlane';
    this.components = [Rotate];
    this.makeMesh(video);
  }

  makeMesh(video) {
    const map = new VideoTexture(video);
    map.minFilter = NearestFilter;
    map.magFilter = NearestFilter;
    map.format = RGBFormat;
    const side = 5;
    const geometry = new BoxBufferGeometry(side, side, side);
    const material = new MeshBasicMaterial({ map });
    this.mesh = new Mesh(geometry, material);
    this.add(this.mesh);
  }

  dispatchEvent() {}
}

export default VideoPlane;
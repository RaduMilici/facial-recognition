import { PlaneBufferGeometry, MeshBasicMaterial, Mesh, VideoTexture } from 'three';
import { Entity } from 'ecs-three';

class VideoPlane extends Entity {
  constructor({ video }) {
    super();
    this.name = 'VideoPlane';
    this.video = video;
    this.makeMesh();
  }

  makeMesh() {
    const map = new VideoTexture(this.video);
    const geometry = new PlaneBufferGeometry(16, 9);
    const material = new MeshBasicMaterial({ color: 0xffffff, side: 2 });
    this.mesh = new Mesh(geometry, material);
    this.mesh.rotation.x += Math.PI / 2;
    this.add(this.mesh);
  }
}

export default VideoPlane;
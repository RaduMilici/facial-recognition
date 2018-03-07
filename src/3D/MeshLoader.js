import { OBJLoader } from 'threejs-full-es6';

class MeshLoader {
  constructor(meshData) {
    this.meshData = meshData;
    this.loader = new OBJLoader();
  }

  load() {
    return new Promise(resolve => {
      resolve(this.loader.parse(this.meshData));
    });
  }
}

export default MeshLoader;
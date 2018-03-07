import { LegacyGLTFLoader } from 'threejs-full-es6';

class MeshLoader {
  constructor(meshData) {
    this.meshData = meshData;
    this.loader = new LegacyGLTFLoader();
    this.loader.setCrossOrigin( true );
  }

  findGltfUrl() {
    const byType = format => format.formatType === 'GLTF';
    const gltfData = this.meshData.formats.find(byType);
    return gltfData ? gltfData.root.url : null;
  }

  load() {
    return new Promise(resolve => {
      const gltfUrl = this.findGltfUrl();
      const onLoad = obj => { resolve(obj.scene); };
      const onError = error => { console.error('Could not load mesh.', error); }
      this.loader.load(gltfUrl, onLoad, null, onError);
    });
  }
}

export default MeshLoader;
import { load } from '../../api/poly';
import MeshLoader from './MeshLoader';

const loadModel = async id => {
  const meshData = await load(id);
  console.log(meshData)
  const loader = new MeshLoader(meshData);
  const mesh = await loader.load();
  return mesh;
}

export default loadModel;
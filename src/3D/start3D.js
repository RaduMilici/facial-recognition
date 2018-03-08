import { application } from 'ecs-three';
import { OrbitControls } from 'threejs-full-es6';
import Dummy from './Dummy';
import ids from '../meshIds';
import loadMesh from './loader/load';
import Commodore64 from './Commodore64';
import Lights from './Lights';

const start = ({ video, settings }) => {
  application.init(settings);
  application.camera.position.set(-1.5, 1.5, 1.5);
  new OrbitControls(application.camera);
  application.add(new Lights());
  loadDecor();
  const commodore64 = new Commodore64(video);
  addDummy(commodore64, { x: 0, y: 0.7, z: 0.2 });

};

const loadDecor = async () => {
  //const piano = await loadMesh(ids.piano);
  const desk = await loadMesh(ids.desk);

  //const pianoDummy = addDummy(piano, { x: 3, y: 0, z: -2 });
  //pianoDummy.rotation.y += Math.PI;

  const deskDummy = addDummy(desk);
  deskDummy.scale.z = 1.5;

}

const addDummy = (mesh, pos = { x: 0, y: 0, z: 0 }) => {
  const dummy = new Dummy(mesh);
  application.add(dummy, pos);
  return dummy;
}

export default start;

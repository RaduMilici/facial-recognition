import { get } from 'request';

const initSettings = {
  apiKey: 'AIzaSyBkDPk_xNTPVeZpfFHp4CV_KPogtQHyBOE',
  clientId: '448049746207-4k0elol8o8fprtm2kskpcr27qmdtvlb9.apps.googleusercontent.com',
  clientSecret: 'Rly_jUG6_uBwPME4yyRmvguR',
  scope: [
    'https://www.googleapis.com/auth/vrassetdata.readonly',
    'https://www.googleapis.com/auth/vrassetdata.readwrite'
  ]
};

const findObjUrl = meshData => {
  const byType = format => format.formatType === 'OBJ';
  const gltfData = meshData.formats.find(byType);
  return gltfData ? gltfData.root.url : null;
}

const getObj = async url => {
  return new Promise(resolve => {
    get({ url }, (error, response, body) => { resolve(body); });
  });
}

const load = (id) => {
  const url  = `https://poly.googleapis.com/v1/assets/${id}/?key=${initSettings.apiKey}`;

  return new Promise(resolve => {
    get(url, async (error, response, body) => {
      const url = findObjUrl(JSON.parse(body));
      const data = await getObj(url);
      resolve(data);
    });
  });
}

export { load };

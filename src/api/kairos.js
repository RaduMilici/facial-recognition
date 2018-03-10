import api from './api'
import get from 'lodash/get'

const rootUrl = 'https://api.kairos.com'
const detectUrl = `${rootUrl}/detect`
const enrollUrl = `${rootUrl}/enroll`
const recognizeUrl = `${rootUrl}/recognize`
const headers = {
  app_id: '5623987f',
  app_key: '6c40ec661f881b50a65b5700e91ba3f1',
}

const detect = ({ dataUrl, callback }) => {
  const body = { image: dataUrl }
  const options = { url: detectUrl, headers, json: true, body }
  const imagesCallback = ({ result }) => {
    const image = get(result, 'images[0]', result)
    callback({ result: image })
  }
  api.post({ options, callback: imagesCallback })
}

const enroll = ({ dataUrl, subject_id, gallery_name, callback }) => {
  const body = { image: dataUrl, subject_id, gallery_name }
  const options = { url: enrollUrl, headers, json: true, body }
  const enrollCallback = ({ result }) => {
    const transaction = get(result, 'images[0].transaction', result)
    callback({ result: transaction })
  }
  api.post({ options, callback: enrollCallback })
}

const recognize = ({ dataUrl, gallery_name, callback }) => {
  const body = { image: dataUrl, gallery_name }
  const options = { url: recognizeUrl, headers, json: true, body }
  const recognizeCallback = ({ result }) => {
    const transaction = get(result, 'images[0].transaction', result)
    callback({ result: transaction })
  }
  api.post({ options, callback: recognizeCallback })
}

export { detect, enroll, recognize }

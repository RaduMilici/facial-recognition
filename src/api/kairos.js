import api from './api'
import get from 'lodash/get'

const rootUrl = 'https://api.kairos.com'
const detectUrl = `${rootUrl}/detect`
const enrollUrl = `${rootUrl}/enroll`
const recognizeUrl = `${rootUrl}/recognize`
const verifyUrl = `${rootUrl}/verify`
const headers = {
  app_id: '5623987f',
  app_key: '6c40ec661f881b50a65b5700e91ba3f1',
}

const detect = ({ dataUrl, callback }) => {
  const resultProp = 'images[0]'
  makeCall({ url: detectUrl, dataUrl, callback, resultProp })
}

const enroll = ({ dataUrl, subject_id, gallery_name, callback }) => {
  const resultProp = 'images[0].transaction'
  makeCall({ url: enrollUrl, subject_id, dataUrl, gallery_name, callback, resultProp })
}

const recognize = ({ dataUrl, gallery_name, callback }) => {
  const resultProp = 'images[0].transaction'
  makeCall({ url: recognizeUrl, dataUrl, gallery_name, callback, resultProp })
}

const verify = ({ dataUrl, subject_id, gallery_name, callback }) => {
  const resultProp = 'images[0].transaction'
  makeCall({ url: verifyUrl, dataUrl, subject_id, gallery_name, callback, resultProp })
}

const makeCall = ({ url, dataUrl, subject_id, gallery_name, callback, resultProp }) => {
  const body = { image: dataUrl, subject_id, gallery_name }
  const options = { url, headers, json: true, body }
  const apiCallback = ({ result }) => {
    const transaction = get(result, resultProp, result)
    callback({ result: transaction })
  }
  api.post({ options, callback: apiCallback })
}

export { detect, enroll, recognize, verify }

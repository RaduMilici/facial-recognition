import { post } from 'request'

const url = 'https://api.kairos.com/detect'
const headers = {
  app_id: '5623987f',
  app_key: '6c40ec661f881b50a65b5700e91ba3f1',
}

const detect = (image, callback) => {
  const body = { image }
  const options = { url, headers, json: true, body }
  post(options, (error, response, body) => {
    callback(body)
  })
}

export { detect }

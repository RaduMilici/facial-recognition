import { post } from 'request'
import { application } from 'ecs-three'

const url = 'https://api.kairos.com/detect'
const headers = {
  app_id: '5623987f',
  app_key: '6c40ec661f881b50a65b5700e91ba3f1',
}
const data = { video: null }

const detect = (image, callback) => {
  const body = { image }
  const options = { url, headers, json: true, body }
  post(options, (error, response, body) => {
    if (body.images) {
      callback(body.images[0])
    } else {
      console.error(body)
    }
  })
}

const takeScreenshot = callback => {
  const canvas = document.createElement('canvas')
  const context = canvas.getContext('2d')
  const width = data.video.videoWidth
  const height = data.video.videoHeight
  canvas.width = width
  canvas.height = height
  context.fillRect(0, 0, width, height)
  context.drawImage(data.video, 0, 0, width, height)
  const dataUrl = canvas.toDataURL()
  detect(dataUrl, result => callback({ result, dataUrl }))
}

const setVideo = video => (data.video = video)

export { takeScreenshot, detect, setVideo }

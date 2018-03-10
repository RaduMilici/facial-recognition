const data = { video: null }

const setVideo = video => (data.video = video)

const frameFaces = async ({ result, dataUrl }) => {
  if (!result.faces) return null

  const { canvas, context } = await makeCanvas({ result, dataUrl })
  result.faces.forEach(face => {
    const { topLeftX, topLeftY, width, height } = face
    context.lineWidth = '6'
    context.strokeStyle = '#52d3fa'
    context.rect(topLeftX, topLeftY, width, height)
    context.stroke()
  })
  return canvas.toDataURL()
}

const makeCanvas = ({ result, dataUrl }) => {
  return new Promise(resolve => {
    const image = new Image()
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')

    canvas.width = result.width
    canvas.height = result.height

    image.src = dataUrl
    image.onload = () => {
      context.drawImage(image, 0, 0)
      resolve({ canvas, context })
    }
  })
}

const takeScreenshot = () => {
  const canvas = document.createElement('canvas')
  const context = canvas.getContext('2d')
  const width = data.video.videoWidth
  const height = data.video.videoHeight
  canvas.width = width
  canvas.height = height
  context.fillRect(0, 0, width, height)
  context.drawImage(data.video, 0, 0, width, height)
  return canvas.toDataURL()
}

export { frameFaces, takeScreenshot, setVideo }

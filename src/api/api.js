import { post } from 'request'

const api = {
  post: ({ options, callback }) => {
    post(options, (error, response, body) => {
      if (body) {
        callback({ result: body })
      } else {
        console.error(error)
      }
    })
  },
}

export default api

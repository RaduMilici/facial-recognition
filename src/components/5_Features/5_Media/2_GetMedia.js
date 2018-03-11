import React, { Component } from 'react'
import Feature from '../Feature'
import { postMedia } from '../../../api/kairos'

class GetMedia extends Component {
  constructor() {
    super()
    this.state = {
      result: null,
    }
  }

  postMedia = () => {
    const callback = async ({ result }) => {
      this.setState({ result: JSON.stringify(result, null, 2) })
    }
    //postMedia({ dataUrl: imgUrls.happy, callback })
  }

  render() {
    return (
      <div>
        <Feature
          result={this.state.result}
          onClick={this.postMedia}
          title="Get media"
          reset={false}
        />
      </div>
    )
  }
}

export default GetMedia

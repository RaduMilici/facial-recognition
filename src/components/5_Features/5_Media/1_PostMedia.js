import React, { Component } from 'react'
import Feature from '../Feature'
import { postMedia } from '../../../api/kairos'
import imgUrls from '../../../util/imgUrls'

class PostMedia extends Component {
  constructor() {
    super()
    this.state = {
      result: null,
      dataUrl: imgUrls.happy,
    }
  }

  postMedia = () => {
    const callback = async ({ result }) => {
      this.setState({ result: JSON.stringify(result, null, 2) })
    }
    postMedia({ dataUrl: imgUrls.happy, callback })
  }

  changePicture = ({ target }) => {
    this.setState({ dataUrl: imgUrls[target.value] })
  }

  radio() {
    return (
      <div onChange={this.changePicture}>
        <input type="radio" id="happy" name="contact" value="happy" defaultChecked={true} />
        <label htmlFor="happy">happy</label>

        <input type="radio" id="neutral" name="contact" value="neutral" />
        <label htmlFor="neutral">neutral</label>

        <input type="radio" id="sad" name="contact" value="sad" />
        <label htmlFor="sad">sad</label>
      </div>
    )
  }

  render() {
    return (
      <div>
        <Feature
          result={this.state.result}
          onClick={this.postMedia}
          title="Post media"
          dataUrl={this.state.dataUrl}
          reset={false}
          leftContent={this.radio()}
        />
      </div>
    )
  }
} //0a1ae49f91365cca21861d6a

export default PostMedia

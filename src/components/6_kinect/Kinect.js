import { Component } from 'react'
import { Vector3 } from 'three'
import controls from '../../3D/ObritControls'

class Kinect extends Component {
  constructor() {
    super()
    this.state = {
      dataUrl: null,
      result: null,
    }
  }

  componentDidMount() {
    controls.create()
    controls.controls.target.copy(new Vector3(-164, -711, -1506))
  }

  render() {
    return null
  }

  componentWillUnmount() {
    controls.dispose()
  }
}

export default Kinect

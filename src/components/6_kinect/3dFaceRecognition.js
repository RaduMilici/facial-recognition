import React from 'react'
import LeftContainer from '../Containers/LeftContainer'
import _3dHead_1 from '../../img/3dHead1.gif'

const _3DFaceRecognition = () => {
  return (
    <div className="feature twin-containers">
      <LeftContainer>
        <div className="description">
          <h1 className="description__title--small">Not creepy at all: 3D face recognition</h1>
          <ul>
            <li>
              A modality of facial recognition methods in which the three-dimensional geometry of
              the human face is used.
            </li>
            <li>
              Can achieve significantly higher accuracy than their 2D counterparts, rivaling
              fingerprint recognition.
            </li>
            <li>
              Avoids such pitfalls of 2D face recognition algorithms as change in lighting,
              different facial expressions, make-up and head orientation.
            </li>
            <li>Is still an active research field.</li>
          </ul>
        </div>
      </LeftContainer>

      <LeftContainer>
        <div className="description">
          <img style={{ height: '500px' }} src={_3dHead_1} alt="_3dHead_1" />
        </div>
      </LeftContainer>
    </div>
  )
}

export default _3DFaceRecognition

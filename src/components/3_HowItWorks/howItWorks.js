import React from 'react'
import LeftContainer from '../Containers/LeftContainer'
import nodes from '../../img/nodes.png'

const HowItWorks = () => {
  return (
    <LeftContainer>
      <div className="description">
        <h1 className="description__title">How does it work?</h1>
        <ul>
          <li>The software identifies 80 nodal points on a human face.</li>
          <li>
            Points used to measure variables of a person’s face, such as the length or width of the
            nose
          </li>
          <li>
            Works by capturing data of an individual’s face and storing the resulting data as a
            faceprint.
          </li>
        </ul>
        <div className="image-center">
          <img className="image-medium" src={nodes} alt="nodes" />
        </div>
      </div>
    </LeftContainer>
  )
}

export default HowItWorks

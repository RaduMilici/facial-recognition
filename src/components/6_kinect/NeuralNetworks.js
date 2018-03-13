import React from 'react'
import LeftContainer from '../Containers/LeftContainer'
import muhhamad_ali from '../../img/muhhamad_ali.gif'
import donald_trump from '../../img/donald_trump.gif'

const NeuralNetworks = () => {
  return (
    <div className="feature twin-containers">
      <LeftContainer>
        <div className="description">
          <h1 className="description__title">Neural Networks</h1>
          <ul>
            <li>
              Research submitted to Cornell University uses deep neural networks to create detailed
              3D models of faces using a single 2D picture.
            </li>
            <li>
              Face mapping at this level usually requires a series of photos in ideal lighting to
              make sure you get all the curves, angles, and asymmetries of the face.
            </li>
            <li>
              Relied on an extensive “face database” (a real thing that exists) to make smart
              inferences on the finer details of each face.
            </li>
          </ul>
        </div>
      </LeftContainer>

      <LeftContainer>
        <div className="description">
          <img style={{ height: '350px' }} src={muhhamad_ali} alt="muhhamad_ali" />
          <img style={{ height: '350px' }} src={donald_trump} alt="donald_trump" />
        </div>
      </LeftContainer>
    </div>
  )
}

export default NeuralNetworks

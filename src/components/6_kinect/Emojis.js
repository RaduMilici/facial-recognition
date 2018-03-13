import React from 'react'
import LeftContainer from '../Containers/LeftContainer'
import wireframe_panda from '../../img/wireframe_panda.gif'
import cat_woman from '../../img/cat_woman.gif'

const Emojis = () => {
  return (
    <div className="feature twin-containers">
      <LeftContainer>
        <div className="description">
          <h1 className="description__title">Mapping geometries</h1>
          <ul>
            <li>Depth cameras use techniques to calculate depth.</li>
            <li>Depth is the third dimension, we can make a 3D model.</li>
            <li>Trivial to map the model's geometry to a simplified one.</li>
          </ul>
        </div>
      </LeftContainer>

      <LeftContainer>
        <div className="description">
          <img
            style={{ height: '350px', width: '640px' }}
            src={wireframe_panda}
            alt="wireframe_panda"
          />
          <img style={{ height: '350px', width: '640px' }} src={cat_woman} alt="cat_woman" />
        </div>
      </LeftContainer>
    </div>
  )
}

export default Emojis

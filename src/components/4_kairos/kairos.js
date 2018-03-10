import React from 'react'
import LeftContainer from '../Containers/LeftContainer'
import kairos from '../../img/kairos-logo.png'
import kairosFeatures from '../../img/kairos-features.png'

const Faceprint = () => {
  return (
    <LeftContainer>
      <div className="description">
        <div className="image-center">
          <img src={kairos} alt="kairos" />
        </div>
        <p>
          <q>
            We call these features ‘Human Analytics’. You can use them to gather unique, real-time
            insights about people as they interact with your company, brand or product.
          </q>
        </p>

        <div className="image-center">
          <img style={{ height: '500px' }} src={kairosFeatures} alt="kairosFeatures" />
        </div>
      </div>
    </LeftContainer>
  )
}

export default Faceprint

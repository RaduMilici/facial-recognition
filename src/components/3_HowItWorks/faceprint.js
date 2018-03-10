import React from 'react'
import LeftContainer from '../Containers/LeftContainer'
import faceprint from '../../img/points-triangulation.webp'
import delaunay from '../../img/delaunay.gif'

const Faceprint = () => {
  return (
    <LeftContainer>
      <div className="description">
        <h1 className="description__title">The faceprint</h1>
        <div className="image-center">
          <img className="image-medium" src={faceprint} alt="faceprint" />
        </div>
        <div className="image-center">
          <img className="image-medium" src={delaunay} alt="delaunay" />
        </div>
      </div>
    </LeftContainer>
  )
}

export default Faceprint

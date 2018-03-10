import React from 'react'
import LeftContainer from '../Containers/LeftContainer'

const BackStory = () => {
  return (
    <LeftContainer>
      <div className="description">
        <h1 className="description__title">What is facial recognition?</h1>
        <ul>
          <li>
            A type of application capable of uniquely identifying a person by analyzing patterns
            based on the person's facial contours.
          </li>
          <li>
            Mostly used for security purposes, though there is increasing interest in other areas.
          </li>
          <li>Most systems function based on the different nodal points on a human face.</li>
          <li>Techniques are quickly evolving with new approaches such as 3D modeling.</li>
          <li>
            Face images can be captured from a distance and can be analyzed without ever requiring
            any interaction with the user/person.
          </li>
          <li>No user can successfully imitate another person.</li>
        </ul>
      </div>
    </LeftContainer>
  )
}

export default BackStory

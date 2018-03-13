import React from 'react'
import LeftContainer from '../Containers/LeftContainer'

const History = () => {
  return (
    <LeftContainer>
      <div className="description">
        <h1 className="description__title">History</h1>
        <ul>
          <li>
            1964 and 1965: Woody Bledsoe, along with Helen Chan and Charles Bisson, worked on using
            the computer to recognize human faces.
          </li>
          <li>
            Because the funding was provided by an unnamed intelligence agency that did not allow
            much publicity, little of the work was published.
          </li>
          <li>
            1997: experiments performed on a database of over 2000 photographs, the computer
            consistently outperformed humans when presented with the same recognition tasks.
          </li>
          <li>
            2000: the Identix company develops FaceIt. Can pick out someone's face in a crowd and
            compare it to databases worldwide to recognize and put a name to a face.
          </li>
          <li>
            Since 1993, the error rate of automatic face-recognition systems has decreased by a
            factor of 272.
          </li>
        </ul>
      </div>
    </LeftContainer>
  )
}

export default History

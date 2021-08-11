import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import '../styles/press-preview.css'


export default ({ press }) => (

  <article>
      <div className="d-flex">
          <div className="press-image-wrapper">
            <Img
                className="press-image"
              alt={press.title}
              fluid={press.featuredImage.fluid}
                />
          </div>
          <div className='press-text-wrapper'>
            <h2>{press.title}</h2>
            {/*<div>
                <p>{press.releaseDescription.releaseDescription}</p>
            </div>*/}
          </div>
      </div>
  </article>
)
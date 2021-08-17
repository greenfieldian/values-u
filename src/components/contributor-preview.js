import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import '../styles/contributor-preview.css'

export default ({ contributor }) => (

  <article className="text-center contributor-preview-item">
      <div className="contributor-container">
          <Img
              className="contributor-image"
              alt={contributor.title}
              fluid={contributor.headshot.fluid}
          />
          <h1 className="mt-2">
            <Link to={`/contributors/${contributor.slug}`} className="text-decoration-none">{contributor.name}</Link>
          </h1>
      </div>
  </article>
)
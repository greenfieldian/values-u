import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'


export default ({ contributor }) => (

  <article>
      <div>
          {/*<Img
              className="video-thumbnail"
              alt={video.title}
              fluid={video.thumbnail.fluid}
          />*/}
          <h3 className="video-header">
            <Link to={`/contributors/${contributor.slug}`} className="text-decoration-none">{contributor.name}</Link>
          </h3>
      </div>
  </article>
)
import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import '../styles/video-preview.css'


export default ({ video }) => (

  <article className="video-prev-contain mb-3">
      <div>
        <Link to={`/videos/${video.slug}`}>
          <Img
                className="video-thumbnail"
                alt={video.title}
                fluid={video.thumbnail.fluid}
              />
        </Link>
          <h3 className="video-header">
            <Link to={`/videos/${video.slug}`} className="text-decoration-none">{video.title}</Link>
          </h3>
      </div>
  </article>
)
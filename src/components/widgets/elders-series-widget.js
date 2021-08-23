import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import VideoPreview from '../video-preview'

import './bite-size-widget.css'



export default function EldersWidget() {
  const data = useStaticQuery(graphql`
    query EldersWidgetQuery {
      allContentfulVideoPost(limit: 4, filter: {category: {title: {eq: "Elders Series"}}}) {
        edges {
          node {
            title
            thumbnail {
              fluid {
                ...GatsbyContentfulFluid_tracedSVG
              }
            }
            slug
          }
        }
      }
    }
  `)

  return (
    <div className='bite-size-widget widget-container mb-5'>
      <div className="d-flex justify-content-between widget-header">
        <h5 className="mt-0 mb-1">Elders Series</h5>
        <Link to="/series/bite-size"><h5 className="mb-3">Explore all</h5></Link>
      </div>
      <div className="d-flex flex-wrap justify-content-between">
      {data.allContentfulVideoPost.edges.map(( {node} ) => {
        return (
          <VideoPreview video={node} />
          )
        })}
      </div>
    </div>

  )
}

/*<div>
            <div>
              <Img
                className="video-thumbnail"
                alt={node.title}
                fluid={node.thumbnail.fluid}
              />
            </div>
            <h1>{node.title}</h1>
          </div>*/
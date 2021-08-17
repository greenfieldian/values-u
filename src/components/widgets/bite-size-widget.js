import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import VideoPreview from '../video-preview'

import './bite-size-widget.css'



export default function BiteSizeWidget() {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allContentfulVideoPost(filter: {category: {title: {eq: "Bite Size"}}}) {
        edges {
          node {
            title
            thumbnail {
              fluid {
                ...GatsbyContentfulFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  `)

  return (
    <div className='bite-size-widget widget-container'>
      <div className="d-flex justify-content-between widget-header">
        <h5 className="mt-0 mb-1">Bite Size Videos</h5>
        <h5 className="mb-3">Explore all</h5>
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
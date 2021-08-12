import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import VideoPreview from '../video-preview'

export default function BiteSizeWidget() {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allContentfulVideoPost(filter: {category: {title: {eq: "Bite Size"}}}) {
        edges {
          node {
            title
            thumbnail {
              fluid(maxWidth: 10, maxHeight: 10) {
                ...GatsbyContentfulFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  `)

  return (
    <header>
      {data.allContentfulVideoPost.edges.map(( {node} ) => {
        return (
          <VideoPreview video={node} />
        )
      })}
    </header>
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
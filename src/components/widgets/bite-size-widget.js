import React from "react"
import get from 'lodash/get'
import { useStaticQuery, graphql } from "gatsby"

export default function BiteSizeWidget() {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      allContentfulVideoPost {
        edges {
          node {
            title
            slug
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
      {data.edges.map(({ node }) => {
                return (
                  <li key={node.slug} className="video-item">
                    <div>{data.edged.node.title}</div>
                  </li>
                )
              })}
    </header>
  )
}
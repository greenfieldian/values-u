import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import  Img  from 'gatsby-image'

import './contributor-widget.css'

export default function ContributorWidget() {
  const data = useStaticQuery(graphql`
  query ContributorQuery {
    allContentfulContributor(limit: 6) {
      edges {
        node {
          name
          headshot {
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
    <div className="contributor-widget-list">
      {data.allContentfulContributor.edges.map(( {node} ) => {
        return (
          <div className="contributor-widget-item text-center">
            <div>
              <Img 
                fluid={node.headshot.fluid}
                className="contributor-widget-img"
              />
            </div>
            <h1 className='mt-2'>{node.name}</h1>
          </div>
        )
      })}
    </div>
  )
}
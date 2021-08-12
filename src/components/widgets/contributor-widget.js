import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default function ContributorWidget() {
  const data = useStaticQuery(graphql`
  query ContributorQuery {
    allContentfulContributor {
      edges {
        node {
          name
        }
      }
    }
  }
  `)

  return (
    <header>
      {data.allContentfulContributor.edges.map(( {node} ) => {
        return (
          <div>
            <div>
            </div>
            <h1>{node.name}</h1>
          </div>
        )
      })}
    </header>
  )
}
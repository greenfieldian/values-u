import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import Donate from '../components/donate'
import ArchiveHero from '../components/ArchiveHero'
import ContributorPreview from '../components/contributor-preview'


class ContributorIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const contributors = get(this, 'props.data.allContentfulContributor.edges')

    return (
      <Layout location={this.props.location}>
        <ArchiveHero />
        <div style={{ background: '#fff' }} className="container">
          <Helmet title={siteTitle} />
          <div className="wrapper">
            {/*<h2 className="section-headline">Recent articles</h2>*/}
            <ul className="video-list d-flex justify-content-between flex-wrap">
              {contributors.map(({ node }) => {
                return (
                  <li key={node.slug} className="video-item">
                    <ContributorPreview contributor={node}/>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        <Donate />
      </Layout>
    )
  }
}

export default ContributorIndex

export const pageQuery = graphql`
query ContributorIndexQuery {
    allContentfulContributor {
        edges {
            node {
            name
            slug
            }
        }
    }
}
`
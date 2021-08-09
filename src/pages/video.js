import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'
import Donate from '../components/donate'
import ArchiveHero from '../components/ArchiveHero'

class VideoIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulVideoPost.edges')

    return (
      <Layout location={this.props.location}>
        <ArchiveHero />
        <div style={{ background: '#fff' }} className="container">
          <Helmet title={siteTitle} />
          <div className="wrapper">
            {/*<h2 className="section-headline">Recent articles</h2>*/}
            <ul className="article-list">
              {posts.map(({ node }) => {
                return (
                  <li key={node.slug} className="blog-item">
                    
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

export default VideoIndex

export const pageQuery = graphql`
  query VideoIndexQuery {
    allContentfulVideoPost {
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`
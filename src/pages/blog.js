import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import './blog.css'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'
import Donate from '../components/donate'
import ArchiveHero from '../components/ArchiveHero'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')

    return (
      <Layout location={this.props.location}>
        <ArchiveHero />
        <div style={{ background: '#fff' }} className="container">
          <Helmet title={siteTitle} />
          <div className="">
            {/*<h2 className="section-headline">Recent articles</h2>*/}
            <ul className="article-list">
              {posts.map(({ node }) => {
                return (
                  <li key={node.slug} className="blog-item">
                    <ArticlePreview article={node} />
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

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndexQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          author {
            name
          }
          description {
            description
          }
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

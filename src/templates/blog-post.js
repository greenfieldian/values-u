import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'

import './blog-post.css'
import Donate from '../components/donate'


class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulBlogPost')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }} className="blog-post-container my-5">
          <Helmet title={`${post.title} | ${siteTitle}`} />
          <div>
            <Img
              alt={post.title}
              fluid={post.heroImage.fluid}
            />
          </div>
          <div className="mt-5 container">
            <h1 className='blog-post-headline'>{post.title}</h1>
            <div className="blog-post-meta">
              <p className="blog-post-author">{post.author.name}</p>
              <p
                style={{
                  display: 'block',
                }}
              >
                {post.publishDate}
              </p>
            </div>
            <hr></hr>
            <div
              className="blog-post-body"
              dangerouslySetInnerHTML={{__html: post.body.childMarkdownRemark.html}}
            />
          </div>
        </div>
        <Donate />
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      author {
        name
      }
      title
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`

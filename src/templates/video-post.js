import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Layout from '../components/layout'

class VideoPostTemplate extends React.Component {
  render() {
    const video = get(this.props, 'data.contentfulVideoPost')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={`${video.title} | ${siteTitle}`} />
          <div className="wrapper">
            <h1 className="section-headline">{video.title}</h1>
            <p
              style={{
                display: 'block',
              }}
            >
              {video.publishDate}
            </p>
            <div
             
            />
          </div>
        </div>
      </Layout>
    )
  }
}

export default VideoPostTemplate

export const pageQuery = graphql`
  query VideoPostBySlug($slug: String!) {
    contentfulVideoPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
    }
  }
`

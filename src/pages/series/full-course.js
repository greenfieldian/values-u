import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Layout from '../../components/layout'
import Donate from '../../components/donate'
import ArchiveHero from '../../components/ArchiveHero'
import VideoPreview from '../../components/video-preview'

import '../videos.css'

class FullCourse extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const videos = get(this, 'props.data.allContentfulVideoPost.edges')

    return (
      <Layout location={this.props.location}>
        <ArchiveHero />
        <div style={{ background: '#fff' }} className="container">
          <Helmet title={siteTitle} />
          <div className="videos-wrapper">
            {/*<h2 className="section-headline">Recent articles</h2>*/}
            <ul className="video-list d-flex justify-content-between flex-wrap">
              {videos.map(({ node }) => {
                return (
                  <li key={node.slug} className="video-item">
                    <VideoPreview video={node}/>
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

export default FullCourse

export const pageQuery = graphql`
query FullCourseIndexQuery {
  allContentfulVideoPost (
    filter: {children: {}, category: {title: {eq: "Full Course"}}}
  ){
    edges {
      node {
        title
        slug
        thumbnail {
          fluid {
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
      }
    }
  }
}
`
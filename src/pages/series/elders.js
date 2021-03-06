import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Layout from '../../components/layout'
import Donate from '../../components/donate'
import ArchiveHero from '../../components/ArchiveHero'
import VideoPreview from '../../components/video-preview'

import '../videos.css'

class EldersSeries extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const videos = get(this, 'props.data.allContentfulVideoPost.edges')

    return (
      <Layout location={this.props.location}>
        <ArchiveHero description="Our 'Elders' segments focus on a discussion between an expert in their field, and a rising talent, discussing a key value relevant to our panelists and how and why this must be passed onto future generations."/>
        <div style={{ background: '#fff' }} className="container">
        <Helmet title="Elders | ValuesU" />
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

export default EldersSeries

export const pageQuery = graphql`
query EldersSeriesIndexQuery {
  allContentfulVideoPost (
    filter: {children: {}, category: {title: {eq: "Elders Series"}}}
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
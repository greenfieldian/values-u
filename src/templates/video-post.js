import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Layout from '../components/layout'
import Donate from '../components/donate'
import {EmailIcon, FacebookIcon, TwitterIcon} from 'react-share'

import './video-post.css'
import BiteSizeWidget from '../components/widgets/bite-size-widget'

class VideoPostTemplate extends React.Component {
  render() {
    const video = get(this.props, 'data.contentfulVideoPost')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={`${video.title} | ${siteTitle}`} />
          <div className="wrapper video-post-wrapper">
            <div
              dangerouslySetInnerHTML={{__html: video.videoEmbed.childMarkdownRemark.html}}
            />
            <h1 className="video-post-headline">{video.title}</h1>
            <div className="video-meta">
              <p className="video-contributor-name">{video.contributor.name}</p>
              <p
                style={{
                  display: 'block',
                }}
              >
                {video.publishDate}
              </p>
            </div>
            <div>
              <EmailIcon size={32} round={true}/>
              <FacebookIcon size={32} round={true} className="mx-3"/>
              <TwitterIcon size={32} round={true}/>
            </div>
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
      videoEmbed {
        childMarkdownRemark {
          html
        }
      }
      contributor {
        name
      }
    }
  }
`

import React, { Component } from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import ArchiveHero from '../components/ArchiveHero'
import PressPreview from '../components/press-preview'
import Donate from '../components/donate'

export default class Press extends Component {
    render() {

    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const press = get(this, 'props.data.allContentfulPress.edges')

        return (
            <Layout>
                <ArchiveHero />
                <div style={{ background: '#fff' }} className="container">
                    <Helmet title={siteTitle} />
                    <div className="wrapper">
                        {/*<h2 className="section-headline">Recent articles</h2>*/}
                        <ul className="article-list">
                        {press.map(({ node }) => {
                            return (
                            <li key={node.slug} className="blog-item">
                                <PressPreview press={node}/>
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

export const pageQuery = graphql`
  query PressIndexQuery {
    allContentfulPress {
        edges {
          node {
            title
            releaseDescription {
              releaseDescription
            }
            link {
              link
            }
            featuredImage {
                fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
                    ...GatsbyContentfulFluid_tracedSVG
                  }
            }
          }
        }
      }
  }
`

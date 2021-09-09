import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import VideoPollComponent from '../videopoll'

export default function VideoPoll1() {

    const data = useStaticQuery(graphql`
        query VideoPoll2Query {
        allContentfulVideoPost(filter: {category: {title: {eq: "Video Poll Active 2"}}}) {
            edges {
              node {
                videoEmbed {
                    childMarkdownRemark {
                      html
                    }
                  }
                title
                slug
              }
            }
        }
      }
  `)

    return (
        <div className='video-poll-container mb-5'>
            <div className="container">
                <div>
                    <div>
                        <ul className="d-flex justify-content-between flex-wrap">
                        {data.allContentfulVideoPost.edges.map(({ node }) => {
                            return (
                                <div className="w-100 video-post-container">
                                    <div
                        dangerouslySetInnerHTML={{__html: node.videoEmbed.childMarkdownRemark.html}}
                        className="video-poll-video"
                        />
                            <li>
                                <p>{node.title}</p>
                            </li>
                                </div>
                            )
                        })}
                        </ul>
                    </div>
                    <VideoPollComponent />
                </div>
            </div>
        </div>
    )
}

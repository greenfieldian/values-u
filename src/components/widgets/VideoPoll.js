import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import VideoPollComponent from '../videopoll'

export default function VideoPoll() {

    const data = useStaticQuery(graphql`
        query VideoPollQuery {
        allContentfulVideoPost(filter: {category: {title: {eq: "Video Poll Active"}}}) {
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
                    <h2>You be the judge!</h2>
                    <p>Help shape the future of ValuesU! Let us know which style of video you prefer!</p>
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

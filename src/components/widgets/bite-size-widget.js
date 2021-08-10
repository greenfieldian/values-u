import React from 'react'
import { graphql} from 'gatsby'
import get from 'lodash/get'
import VideoPreview from '../video-preview'

import '../../pages/videos.css'

class BiteSize extends React.Component {
  render() {
    const videos = get(this, 'props.data.allContentfulVideoPost.edges')

    return (
        <div style={{ background: '#fff' }} className="container">
          <div className="wrapper">
            {/*<h2 className="section-headline">Recent articles</h2>*/}
            <ul className="video-list d-flex justify-content-between flex-wrap">
              {videos.map(({ node }) => {
                return (
                  <li key={node.slug} className="video-item">
                    
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
    )
  }
}

export default BiteSize

export const useStaticQuery = graphql`
query BiteSizeWidgetIndexQuery {
  allContentfulVideoPost {
    edges {
      node {
        title
      }
    }
  }
}
`
import * as React from "react"
import get from 'lodash/get'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../components/layout"
import Seo from "../components/seo"
import Donate from "../components/donate";

import HomeHero from '../components/HomeHero';
import BiteSizeWidget from "../components/widgets/bite-size-widget";

const videos = get(this, 'props.data.allContentfulVideoPost.edges')

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <HomeHero />
    <Donate />
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
query IndexPageQuery {
  allContentfulVideoPost {
    edges {
      node {
        title
        slug
        thumbnail {
          fluid(maxWidth: 10, maxHeight: 10) {
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
      }
    }
  }
}
`
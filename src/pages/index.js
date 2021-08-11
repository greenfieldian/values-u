import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../components/layout"
import Seo from "../components/seo"
import Donate from "../components/donate";

import HomeHero from '../components/HomeHero';


const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <HomeHero />
    <Donate />
  </Layout>
)

export default IndexPage
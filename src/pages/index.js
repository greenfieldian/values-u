import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../components/layout"
import Seo from "../components/seo"
import Donate from "../components/donate";

import HomeHero from '../components/HomeHero';
import BiteSizeWidget from "../components/widgets/bite-size-widget";
import ContributorWidget from "../components/widgets/contributor-widget";


const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <HomeHero />
    <BiteSizeWidget />
    <ContributorWidget />
    <Donate />
  </Layout>
)

export default IndexPage
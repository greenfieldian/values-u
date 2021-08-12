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
    <main>
      <div className="container">
        <BiteSizeWidget />
        <div className="influencer-widget-container">
          <div className="influencer-widget-header text-center">
            <h1>The Influencers Behind our Values</h1>
          </div>
          <ContributorWidget />
        </div>
      </div>
    </main>
    <Donate />
  </Layout>
)

export default IndexPage
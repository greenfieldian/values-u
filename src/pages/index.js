import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../components/layout"
import Seo from "../components/seo"
import Donate from "../components/donate";

import HomeHero from '../components/HomeHero';
import BiteSizeWidget from "../components/widgets/bite-size-widget";
import EldersWidget from "../components/widgets/elders-series-widget";
import ContributorWidget from "../components/widgets/contributor-widget";
import VideoPoll1 from "../components/widgets/VideoPoll1";
import VideoPoll2 from "../components/widgets/VideoPoll2";



const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <HomeHero />
    <main>
      <div className="container">
        <BiteSizeWidget />
        <EldersWidget />
        </div>
        <div className="video-poll-container mb-5">
          <VideoPoll1 />
          <hr />
          <VideoPoll2 />
        </div>
        <div className="container">
        <div className="influencer-widget-container">
          <div className="influencer-widget-header text-center">
            <h1>Meet the influencers behind our values.</h1>
          </div>
          <ContributorWidget />
        </div>
      </div>
    </main>
    <Donate />
  </Layout>
)

export default IndexPage
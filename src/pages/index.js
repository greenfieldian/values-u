import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from "../components/layout"
import Seo from "../components/seo"
import Donate from "../components/donate";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Donate />
  </Layout>
)

export default IndexPage

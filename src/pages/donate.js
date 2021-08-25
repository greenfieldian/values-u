import * as React from 'react'
import DonorForm from '../components/donationForm/DonorForm'
import Hero from '../components/hero'
import Layout from '../components/layout'
import { Helmet } from 'react-helmet'

import './donate.css'

const DonatePage = () => (
    <Layout>
        <Helmet title="Help Us Grow | ValuesU" />
        <Hero title="Help Us Grow" description="Your contributions are crucial to our vital mission of spreading universal values and advancing social-cohesion, peace-building and solidarity throughout our global community."/>
        {/*<DonorForm />*/}
        <div className="donorbox-contain container"><script src="https://donorbox.org/widget.js" paypalExpress="false"></script><iframe src="https://donorbox.org/embed/donate-to-valuesu" name="donorbox" allowpaymentrequest="" seamless="seamless" frameborder="0" scrolling="no" height="600px" width="100%"></iframe></div>
    </Layout>
)

export default DonatePage
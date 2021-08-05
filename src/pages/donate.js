import * as React from 'react'
import DonorForm from '../components/donationForm/DonorForm'
import Hero from '../components/hero'
import Layout from '../components/layout'

const DonatePage = () => (
    <Layout>
        <Hero />
        <DonorForm />
    </Layout>
)

export default DonatePage
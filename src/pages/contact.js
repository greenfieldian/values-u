import * as React from 'react'
import Layout from '../components/layout'
import Hero from '../components/hero'
import Donate from '../components/donate'
import { Container, Form, Button } from 'react-bootstrap'
import { Helmet } from 'react-helmet'

import '../styles/contact.css'

const ContactPage = () => (
    <Layout>
        <Helmet title="Contact Us | ValuesU" />
        <Hero title="Contact Us" description="Have any questions, feeling inspired and want to get involved, or simply want to provide some feedback? Contact us through our online submission form - we would love to hear from you."/>
        <Container className="contact-form-container">
            <div>
                <Form name="contact" method="post" data-netlify="true">
                        <Form.Control type="hidden" name="form-name" value="contact"/>
                    <Form.Group controlId="formFile" className="mb-3 form-item-flex">
                        <Form.Label for="firstName">First Name</Form.Label>
                        <Form.Control type="text" name="firstName"/>
                    </Form.Group>
                    <Form.Group controlId="formFile" className="mb-3 form-item-flex">
                        <Form.Label for="lastName">Last Name</Form.Label>
                        <Form.Control type="text" name="lastName"/>
                    </Form.Group>
                    <Form.Group controlId="formFile" className="mb-3 form-item-flex">
                        <Form.Label for="phone">Phone</Form.Label>
                        <Form.Control type="tel" name="phone"/>
                    </Form.Group>
                    <Form.Group controlId="formFile" className="mb-3 form-item-flex">
                        <Form.Label for="email">Email</Form.Label>
                        <Form.Control type="email" name="email"/>
                    </Form.Group>
                    <Form.Group className="contact-form-select">
                        <Form.Label for="subject">Subject</Form.Label>
                        <Form.Control type="text" name="subject"/>
                    </Form.Group>
                    <Form.Group controlId="formFile" className="mb-3 form-textarea">
                        <Form.Label for="message">Message</Form.Label>
                        <Form.Control type="textarea" as="textarea" rows={5} name="message"/>
                    </Form.Group>
                    <Button  type="submit" label="Submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </Container>
        <Donate />
    </Layout>
)

export default ContactPage
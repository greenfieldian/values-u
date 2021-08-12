import * as React from 'react'
import Layout from '../components/layout'
import Hero from '../components/hero'
import Donate from '../components/donate'
import { Container, Row, Form } from 'react-bootstrap'
import Button from '../components/reusable/button'

import '../styles/contact.css'

const ContactPage = () => (
    <Layout>
        <Hero title="Contact Us" description="Have any questions, feeling inspired and want to get involved, or simply want to provide some feedback? Contact us through our online submission form - we would love to hear from you."/>
        <Container className="contact-form-container">
            <div>
                <Form>
                    <Form.Group controlId="formFile" className="mb-3 form-item-flex">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group controlId="formFile" className="mb-3 form-item-flex">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group controlId="formFile" className="mb-3 form-item-flex">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="tel" />
                    </Form.Group>
                    <Form.Group controlId="formFile" className="mb-3 form-item-flex">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" />
                    </Form.Group>
                    <Form.Group className="contact-form-select">
                        <Form.Label>Subject</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option>General Inquiry</option>
                            <option>Donation Support</option>
                            <option>Media Inquiry</option>
                            <option>Tech Support</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group controlId="formFile" className="mb-3 form-textarea">
                        <Form.Label>Message</Form.Label>
                        <Form.Control type="textarea" as="textarea" rows={5}/>
                    </Form.Group>
                    <Button  type="submit" label="Submit">
                    </Button>
                </Form>
            </div>
        </Container>
        <Donate />
    </Layout>
)

export default ContactPage
import * as React from 'react'
import Layout from '../components/layout'
import Hero from '../components/hero'
import Donate from '../components/donate'
import { Container, Row, Form } from 'react-bootstrap'
import Button from '../components/reusable/button'

import '../styles/contact.css'

const ContactPage = () => (
    <Layout>
        <Hero />
        <Container>
            <Row>
                <Form>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="tel" />
                    </Form.Group>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Subject</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option>General Inquiry</option>
                            <option>Donation Support</option>
                            <option>Media Inquiry</option>
                            <option>Tech Support</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Message</Form.Label>
                        <Form.Control type="textarea" />
                    </Form.Group>
                    <Button  type="submit" label="Submit">
                    </Button>
                </Form>
            </Row>
        </Container>
        <Donate />
    </Layout>
)

export default ContactPage
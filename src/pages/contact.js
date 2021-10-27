import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import Layout from '../components/layout'
import Hero from '../components/hero'
import Donate from '../components/donate'
import { Container, Form, Button } from 'react-bootstrap'
import { Helmet } from 'react-helmet'

import '../styles/contact.css'

const ContactPage = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    const submit = () => {
        if (firstName && lastName && phone && email && subject && message) {
           
            const serviceId = 'service_77o5grq';
            const templateId = 'template_shol8am';
            const userId = 'user_uT8J1cawfPnNi6z605J7V';
            const templateParams = {
                firstName,
                lastName,
                message
            };

            emailjs.send(serviceId, templateId, templateParams, userId)
                .then(response => console.log(response))
                .then(error => console.log(error));
    
            setFirstName('');
            setLastName('');
            setPhone('');
            setEmail('');
            setSubject('');
            setMessage('');
            setEmailSent(true);
        } else {
            alert('Please fill in all fields.');
        }
    }
    

    return (
    <Layout>
        <Helmet title="Contact Us | ValuesU" />
        <Hero title="Contact Us" description="Have any questions, feeling inspired and want to get involved, or simply want to provide some feedback? Contact us through our online submission form - we would love to hear from you."/>
        <Container className="contact-form-container">
            <div>
                <Form>
                    <Form.Group controlId="formFile" className="mb-3 form-item-flex">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" value={firstName} onChange={e => setFirstName(e.target.value)}/>
                    </Form.Group>
                    <Form.Group controlId="formFile" className="mb-3 form-item-flex">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" value={lastName} onChange={e => setLastName(e.target.value)}/>
                    </Form.Group>
                    <Form.Group controlId="formFile" className="mb-3 form-item-flex">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="tel" value={phone} onChange={e => setPhone(e.target.value)}/>
                    </Form.Group>
                    <Form.Group controlId="formFile" className="mb-3 form-item-flex">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" value={email} onChange={e => setEmail(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="contact-form-select">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control type="text" value={subject} onChange={e => setSubject(e.target.value)}/>
                    </Form.Group>
                    <Form.Group controlId="formFile" className="mb-3 form-textarea">
                        <Form.Label>Message</Form.Label>
                        <Form.Control type="textarea" as="textarea" rows={5} value={message} onChange={e => setMessage(e.target.value)}/>
                    </Form.Group>
                    <Button  type="submit"  onClick={submit}>
                        Submit
                    </Button>
                    <span className={emailSent ? 'visible' : null}>Thank you for your message, we will be in touch in no time!</span>
                </Form>
            </div>
        </Container>
        <Donate />
    </Layout>
    )
}

export default ContactPage
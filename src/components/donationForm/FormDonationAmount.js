import * as React from 'react';
import { Button, Form } from 'react-bootstrap';

const FormDonationAmount = () => (
    <Form>
        <div>
            <Form.Group>
                <Form.Check
                    inline
                    label="One Time"
                    name="group1"
                    type="radio"
                />
            </Form.Group>
            <Form.Group>
                <Form.Check
                    inline
                    label="Monthly"
                    name="group1"
                    type="radio"
                />
            </Form.Group>
            <Form.Group>
                <Form.Check
                    inline
                    label="Annually"
                    name="group1"
                    type="radio"
                />
            </Form.Group>
        </div>
        <div>
            <Button>$10</Button>
            <Button>$20</Button>
            <Button>$50</Button>
            <Button>$100</Button>
            <Button>Custom</Button>
        </div>
        <div>
            <div>
                <span></span>
                <label>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Control type="text" />
                    </Form.Group>
                </label>
            </div>
            <Button>Continue</Button>
        </div>
    </Form>
)

export default FormDonationAmount
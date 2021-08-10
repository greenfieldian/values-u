import * as React from 'react';
import { Container, Form } from 'react-bootstrap';
import Button from '../reusable/button';

import './donorform.css'

const FormDonationAmount = () => (
<Container>
    <Form>
        <div className="form-body">
            <div className="form-section">
                <h2></h2>
                <div>
                    <div>
                        <label></label>
                        <div className="options">
                            <div className="field-radio">
                                <label>
                                    <i></i>
                                    <span>One Time</span>
                                </label>
                            </div>
                            <div className="field-radio">
                                <label>
                                    <i></i>
                                    <span>Monthly</span>
                                </label>
                            </div>
                            <div className="field-radio">
                                <label>
                                    <i></i>
                                    <span>Annually</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="form-section">
                <h2></h2>
                <div>
                    <label></label>
                    <div>
                        <div className="freq group d-flex flex-wrap justify-content-between">
                            <div className="bubble-align">
                                <div className="bubble">
                                    <span>
                                        <span className="prefix">$</span>
                                        <var>10</var>
                                    </span>
                                </div>
                            </div>
                            <div className="bubble-align">
                                <div className="bubble">
                                    <span>
                                        <span className="prefix">$</span>
                                        <var>20</var>
                                    </span>
                                </div>
                            </div>
                            <div className="bubble-align">
                                <div className="bubble">
                                    <span>
                                        <span className="prefix">$</span>
                                        <var>50</var>
                                    </span>
                                </div>
                            </div>
                            <div className="bubble-align other">
                                <div className="bubble other">
                                    <span>
                                        <span className="prefix">$</span>
                                        <input placeholder="Other"></input>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <label className='label'>Cover the transaction fee</label>
                    </div>
                    <label>
                        <input type='checkbox'></input>
                        <span>
                            <var className="amount">$4.36</var>
                            <var>once</var>
                        </span>
                    </label>
                    <small>
                        <p>Paying the Stripe transaction fee, while not required, directs more money in support of our mission.</p>
                    </small>
                </div>
            </div>
            <div className='form-section no-border first'>
                <div className='fields row'>
                    <div className="form-group col-6">
                        <label className="label">First Name</label>
                        <input className='form-control' type='text'></input>
                    </div>
                    <div className="form-group col-6">
                        <label className="label">Last Name</label>
                        <input className='form-control' type='text'></input>
                    </div>
                </div>
            </div>
            <div className="form-section no-border">
                <div className="fields">
                    <div className="row form-group">
                        <div className='field col-12'>
                            <label className="label">Address</label>
                            <input className='form-control' type='text'></input>
                        </div>
                    </div>
                    <div className='row form-group'>
                        <div className='field col-4'>
                            <div className='field'>
                                <label className="label">City</label>
                                <input className='form-control' type='text'></input>
                            </div>
                        </div>
                        <div className='field col-2'>
                            <div className='field'>
                                <label className="label">State</label>
                                <input className='form-control' type='text'></input>
                            </div>
                        </div>
                        <div className='field col-3'>
                            <div className='field'>
                                <label className="label">Zip/Postal Code</label>
                                <input className='form-control' type='text'></input>
                            </div>
                        </div>
                        <div className='field col-3'>
                            <div className='field'>
                                <label className="label">Country (If Not US)</label>
                                <input className='form-control' type='text'></input>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='form-footer text-center'>
            <div>
                <div className='outer-section'>
                    <div className="form-section form-info no-border">
                        <Button label="Continue to Payment"/>
                    </div>
                </div>
                <div className='form-footnote'>
                    <div>
                        <p>Contributions or gifts to ValuesU are tax deductible.</p>
                    </div>
                </div>
            </div>
        </div>
    </Form>
</Container>
)

export default FormDonationAmount
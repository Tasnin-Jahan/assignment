import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { Button, Form } from 'react-bootstrap';

const Footer = () => {
    return (
        <>

            <div>

                <footer style={{ backgroundColor: 'rgba(47,48,47,255)', color: 'white', height: '550px', width: '1550px', paddingLeft: '250px', paddingRight: '40px' }} className="text-center text-lg-start mt-xl-5 pt-4">

                    <div style={{ marginTop: '150px' }} className="p-4">

                        <div className="row">

                            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                                <h5 className="text-uppercase mb-4">About</h5>

                                <ul className="list-unstyled mb-4">
                                    <li>
                                        History
                                    </li>
                                    <li>
                                        Our Team
                                    </li>
                                    <li>
                                        Brand Guidelines
                                    </li>
                                    <li>
                                        Terms and conditions
                                    </li>
                                    <li>
                                        Privacy Ploicy
                                    </li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                                <h5 className="text-uppercase mb-4">Services</h5>

                                <ul className="list-unstyled">
                                    <li>
                                        How to Order
                                    </li>
                                    <li>
                                        Our Order
                                    </li>
                                    <li>
                                        Order Status
                                    </li>
                                    <li>
                                        Promo
                                    </li>
                                    <li>
                                        Payment Method
                                    </li>
                                </ul>
                            </div>


                            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0 text-lg-end">
                                <h5 className="text-uppercase mb-4">Title Here</h5>
                                <p>Lorem ipsum dolor sit amet</p>
                                <div style={{ backgroundColor: 'rgba(233, 173, 0, 255)', borderRadius: '0px' }} className="form-outline mb-4">
                                    <Form className="d-flex">
                                        <Form.Control style={{ backgroundColor: 'rgba(233, 173, 0, 255)', border: '0' }}
                                            type="mail"
                                            placeholder=""
                                            aria-label=""
                                        />
                                        <Button style={{ borderRadius: '0px' }} variant="info"><FontAwesomeIcon icon={faPaperPlane} /></Button>
                                    </Form>

                                </div>
                            </div>



                        </div>

                    </div>
                </footer>

            </div>
        </>
    );
};

export default Footer;
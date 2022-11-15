import React from 'react';
import { Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Col } from 'react-bootstrap/esm';
import image from '../images/img-1.png';

const AboutOne = () => {
    return (
        <div>
            <Row className="d-flex align-items-center" style={{ backgroundColor: 'rgba(255,196,0,255)', weidth: '1550px', height: '550px', color: 'white' }}>
                <Col style={{ paddingLeft: '60px', paddingRight: '3px', paddingTop: '30px' }}>
                    <h2 style={{ marginRight: '3px', paddingTop: '30px', paddingBottom: '4px' }}>About Us</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur
                        adipisicing elit. Quidem aliquid, earum quis
                        est doloremque harum explicabo nisi veniam
                        odit obcaecati minima officia quod voluptas
                        incidunt, error dolores distinctio,
                        rem numquam!</p>
                    <Button style={{ marginRight: '20px' }} variant="outline-info" size="lg" active>
                        Contact Us
                    </Button>
                    <Button variant="outline-info" size="lg" active>
                        Our Service
                    </Button>
                </Col>
                <Col>
                    <img style={{ paddingTop: '25px' }} className="img-fluid" width="300px" height="200px" src={image} alt="" />
                </Col>
            </Row>
        </div>
    );
};

export default AboutOne;
import React from 'react';
import { Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Col } from 'react-bootstrap/esm';
import img2 from '../images/img-2.png';

const Hometwo = () => {
    return (
        <div>
            <Row className="d-flex align-items-center mx-auto" style={{ height: '550px', color: 'black' }}>
                <Col style={{ paddingLeft: '60px', paddingRight: '3px', paddingTop: '30px' }}>
                    <h2 style={{ marginRight: '3px', paddingTop: '30px', paddingBottom: '4px' }}>As a vaterinarian and lover of animals</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur
                        adipisicing elit. Quidem aliquid, earum quis
                        est doloremque harum explicabo nisi veniam
                        odit obcaecati minima officia quod voluptas
                        incidunt, error dolores distinctio,
                        rem numquam!</p>
                    <Button style={{ backgroundColor: 'rgba(255,196,0,255', border: 'none' }} size="lg" active>
                        Our Service
                    </Button>
                </Col>
                <Col>
                    <img style={{ paddingTop: '25px' }} className="img-fluid" width="300px" height="200px" src={img2} alt="" />
                </Col>
            </Row>
        </div>

    );
};

export default Hometwo;
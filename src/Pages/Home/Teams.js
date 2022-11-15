import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './Home.css';
import img1 from '../images/img-6.png';
import img2 from '../images/img-7.png';
import img3 from '../images/img-8.png';
import img4 from '../images/Instagram.png';
import img5 from '../images/Facebook.png';
import img6 from '../images/Twitter.png';
import img7 from '../images/WhatsApp.png';


const Teams = () => {
    return (
        <>
            <Row style={{ marginBottom: '60px', marginTop: '40px' }} className="g-4 me-3 ms-3 ">
                <h1 style={{ color: 'rgba(44,46,66,255)', marginTop: '90px', marginBottom: '0px' }}>The Vetcare Team</h1>
                <h4 style={{ color: 'rgba(44,46,66,255)' }}>Lorem ipsum dolor sit amet consectetur,<br />
                    adipisicing elit.
                </h4>
                <Col className='title-col'>
                    <Card className='d-flex align-items-center' style={{ border: '0px', paddingTop: '60px', paddingLeft: '80px' }}>
                        <Card.Img style={{ width: '250px', height: '250px' }} variant="top" src={img1} />
                        <Card.Body style={{ color: 'rgba(44,46,66,255)' }}>
                            <Card.Title>Jennifer Mullen</Card.Title>
                            <Card.Text>
                                Veterinary
                            </Card.Text>
                            <p style={{ width: '20px', height: '20px', display: 'inline' }}>
                                <img style={{ backgroundColor: 'rgba(255, 196, 0, 255)', width: '20px', height: '20px', marginRight: '15px' }} src={img4} alt="" />
                                <img style={{ backgroundColor: 'rgba(255, 196, 0, 255)', width: '20px', height: '20px', marginRight: '15px' }} src={img5} alt="" />
                                <img style={{ backgroundColor: 'rgba(255, 196, 0, 255)', width: '20px', height: '20px', marginRight: '15px' }} src={img6} alt="" />
                                <img style={{ backgroundColor: 'rgba(255, 196, 0, 255)', width: '20px', height: '20px', marginRight: '15px' }} src={img7} alt="" />
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='title-col'>
                    <Card className='d-flex align-items-center' style={{ border: '0px', paddingTop: '60px', paddingLeft: '40px', paddingRight: '40px' }}>
                        <Card.Img style={{ width: '250px', height: '250px' }} variant="top" src={img2} />
                        <Card.Body style={{ color: 'rgba(44,46,66,255)' }}>
                            <Card.Title>Sherin Collins</Card.Title>
                            <Card.Text>
                                Administration
                            </Card.Text>
                            <p style={{ width: '20px', height: '20px', display: 'inline' }}>
                                <img style={{ backgroundColor: 'rgba(255, 196, 0, 255)', width: '20px', height: '20px', marginRight: '15px' }} src={img4} alt="" />
                                <img style={{ backgroundColor: 'rgba(255, 196, 0, 255)', width: '20px', height: '20px', marginRight: '15px' }} src={img5} alt="" />
                                <img style={{ backgroundColor: 'rgba(255, 196, 0, 255)', width: '20px', height: '20px', marginRight: '15px' }} src={img6} alt="" />
                                <img style={{ backgroundColor: 'rgba(255, 196, 0, 255)', width: '20px', height: '20px', marginRight: '15px' }} src={img7} alt="" />
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='title-col'>
                    <Card className='d-flex align-items-center' style={{ border: '0px', paddingTop: '60px', paddingRight: '80px' }}>
                        <Card.Img style={{ width: '250px', height: '250px' }} variant="top" src={img3} />
                        <Card.Body style={{ color: 'rgba(44,46,66,255)' }}>
                            <Card.Title>Jennifer Mullen</Card.Title>
                            <Card.Text>
                                Veterinary
                            </Card.Text>
                            <p style={{ width: '20px', height: '20px', display: 'inline' }}>
                                <img style={{ backgroundColor: 'rgba(255, 196, 0, 255)', width: '20px', height: '20px', marginRight: '15px' }} src={img4} alt="" />
                                <img style={{ backgroundColor: 'rgba(255, 196, 0, 255)', width: '20px', height: '20px', marginRight: '15px' }} src={img5} alt="" />
                                <img style={{ backgroundColor: 'rgba(255, 196, 0, 255)', width: '20px', height: '20px', marginRight: '15px' }} src={img6} alt="" />
                                <img style={{ backgroundColor: 'rgba(255, 196, 0, 255)', width: '20px', height: '20px', marginRight: '15px' }} src={img7} alt="" />
                            </p>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </>
    );
};

export default Teams;
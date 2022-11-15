import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import img1 from '../images/img-9.png';
import img2 from '../images/img-10.png';
import img3 from '../images/img-11.png';
import '../Home/Home.css';

const BlogsTwo = () => {
    return (
        <>
            <Row className="g-4 me-3 ms-3 ">
                <h1 style={{ color: 'rgba(44,46,66,255)', marginTop: '90px', marginBottom: '0px' }}>Latest Blogs</h1>
                <h4 style={{ color: 'rgba(44,46,66,255)' }}>Lorem ipsum dolor sit amet consectetur,<br />
                    adipisicing elit.
                </h4>
                <Col className='title-col'>
                    <Card className='d-flex align-items-center' style={{ paddingTop: '60px', paddingLeft: '50px', border: '0' }}>
                        <Card.Img style={{ width: '250px', height: '250px' }} variant="top" src={img1} />
                        <Card.Body style={{ color: 'rgba(44,46,66,255)', width: '250px', height: '200px', border: '.1px solid rgba(214,214,214,255)', borderTop: 'none' }}>
                            <Card.Title>As A Veterinarian and <br />
                                lover of animals</Card.Title>
                            <Card.Text>
                                <small style={{ color: 'rgba(24,206,215,255)' }}>February 09, 2020</small> <br />
                                <small>Lorem ipsum dolor sit amet consectetur adipisicing elit.</small> <br />
                                <p style={{ color: 'rgba(24,206,215,255)' }}> Read More+</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='title-col'>
                    <Card className='d-flex align-items-center' style={{ border: '0px', paddingTop: '60px', paddingLeft: '40px', paddingRight: '40px', width: '330px', height: '380px' }}>
                        <Card.Img style={{ width: '250px', height: '250px' }} variant="top" src={img2} />
                        <Card.Body style={{ color: 'rgba(44,46,66,255)' }}>
                            <Card.Title>As A Veterinarian and <br />
                                lover of animals</Card.Title>
                            <Card.Text>
                                <small style={{ color: 'rgba(24,206,215,255)' }}>February 09, 2020</small> <br />
                                <small>Lorem ipsum dolor sit amet consectetur adipisicing elit.</small> <br />
                                <p style={{ color: 'rgba(24,206,215,255)' }}> Read More+</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='title-col'>
                    <Card className='d-flex align-items-center' style={{ border: '0px', paddingTop: '60px', paddingRight: '80px', width: '330px', height: '380px' }}>
                        <Card.Img style={{ width: '250px', height: '250px' }} variant="top" src={img3} />
                        <Card.Body style={{ color: 'rgba(44,46,66,255)', border: '.1px solid rgba(214,214,214,255)', borderTop: 'none' }}>
                            <Card.Title>As A Veterinarian and <br />
                                lover of animals</Card.Title>
                            <Card.Text>
                                <small style={{ color: 'rgba(24,206,215,255)' }}>February 09, 2020</small> <br />
                                <small>Lorem ipsum dolor sit amet consectetur adipisicing elit.</small> <br />
                                <p style={{ color: 'rgba(24,206,215,255)' }}> Read More+</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </>
    );
};

export default BlogsTwo;
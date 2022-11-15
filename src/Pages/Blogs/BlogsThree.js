import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../Home/Home.css';
import img1 from '../images/dog-1.png';
import img2 from '../images/dog-2.png';
import img3 from '../images/dog-3.png';


const BlogsThree = () => {
    return (
        <>
            <Row style={{ width: '1550px', marginTop: '30px' }} className="g-4 me-3 ms-3 title-row">
                <h2 style={{ color: 'white', marginBottom: '2px', paddingTop: '30px' }}>Title Here</h2>
                <h4 style={{ color: 'white' }}>Lorem ipsum dolor sit amet consectetur,<br />
                    adipisicing elit.
                </h4>
                <Col className='title-col'>
                    <Card className='d-flex align-items-center' style={{ backgroundColor: 'rgba(255, 196, 0, 255)', border: '0px', paddingTop: '60px', paddingLeft: '80px', marginBottom: '80px' }}>
                        <Card.Img style={{ width: '200px', height: '200px' }} variant="top" src={img1} />
                        <Card.Body style={{ color: 'white' }}>
                            <Card.Title>30$</Card.Title>
                            <Button as="input" type="Buy Now" value="Buy Now" />{' '}
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='title-col'>
                    <Card className='d-flex align-items-center' style={{ backgroundColor: 'rgba(255, 196, 0, 255)', border: '0px', paddingTop: '60px', paddingLeft: '40px', paddingRight: '40px' }}>
                        <Card.Img style={{ width: '200px', height: '200px' }} variant="top" src={img2} />
                        <Card.Body style={{ color: 'white' }}>
                            <Card.Title>25$</Card.Title>
                            <Button as="input" type="Buy Now" value="Buy Now" />{' '}
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='title-col'>
                    <Card className='d-flex align-items-center' style={{ backgroundColor: 'rgba(255, 196, 0, 255)', border: '0px', paddingTop: '60px', paddingRight: '80px' }}>
                        <Card.Img style={{ width: '200px', height: '200px' }} variant="top" src={img3} />
                        <Card.Body style={{ color: 'white' }}>
                            <Card.Title>20$</Card.Title>
                            <Button as="input" type="Buy Now" value="Buy Now" />{' '}
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </>
    );
};

export default BlogsThree;
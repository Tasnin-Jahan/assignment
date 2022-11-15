import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPaw } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <Navbar style={{ backgroundColor: 'rgba(233, 173, 0, 255)', alignContent: 'center', paddingLeft: '90px', paddingRight: '90px' }} expand="lg">
            <Container fluid>
                <Navbar.Brand style={{ color: 'white' }} href="#"><FontAwesomeIcon className='pe-3' icon={faPaw} />Company Logo</Navbar.Brand>
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link as={Link} to="/home"> <h3 style={{ paddingLeft: '20px', color: 'white' }}>Home</h3></Nav.Link>
                    <Nav.Link as={Link} to="/about"> <h3 style={{ paddingLeft: '20px', color: 'white' }}>About</h3></Nav.Link>
                    <Nav.Link as={Link} to="/blogs"> <h3 style={{ paddingLeft: '20px', color: 'white' }}>Blogs</h3></Nav.Link>
                    <Nav.Link> <h3 style={{ paddingLeft: '20px', color: 'white' }}>Contacts</h3></Nav.Link>
                </Nav>
                <Form className="d-flex">
                    <Form.Control style={{ backgroundColor: 'rgba(233, 173, 0, 255)', borderRadius: '0px' }}
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                    />
                    <Button style={{ borderRadius: '0px' }} variant="info"><FontAwesomeIcon icon={faSearch} /></Button>
                </Form>
            </Container>
        </Navbar>
    );
}

export default Navigation;
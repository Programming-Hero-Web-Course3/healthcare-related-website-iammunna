import React from 'react';
import { Button, Card, Navbar, Container, Nav, Form, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faClinicMedical } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <header>
                <Card className=" mb-2">
                    <Card.Header>
                        <small className="text-muted"><FontAwesomeIcon icon={faCalendarAlt} /> Opening Hours: Saturday to  Monday- 7am to 11pm </small>
                        <br />
                    </Card.Header>
                </Card>
                <Navbar bg="success" expand="lg">
                    <Container fluid>
                        <Navbar.Brand as={Link} to="/home"> <Button variant="success" className="text-light"><FontAwesomeIcon icon={faClinicMedical} /> MediFill</Button> </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-4 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link as={Link} to="/home"><Button variant="outline-light">Home</Button></Nav.Link>
                                <Nav.Link as={Link} to="/about"><Button variant="outline-light">About Us</Button></Nav.Link>
                                <Nav.Link as={Link} to="/services"><Button variant="outline-light">Services</Button></Nav.Link>
                                <Nav.Link as={Link} to="/contact"><Button variant="outline-light">Contact Us</Button></Nav.Link>
                            </Nav>
                            <Link to="/signup"><button className="btn btn-outline-light">SignUp</button></Link>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </header>
        </div>
    );
};

export default Header;
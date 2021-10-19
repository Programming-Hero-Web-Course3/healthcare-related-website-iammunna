import React from 'react';
import { Button, Card, Navbar, Container, Nav, Form, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faClinicMedical } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <div>
            <header>
                <Card className="  mb-2">
                    <Card.Header>
                        <small className="text-muted"><FontAwesomeIcon icon={faCalendarAlt} /> Opening Hours:Saturday to  Monday- 7am to 11pm </small>
                        <br />
                    </Card.Header>
                </Card>
                <Navbar bg="success" expand="lg">
                    <Container fluid>
                        <Navbar.Brand href="#"> <Button variant="success" className="text-light"><FontAwesomeIcon icon={faClinicMedical} /> MediFill</Button> </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link href="#action2"><Button variant="outline-light">Home</Button></Nav.Link>
                                <Nav.Link href="#action2"><Button variant="outline-light">About Us</Button></Nav.Link>
                                <Nav.Link href="#action2"><Button variant="outline-light">Services</Button></Nav.Link>
                                <Nav.Link href="#action2"><Button variant="outline-light">Contact Us</Button></Nav.Link>
                            </Nav>
                            <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-light">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </header>
        </div>
    );
};

export default Header;
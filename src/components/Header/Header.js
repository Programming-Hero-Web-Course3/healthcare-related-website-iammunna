import React from 'react';
import { Button, Card, Navbar, Container, Nav, Form, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faClinicMedical } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();

    return (
        <>
            <header collapseOnSelect expand="lg">
                <Card className=" mb-2">
                    <Card.Header>
                        <small className="text-muted"><FontAwesomeIcon icon={faCalendarAlt} /> Opening Hours: Saturday to  Monday- 7am to 11pm </small>
                        <br />
                    </Card.Header>
                </Card>
                <Navbar bg="success" expand="lg" >
                    <Container fluid>
                        <Navbar.Brand as={Link} to="/home"> <Button variant="success" className="text-light"><FontAwesomeIcon icon={faClinicMedical} /> MediFill</Button> </Navbar.Brand>
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-4 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link as={Link} to="/home"><Button href="#home" variant="outline-light">Home</Button></Nav.Link>
                                <Nav.Link as={Link} to="/about"><Button variant="outline-light">About Us</Button></Nav.Link>
                                <Nav.Link as={Link} to="/services"><Button variant="outline-light">Services</Button></Nav.Link>
                                <Nav.Link as={Link} to="/contact"><Button variant="outline-light">Contact Us</Button></Nav.Link>
                            </Nav>

                            <Navbar.Collapse className="justify-content-end ">
                                <Navbar.Toggle />
                                <Navbar.Collapse className="justify-content-end me-2">

                                    {user?.email ?
                                        <span>
                                            <Link as={Link} to="/login" className="pe-3">
                                                <button onClick={logOut} className="btn btn-outline-light">Logout</button>
                                            </Link>

                                            <Navbar.Text className="text-light">
                                                Hello: <a href="#login">{user?.displayName}</a>

                                            </Navbar.Text>

                                        </span> :

                                        <span>
                                            <Link as={Link} to="/login" className="pe-3">
                                                <button className="btn btn-outline-light">LogIn</button>
                                            </Link>
                                            <Link as={Link} to="/signup">
                                                <button className="btn btn-outline-light ms-2">SignUp</button>
                                            </Link>
                                        </span>
                                    }
                                </Navbar.Collapse>
                            </Navbar.Collapse>



                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </header>
        </>
    );
};

export default Header;
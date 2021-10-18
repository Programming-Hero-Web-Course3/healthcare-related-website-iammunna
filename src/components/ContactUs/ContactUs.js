import React from 'react';
import formImg from '../../Media/Images/Doctors/doc4.png'
import { Form, Row, Col, Button, Container, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faEnvelopeOpenText, faClock, faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons'

const ContactUs = () => {
    return (
        <div style={{ margin: "80px 0" }} >

            <Container className="border border-success rounded-3 border-2 d-flex justify-content-center mx-auto">

                {/* <img className="mb-3 mt-5" src={formImg} /> */}
                <div className="d-flex align-items-center p-4">
                    <div className="w-100">
                        <Form className="mb-3 " >
                            <h2 className="text-success m-2">APPOINTMENT</h2>
                            <p className="m-2">An appointment is a formal date or plan to meet at the appointed time.</p>
                            <Row className="mb-3 mt-4">
                                <Form.Group as={Col} md="4" controlId="validationCustom01">
                                    <Form.Label>First name</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Md Munna"

                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="4" controlId="validationCustom02">
                                    <Form.Label>Last name</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Sarker"

                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                            </Row>

                            <Row className="mb-3">
                                <Form.Group as={Col} md="4" controlId="validationCustom01">
                                    <Form.Label> <FontAwesomeIcon icon={faPhoneSquareAlt} /> Phone no.</Form.Label>
                                    <Form.Control
                                        required
                                        type="values.number"
                                        placeholder="+8801"

                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="4" controlId="validationCustom02">
                                    <Form.Label> <FontAwesomeIcon icon={faCalendarAlt} /> Pick a date</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Date"

                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                            </Row>

                            <Row className="mb-3">
                                <Form.Group as={Col} md="4" controlId="validationCustom01">
                                    <Form.Label> <FontAwesomeIcon icon={faEnvelopeOpenText} /> Email</Form.Label>
                                    <Form.Control
                                        required
                                        type="values.email"
                                        placeholder="Email"

                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="4" controlId="validationCustom02">
                                    <Form.Label> <FontAwesomeIcon icon={faClock} /> Choose time</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Time"

                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Button variant="outline-success" type="submit">Submit form</Button>
                        </Form>
                    </div>
                    <div className="w-100">
                        <img className="mb-3 mt-5 img-fluid" src={formImg} />
                    </div>
                </div>
            </Container>
        </div >
    );
};

export default ContactUs;
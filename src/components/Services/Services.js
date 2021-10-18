
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react';
import { Card, Container, Row } from 'react-bootstrap';
import ServiceData from '../ServiceData/ServiceData';


const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setServices(data));

    }, [])
    return (
        <div style={{ marginTop: "50px" }}>
            <Container className="text-center">
                <h1 className="text-center mt-5">Servi<span className="text-success">ces</span> </h1>
                <div className="d-flex justify-content-center">
                    <hr className="border boder-3 border-success" />
                    <FontAwesomeIcon icon={faBriefcase} />
                    <hr className="border boder-3 border-success" />
                </div>

                <img src="" alt="" />
                <div className="m-5">
                    <h2>WELCOME TO OUR <span className="text-success">MEDICAL</span> </h2>
                    <p>Medical services means medical, surgical, dental, x-ray, ambulance, hospital, professional nursing, and funeral services, and includes the cost of eyeglasses, hearing aids, pharmaceuticals, orthopedics, and prosthetic devices.</p>
                </div>
                <Row xs={1} md={3} className="g-4">
                    {
                        services.map(service => <ServiceData service={service}></ServiceData>)
                    }
                </Row>
            </Container>
        </div >
    );
};

export default Services;
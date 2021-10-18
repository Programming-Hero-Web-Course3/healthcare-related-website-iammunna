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
            <Container>
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
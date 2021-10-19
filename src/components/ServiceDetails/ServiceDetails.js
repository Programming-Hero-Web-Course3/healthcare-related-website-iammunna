import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const ServiceDetails = () => {
    const { serviceId } = useParams();

    const [servicesDetails, setServicesDetails] = useState([]);
    const [singleService, setSingleService] = useState({});

    useEffect(() => {
        fetch("/data.json")
            .then((res) => res.json())
            .then((data) => setServicesDetails(data));
    }, []);

    useEffect(() => {
        const findService = servicesDetails.find(
            (service) => service.id === serviceId
        );
        setSingleService(findService);
    }, [servicesDetails]);


    return (
        <div className="container">
            <div class="card h-100">
                <img src={singleService?.img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{singleService?.name}</h5>
                    <p class="card-text">{singleService?.description}</p>
                </div>
            </div>
        </div>

    );
};

export default ServiceDetails;


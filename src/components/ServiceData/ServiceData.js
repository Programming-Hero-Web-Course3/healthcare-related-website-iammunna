import React from 'react';
import { Card, Button, } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const ServiceData = (props) => {
    const { id, name, img, description } = props.service;
    return (

        <div class="col">
            <div class="card h-100">
                <img src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">{description}</p>

                    <Link to={`/service/${id}`}>
                        <Button variant="outline-success border-2"> <span>Book {name}</span>  <Button variant="success"><FontAwesomeIcon icon={faArrowAltCircleRight} /></Button></Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceData;
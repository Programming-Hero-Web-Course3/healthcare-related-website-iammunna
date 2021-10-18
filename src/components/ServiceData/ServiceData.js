import React from 'react';
import { Card, Button, } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'

const ServiceData = (props) => {
    const { id, name, img, description } = props.service;
    return (
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
                <div class="card h-100">
                    <img src={img} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title ms-5">{name}</h5>
                        <p class="card-text">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceData;
import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import slider1 from '../../Media/Images/Cover/doc looking2.png'
import slider2 from '../../Media/Images/Cover/operation3.jpg'
import slider3 from '../../Media/Images/Cover/counseling2.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'



const HomePage = () => {
    return (
        <div>
            <Carousel variant="dark" fade style={{ margin: "20px" }}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h5>First slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        <Button variant="outline-dark"> <span> Our Services</span>  <Button variant="dark"><FontAwesomeIcon icon={faArrowAltCircleRight} /></Button></Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h5>Second slide label</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <Button variant="outline-dark"> <span className="text-light"> Contact US Now</span>  <Button variant="dark"><FontAwesomeIcon icon={faArrowAltCircleRight} /></Button></Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h5>Third slide label</h5>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        <Button variant="outline-dark"> <span className="text-light"> About Us</span>  <Button variant="dark"><FontAwesomeIcon icon={faArrowAltCircleRight} /></Button></Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <hr /><hr />
            <h1>i am HomPage</h1>
        </div>
    );
};

export default HomePage;
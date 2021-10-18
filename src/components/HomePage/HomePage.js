import React from 'react';
import { Carousel, Button, Form, Row } from 'react-bootstrap';
import slider1 from '../../Media/Images/Cover/doc looking2.png'
import slider2 from '../../Media/Images/Cover/operation3.jpg'
import slider3 from '../../Media/Images/Cover/counseling2.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter } from 'react-router-dom';



const HomePage = () => {
    return (
        <div>
            <Carousel variant="dark" fade style={{ margin: "20px 0" }}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h5>Welcome to our <span className="text-success">Online Medical</span> services</h5>
                        <h2 className="">Your <span className="text-success">Health</span> Is Important to us</h2>
                        <p>The word health refers to a state of complete emotional and physical well-being. Healthcare exists to help people maintain this optimal state of health.</p>
                        <Button variant="outline-success border-2"> <span>Our Services</span>  <Button variant="success"><FontAwesomeIcon icon={faArrowAltCircleRight} /></Button></Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h2> Thinking of <span className="text-success">taking</span> services of ours<span className="text-success">?</span></h2>
                        <p>Medical services means medical, surgical, dental, x-ray, ambulance, hospital, professional nursing, and funeral services, and includes the cost of eyeglasses, hearing aids, pharmaceuticals, orthopedics, and prosthetic devices.</p>
                        <Button variant="outline-success border-2"> <span className="text-light"> Contact US Now</span>  <Button variant="success"><FontAwesomeIcon icon={faArrowAltCircleRight} /></Button></Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Our experienced <span className="text-success"> team </span> is ready to serve you</h3>
                        <p>We are proud to offer a wide range of comprehensive services to meet the needs of adults, seniors, and pediatric patients. Our team of professional caregivers specialize in providing personalized medical care, rehabilitative therapy and companion assistance.</p>
                        <Button variant="outline-success border-2"> <span className="text-light"> About Us</span>  <Button variant="success"><FontAwesomeIcon icon={faArrowAltCircleRight} /></Button></Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <BrowserRouter></BrowserRouter>
        </div>
    );
};

export default HomePage;
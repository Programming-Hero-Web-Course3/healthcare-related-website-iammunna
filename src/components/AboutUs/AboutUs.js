import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeartbeat } from '@fortawesome/free-solid-svg-icons'



const AboutUs = () => {
    return (
        <div>
            <h1>About <span className="text-success"> US</span> </h1>
            <div className="d-flex justify-content-center">
                <hr className="border boder-3 border-success" />
                <FontAwesomeIcon icon={faHeartbeat} />
                <hr className="border boder-3 border-success" />
            </div>
            <div>
                <img src="" alt="" />
                <div>
                    <h2>WELCOME TO OUR <span className="text-success">MEDICAL</span> </h2>
                    <p>Medical services means medical, surgical, dental, x-ray, ambulance, hospital, professional nursing, and funeral services, and includes the cost of eyeglasses, hearing aids, pharmaceuticals, orthopedics, and prosthetic devices.</p>
                    <div>
                        <FontAwesomeIcon icon={faHeartbeat} />
                        <h2> BEST MEDICINE</h2>
                        <p>Medicines are chemicals or compounds used to cure, halt, or prevent disease; ease symptoms; or help in the diagnosis of illnesses. Advances in medicines have enabled doctors to cure many diseases and save lives.
                        </p>
                        <FontAwesomeIcon icon={faHeartbeat} />
                        <h2> QUALIFIED DOCTORS</h2>
                        <p>Medicines are chemicals or compounds used to cure, halt, or prevent disease; ease symptoms; or help in the diagnosis of illnesses. Advances in medicines have enabled doctors to cure many diseases and save lives.
                        </p>
                        <FontAwesomeIcon icon={faHeartbeat} />
                        <h2> HEALTH CARE</h2>
                        <p>Medicines are chemicals or compounds used to cure, halt, or prevent disease; ease symptoms; or help in the diagnosis of illnesses. Advances in medicines have enabled doctors to cure many diseases and save lives.
                        </p>
                        <FontAwesomeIcon icon={faHeartbeat} />
                        <h2> BEST SERVICES</h2>
                        <p>Medicines are chemicals or compounds used to cure, halt, or prevent disease; ease symptoms; or help in the diagnosis of illnesses. Advances in medicines have enabled doctors to cure many diseases and save lives.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
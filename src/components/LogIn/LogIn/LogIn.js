import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { useHistory, useLocation } from "react-router-dom";

const LogIn = () => {
    const { signInUsingGoogle, handleEmailChange, handlePasswordChange, setIsLoading, processLogin, setError, email, password, handlePasswordReset } = useAuth();

    const history = useHistory();
    const location = useLocation();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
            .finally(() => setIsLoading(false))
    }

    const handleLogin = e => {
        e.preventDefault();
        setIsLoading(false);
        processLogin(email, password)
            .then(result => {
                const user = result.user;
                history.push(redirect_uri);
                setError('');
            })
            .catch(error => {

                const errorCode = error.code;
                if (errorCode === 'auth/wrong-password') {
                    setError('Wrong Password');

                } else {
                    setError("Incorrect Email or Password!")
                }
            })
    }

    return (
        <div className="w-50 mx-auto mt-5 border p-5">
            <Form onSubmit={handleLogin}>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Login
                </Button>
                <h6 onClick={handlePasswordReset} className="btn fw-bold text-secondary">Reset Password</h6>

            </Form>
            <Link as={Link} to="/login"><button onClick={handleGoogleLogin} className="btn btn-outline-success">Sign in with Google</button></Link>
        </div>
    );
};

export default LogIn;
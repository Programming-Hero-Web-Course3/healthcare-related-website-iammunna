import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { useHistory, useLocation } from "react-router-dom";

const SignUp = () => {
    const { error, signInUsingGoogle, handleNameChange, handleEmailChange, handlePasswordChange, handleConfirmPasswordChange, setIsLoading, setError, password, confirmPassword, email, createNewUser, setUserName, verifyEmail } = useAuth();

    const history = useHistory();
    const location = useLocation();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
            .finally(() => setIsLoading(false));
    }

    const handleSignUp = e => {
        e.preventDefault();

        const passwordValidation = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (!passwordValidation.test(password)) {
            setError('Password must be 8 character with letter & number combination');
            return;
        } else if (password !== confirmPassword) {
            setError("Password doesn't match!");
            return;
        }
        setIsLoading(false);
        createNewUser(email, password)
            .then(result => {
                const user = result.user;
                history.push(redirect_uri);
                setUserName();
                verifyEmail();
                setError('');
            })
            .catch(error => {
                const errorCode = error.code;
                if (errorCode === 'auth/email-already-in-use') {
                    setError('User already exists! Try with different Email');
                }
            });
    }

    return (

        <>
            <div className="w-50 mx-auto mt-5 border p-5">
                <Form onSubmit={handleSignUp}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control onBlur={handleNameChange} type="text" placeholder="Name" />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control onBlur={handleConfirmPasswordChange} type="password" placeholder="Confirm Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Sign Up
                    </Button>
                </Form>
                <Link as={Link} to="/login"><button onClick={handleGoogleLogin} className="btn btn-outline-success">Google Sign In</button></Link>
            </div>
        </>
    );
};

export default SignUp;
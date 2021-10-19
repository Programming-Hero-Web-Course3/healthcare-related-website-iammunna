import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, sendEmailVerification, sendPasswordResetEmail } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../components/LogIn/Firbase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();


    const signInUsingGoogle = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)

    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
            setIsLoading(false)
        })
        return () => unsubscribed;

    }, []);

    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false))
    }

    const handleNameChange = e => {
        setName(e.target.value);
    }


    const handleEmailChange = e => {
        setEmail(e.target.value);
    }


    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    const handleConfirmPasswordChange = e => {
        setConfirmPassword(e.target.value);
    }

    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const processLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                console.log(result)
            })
            .catch(error => setError(error.message))
    }

    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
            .catch(error => setError(error.message));
    }

    const handlePasswordReset = () => {
        sendPasswordResetEmail(auth, email)
            .then(result => {

                if (email !== '') {
                    setSuccess('Check Your Email to Reset Password')
                    setError('')
                }
            })
            .catch(error => {

                const errorCode = error.code;
                if (errorCode === 'auth/missing-email') {
                    setError('Please Complete Yor Email Field');
                    setSuccess('')
                } else {
                    setError("An unknown action or Email doesn't exist!");
                    setSuccess('')
                }
            })
    }


    return {
        user,
        email,
        password,
        confirmPassword,
        isLoading,
        error,
        success,
        signInUsingGoogle,
        logOut,
        handleNameChange,
        handleEmailChange,
        handlePasswordChange,
        handleConfirmPasswordChange,
        processLogin,
        setIsLoading,
        setError,
        setSuccess,
        createNewUser,
        setUserName,
        verifyEmail,
        handlePasswordReset
    }
}
export default useFirebase;
// Login.jsx
import React from 'react';
import { Offcanvas, Button } from 'react-bootstrap';
import { auth, googleProvider } from '../firebase'; // Importing auth and provider
import { signInWithPopup } from 'firebase/auth'; // Import signInWithPopup from firebase/auth
import { FcGoogle } from 'react-icons/fc';

const Login = ({ show, handleClose }) => {

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider); // Use signInWithPopup correctly
      console.log('User logged in:', result.user);
      handleClose();
    } catch (error) {
      console.error("Error logging in with Google: ", error.message);
    }
  };

  return (
    <Offcanvas show={show} onHide={handleClose} placement="end" style={{ maxWidth: '450px' }}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title className='text-center '>Welcome Back !!!</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <div className="text-center">
          <img
            src="/assets/images/header-logo.png"
            alt="Logo"
            style={{ maxWidth: '200px', marginBottom: '20px' }}
            loading="lazy"
          />
          <p
            style={{
              color: '#010101',
              backgroundColor: 'white',
              border: '1px solid #000000',
              padding: '15px',
              borderRadius: '5px',
              marginBottom: '20px',
            }}
          >
            Fashion at Your Fingertips: Explore, Shop, and Slay!
          </p>
          <h5 style={{ marginBottom: '15px' }}>Login/SignUp</h5>
          <p style={{ color: '#666464', marginBottom: '20px' }}>
            Sign in/up to access your account, track orders, and more.
          </p>
          <Button
            variant="outline"
            style={{ width: '100%' }}
            onClick={handleGoogleLogin}
            className='border-none'
          >
           <FcGoogle className='fs-2' /> Sign in with Google
          </Button>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Login;

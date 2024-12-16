// Login.jsx
import React from 'react';
import { Offcanvas, Button, Form } from 'react-bootstrap';
import { auth, googleProvider } from '../firebase'; // Importing auth and provider
import { signInWithPopup } from 'firebase/auth'; // Import signInWithPopup from firebase/auth
import { FcGoogle } from 'react-icons/fc';
import "../../styles/LoginCanva.css"


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
      <Offcanvas.Header closeButton className="custom-header web-bg-color">
        <Offcanvas.Title className='text-start '>Login</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <div className="text-center">
          <img
            src={require("../../assets/images/header-logo.png")}
            alt="Logo"
            style={{ maxWidth: '200px'}}
            loading="lazy"
            className='login-logo'
          />
          <h3 className="signin-heading">Login</h3>
          <p className="signin-description font-color-global">
            Enter your email ID or phone
            <p>number to sign in</p>
          </p>
          {/* Mobile Number Enter */}
          <Form.Group className="mb-3">
            <Form.Control
              type="number"
              placeholder="Enter your phone or email ID"
              maxLength="10"
              className="form-input"
            />
          </Form.Group>
          <button type="submit" className="btn-continue w-100">
            Proceed
          </button>
          {/* Horizontal line with text */}
          <div className="d-flex align-items-center my-3">
            <hr className="flex-grow-1" />
            <span className="mx-2 text-muted">Or sign in with</span>
            <hr className="flex-grow-1" />
          </div>

          {/* Social login buttons */}
          <div className="social-login-container">
            {/* Google Button */}
            <div className="icon-bg" onClick={handleGoogleLogin}>
              <FcGoogle className="fs-3" />
            </div>

            {/* Facebook Button */}
            <div className="icon-bg">
              <img
                src={require("../../assets/images/facebook.png")}
                alt="Facebook"
                loading="lazy"
              />
            </div>
          </div>
          <div class="text-sm sm:text-lg  font-medium !leading-none mb-4">Don’t have an account? Sign up<span class="">Sign up</span></div>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Login;

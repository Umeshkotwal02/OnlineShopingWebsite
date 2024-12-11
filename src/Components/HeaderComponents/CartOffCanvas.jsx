// Login.jsx
import React from 'react';
import { Offcanvas, Button } from 'react-bootstrap';
import { IoMdCart } from 'react-icons/io';

const CartOffCanvas = ({ show, handleClose }) => {
    return (
        <Offcanvas show={show} onHide={handleClose} placement="end" style={{ maxWidth: '450px' }}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title className='text-center fw-bold fs-1'>Bag</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <div className="empty-cart-container p-4 d-flex flex-column justify-content-center align-items-center">
                <IoMdCart className='fw-bold fs-1'/>
                    <p>Your cart is empty!</p>
                    <Button variant="dark" className="mt-5 continue-shopping-btn">Continue Shopping</Button>
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default CartOffCanvas;

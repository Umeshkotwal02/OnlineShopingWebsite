import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ReturnModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Return Canva Demo
            </Button>

            <Modal show={show} onHide={handleClose}>
                <div class="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-50">
                    <div class="bg-white p-4 shadow-lg rounded-4" style={{ maxWidth: "400px", width: "100%" }}>
                        <h2 class="text-center mb-3 fw-medium">Return Order</h2>
                        <p class="text-center text-muted mb-3">
                            Do you want to send the item cancellation request?
                        </p>
                        <textarea
                            class="form-control mb-3 web-bg-color no-style border-0 rounded-4"
                            placeholder="Enter Reason..."
                            rows="5"
                            cols="40"
                        ></textarea>

                        <div class="d-flex justify-content-end">
                            <button
                                class="btn btn-secondary me-2 rounded-5"
                                onclick="handleClose()"
                            >
                                Cancel
                            </button>
                            <button
                                class="btn btn-dark rounded-5"
                                onclick="submitCancelReason()"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>

            </Modal >
        </>
    );
}

export default ReturnModal;
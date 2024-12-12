import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Importing Link for navigation

const SareeEdit = () => {
    return (
        <Container fluid className='py-4 px-4 px-md-2'>
            {/* Bridal Edit */}
            <h4 className='text-center ff-lexend pb-3'>The Saree Edit</h4>
            <p className='text-center ff-lexend pb-3' style={{ fontFamily: "Jost" }}><i>""Embrace the festival magic, let joy fill every moment."</i></p>
            <Row className='p-3 p-md-12 SareeEdit'>
                <Col className='col-12 col-md-12' >
                    {/* Main Row Start */}
                </Col>
            </Row>
        </Container>
    );
}

export default SareeEdit;

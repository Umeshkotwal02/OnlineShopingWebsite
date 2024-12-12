import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Importing Link for navigation

const FestivalSpecial = () => {
    return (
        <Container fluid className='py-4 px-4 px-md-2'>
            {/* Bridal Edit */}
            <h4 className='text-center ff-lexend pb-3'>Festival Special</h4>
            <p className='text-center ff-lexend pb-3' style={{ fontFamily: "Jost" }}><i>"Embrace the festival magic, let joy fill every moment."</i></p>
            <Row className='p-3 p-md-12 bridalBack h-75'>
                <Col className='col-12 col-md-12' >
                    <Row>
                        <Col className='p-0 pe-2 pe-lg-3' xxl={5} xl={5} lg={12} sm={12} md={12} >
                            <div className='p-0'>
                                <img
                                    src={'/assets/images/Festival-Special/img1.png'}
                                    className='w-100 transition-transform'
                                    alt="Bridal Edit"
                                />
                            </div>
                        </Col>
                        <Col className=' pe-md-5' xxl={7} xl={7} lg={12} sm={12} md={12}>
                            <Row className='h-100'>
                                <Col className='col-12 p-0 pb-2 pb-lg-3' style={{ height: "50%" }}>
                                    <div className='p-0'>
                                        <img
                                            src={'/assets/images/Festival-Special/img4.png'}
                                            className='w-100'
                                            alt="Bridal Edit"
                                        />
                                    </div>
                                </Col>

                                <Col className='col-6' style={{ height: "50%" }}>
                                    <div className='pt-3'>
                                        <img
                                            src={'/assets/images/Festival-Special/img2.png'}
                                            className='w-100'
                                            alt="Bridal Edit"
                                        />
                                    </div>
                                </Col>
                                <Col className='col-6' style={{ height: "50%" }}>
                                    <div className='pt-3  ps-3'>
                                        <img
                                            src={'/assets/images/Festival-Special/img3.png'}
                                            className='w-100'
                                            alt="Bridal Edit"
                                        />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default FestivalSpecial;

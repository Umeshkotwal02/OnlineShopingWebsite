import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <Container fluid className=''>
    <Row>
      <Col className='col-12'>
        <Link to='/' className='d-none d-md-block'>
          <img src={require('../../assets/images/Banner/Banner.png')} className='w-100' alt="" />
        </Link>
        <Link to='/' className='d-block d-md-none'>
          <img src={require('../../assets/images/Banner/Banner2.png')} className='w-100' alt="" />
        </Link>
      </Col>
    </Row>
  </Container>
  );
};


export default Banner;

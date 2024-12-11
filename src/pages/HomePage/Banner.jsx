import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Banner = () => {
  return (
    <Container fluid>
      <Row className="justify-content-around p-4" style={{ backgroundImage:"url('/assets/images/banner.png')" }}>
        <Col xs={12} sm={6} md={4} className="px-3">
          <h3 className="footer-heading">FOR ANY HELP, YOU MAY CALL US AT</h3>
          <h3 className="footer-phone">7409555455</h3>
          <p className="footer-info">
            (Monday to Saturday: 11 am - 9 pm, Sunday: 12 am - 7 pm)
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Banner;

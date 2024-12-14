import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { CategoryIcon, HomeIcon, WishlistIcon } from '../../assets/SvgIcons';
import { CgProfile } from "react-icons/cg";


const MobileFooter = () => {
    return (
        <Container className="d-lg-none mobile-footer">
        <Row>
          <Col xxl={3} xl={3} lg={3} md={3} sm={3} xs={3}>
            <div className="d-flex flex-column align-items-center">
              <HomeIcon style={{ fontSize: '24px' }} />
              <span className="mt-2">Home</span>
            </div>
          </Col>
          <Col xxl={3} xl={3} lg={3} md={3} sm={3} xs={3}>
            <div className="d-flex flex-column align-items-center">
              <CategoryIcon style={{ fontSize: '24px' }} />
              <span className="mt-2">Category</span>
            </div>
          </Col>
          <Col xxl={3} xl={3} lg={3} md={3} sm={3} xs={3}>
            <div className="d-flex flex-column align-items-center">
              <WishlistIcon style={{ fontSize: '24px' }} />
              <span className="mt-2">Wishlist</span>
            </div>
          </Col>
          <Col xxl={3} xl={3} lg={3} md={3} sm={3} xs={3}>
            <div className="d-flex flex-column align-items-center">
              <CgProfile style={{ fontSize: '24px' }} />
              <span className="mt-2">My Profile</span>
            </div>
          </Col>
        </Row>
      </Container>
    );
}

export default MobileFooter;

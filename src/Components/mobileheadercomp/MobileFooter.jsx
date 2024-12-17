import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { CategoryIcon, HomeIcon, WishlistIcon } from '../../assets/SvgIcons';
import { CgProfile } from "react-icons/cg";
import "../../styles/Mobile-footer.css";
import { HiOutlineViewGrid } from "react-icons/hi";

const MobileFooter = () => {
  return (
    <Container fluid className="mobile-footer">
      <Row>
        {/* Home */}
        <Col xxl={3} xl={3} lg={3} md={3} sm={3} xs={3}>
          <NavLink 
            to="/" 
            className="mobi-footer-icon d-flex flex-column align-items-center"
            activeClassName="active"
          >
            <HomeIcon style={{ fontSize: '24px' }} />
            <span className="mt-2">Home</span>
          </NavLink>
        </Col>

        {/* Category */}
        <Col xxl={3} xl={3} lg={3} md={3} sm={3} xs={3}>
          <NavLink 
            to="/category" 
            className="mobi-footer-icon d-flex flex-column align-items-center"
            activeClassName="active"
          >
            <HiOutlineViewGrid style={{ fontSize: '24px' }} />
            <span className="mt-2">Category</span>
          </NavLink>
        </Col>

        {/* Wishlist */}
        <Col xxl={3} xl={3} lg={3} md={3} sm={3} xs={3}>
          <NavLink 
            to="/wishlist" 
            className="mobi-footer-icon d-flex flex-column align-items-center"
            activeClassName="active"
          >
            <WishlistIcon style={{ fontSize: '24px' }} />
            <span className="mt-2">Wishlist</span>
          </NavLink>
        </Col>

        {/* My Profile */}
        <Col xxl={3} xl={3} lg={3} md={3} sm={3} xs={3}>
          <NavLink 
            to="/profile" 
            className="mobi-footer-icon d-flex flex-column align-items-center"
            activeClassName="active"
          >
            <CgProfile style={{ fontSize: '24px' }} />
            <span className="mt-2">My Profile</span>
          </NavLink>
        </Col>
      </Row>
    </Container>
  );
};

export default MobileFooter;

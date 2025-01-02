import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import "../../styles/Menu.css";
import { Link } from 'react-router-dom';
import { headerCatData } from '../../config/ConstData';

const CategoryMenu = () => {
  return (
    <Container fluid className="menu-container pt-2 px-4 d-none d-lg-block">
      <Navbar className="responsive-navbar-nav">
        <Nav className="w-100 justify-content-between">
          {headerCatData.map((menu, index) => (
            <div className="menu-item" key={index}>
              <Nav.Link className="menu-button">{menu.title}</Nav.Link>
              <div
                className={`dropdown-content p-3 ${menu.dropdown.length > 0 ? "dropdown-with-items" : "dropdown-only-image"
                  }`}
              >
                {menu.dropdown.length > 0 ? (
                  menu.dropdown.map((dropdown, idx) => (
                    <div key={idx} className="mx-4">
                      {/* Dropdown content here */}
                    </div>
                  ))
                ) : (
                  <div className="no-dropdown">
                    <img src={menu.image} alt={menu.title} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </Nav>
      </Navbar>
    </Container>
  );
};

export default CategoryMenu;
import React from 'react';
import { Container, Nav, Col } from 'react-bootstrap';
import "../../styles/Menu.css";
import { Link } from 'react-router-dom';
import { headerCatData } from '../../config/ConstData';

const CategoryMenu = () => {
  return (
    <Container fluid className="menu-container pt-2 px-4 d-none d-lg-block">
      <Nav className="responsive-navbar-nav">
        {headerCatData.map((menu, index) => (
          <Col className="menu-item" key={index}>
            <button className="menu-button">{menu.title}</button>
            <div
              className={`dropdown-content p-3 ${menu.dropdown.length > 0 ? "dropdown-with-items" : "dropdown-only-image"
                }`}
            >
              {/* Check if there are dropdown items */}
              {menu.dropdown.length > 0 ? (
                menu.dropdown.map((dropdown, idx) => (
                  <div key={idx} className="mx-4">
                    <p className="list-title text-start ms-1">{dropdown.category}</p>
                    {dropdown.items.map((item, i) => (
                      <li key={i} className="p-1">
                        <Link to={item.link} className="list-item">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </div>
                ))
              ) : (
                <div className="no-dropdown px-5">
                  {/* Show image only if there are no dropdown items */}
                  {menu.image && <img src={menu.image} alt={menu.title} />}
                </div>
              )}

              <div>
                {/* Always show image inside dropdown if it exists */}
                {menu.dropdown.length > 0 && menu.image && (
                  <div className="dropdown-image">
                    <img src={menu.image} alt={menu.title} />
                  </div>
                )}
              </div>
            </div>

          </Col>
        ))}
      </Nav>
    </Container>
  );
};

export default CategoryMenu;

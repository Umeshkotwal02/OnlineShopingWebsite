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
            {menu.dropdown.length > 0 && (
              <div className="dropdown-content">
                {menu.dropdown.map((dropdown, idx) => (
                  <div key={idx}>
                    <h4 className="list-title">{dropdown.category}</h4>
                    <ul>
                      {dropdown.items.map((item, i) => (
                        <li key={i}>
                          <Link to={item.link} className="list-item">
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                {menu.image && <img src={menu.image} alt={menu.title} />}
              </div>
            )}
          </Col>
        ))}
      </Nav>
    </Container>
  );
};

export default CategoryMenu;


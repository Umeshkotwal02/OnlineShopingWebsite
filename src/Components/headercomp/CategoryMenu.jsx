import React from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import "../../styles/Menu.css";
import { Link } from 'react-router-dom';
import { headerData } from '../../config/ConstData';


const CategoryMenu = () => {

  return (
    <Navbar className='responsive-navbar-nav'>
      <Container fluid className="menu-container pt-2 px-lg-5 px-xl-5 px-xxl-5">
        <Nav className="responsive-navbar-nav">
          {headerData.map((menu, index) => (
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
    </Navbar>
  );
};

export default CategoryMenu;

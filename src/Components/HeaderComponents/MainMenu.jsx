import React from "react";
import "../../styles/Menu.css";
import { Container, Row, Col } from "react-bootstrap";

const Menu = () => {
  return (
    <Container fluid className="menu-container py-3">
      <Row className="menu-content justify-content-center align-items-center">
        {/* Sales */}
        <Col className="menu-item text-center">
          <button className="menu-button text-uppercase">Sale</button>
          <div className="dropdown">
            <div className="dropdown-image">
              <img
                src="https://kapoorlehengasaree.com/admin/public/category1/4231.jpeg"
                alt="Sales"
              />
            </div>
          </div>
        </Col>

        {/* New Arrivals */}
        <Col className="menu-item text-center">
          <button className="menu-button text-uppercase">New Arrivals</button>
          <div className="dropdown">
            <div className="dropdown-image">
              <img
                src="https://kapoorlehengasaree.com/admin/public/category1/4231.jpeg"
                alt="New Arrivals"
              />
            </div>
          </div>
        </Col>

        {/* Additional Menu Items */}
        <Col className="menu-item text-center">
          <button className="menu-button text-uppercase">Half Saree</button>
          <div className="dropdown">
            <div className="dropdown-image">
              <img
                src="https://kapoorlehengasaree.com/admin/public/category1/4231.jpeg"
                alt="Half Saree"
              />
            </div>
          </div>
        </Col>
        {/* Additional Menu Items */}
        <Col className="menu-item text-center">
          <button className="menu-button text-uppercase">
            FASHION SAREE
          </button>
          <div className="dropdown">
            <div className="dropdown-image">
              <img
                src="https://kapoorlehengasaree.com/admin/public/category1/4231.jpeg"
                alt="Half Saree"
              />
            </div>
          </div>
        </Col>




        {/* Lehenga Choli */}
        <Col className="menu-item text-center">
          <button className="menu-button text-uppercase">Lehenga</button>
          <div className="dropdown dropdown-grid">
            <div className="dropdown-section">
              <h4 className="dropdown-title">Style</h4>
              <ul>
                <li><a href="#">Wedding Lehenga</a></li>
                <li><a href="#">Bridal Lehenga</a></li>
                <li><a href="#">Designer Lehenga</a></li>
                <li><a href="#">Haldi Lehenga</a></li>
              </ul>
            </div>
            <div className="dropdown-image">
              <img
                src="https://kapoorlehengasaree.com/admin/public/category1/75026.jpeg"
                alt="Lehenga"
              />
            </div>
          </div>
        </Col>

        {/* Additional Menu Items */}
        <Col className="menu-item text-center">
          <button className="menu-button text-uppercase">
            Gown
          </button>
          <div className="dropdown">
            <div className="dropdown-image">
              <img
                src="https://kapoorlehengasaree.com/admin/public/category1/4231.jpeg"
                alt="Half Saree"
              />
            </div>
          </div>
        </Col>

        {/* Additional Menu Items */}
        <Col className="menu-item text-center">
          <button className="menu-button text-uppercase">Wedding
          </button>
          <div className="dropdown">
            <div className="dropdown-image">
              <img
                src="https://kapoorlehengasaree.com/admin/public/category1/4231.jpeg"
                alt="Half Saree"
              />
            </div>
          </div>
        </Col>
        {/* Additional Menu Items */}
        <Col className="menu-item text-center">
          <button className="menu-button text-uppercase">Celebrity Outfits
          </button>
          <div className="dropdown">
            <div className="dropdown-image">
              <img
                src="https://kapoorlehengasaree.com/admin/public/category1/4231.jpeg"
                alt="Half Saree"
              />
            </div>
          </div>
        </Col>
        {/* Additional Menu Items */}
        <Col className="menu-item text-center">
          <button className="menu-button text-uppercase">OCCASIONS
          </button>
          <div className="dropdown">
            <div className="dropdown-image">
              <img
                src="https://kapoorlehengasaree.com/admin/public/category1/4231.jpeg"
                alt="Half Saree"
              />
            </div>
          </div>
        </Col>
        {/* Additional Menu Items */}
        <Col className="menu-item text-center">
          <button className="menu-button text-uppercase">Engagement
          </button>
          <div className="dropdown">
            <div className="dropdown-image">
              <img
                src="https://kapoorlehengasaree.com/admin/public/category1/4231.jpeg"
                alt="Half Saree"
              />
            </div>
          </div>
        </Col>
        {/* Additional Menu Items */}
        <Col className="menu-item text-center">
          <button className="menu-button text-uppercase">Reception
          </button>
          <div className="dropdown">
            <div className="dropdown-image">
              <img
                src="https://kapoorlehengasaree.com/admin/public/category1/4231.jpeg"
                alt="Half Saree"
              />
            </div>
          </div>
        </Col>
        {/* Additional Menu Items */}
        <Col className="menu-item text-center">
          <button className="menu-button text-uppercase">OTHERS</button>
          <div className="dropdown">
            <div className="dropdown-image">
              <img
                src="https://kapoorlehengasaree.com/admin/public/category1/4231.jpeg"
                alt="Half Saree"
              />
            </div>
          </div>
        </Col>

        {/* Add other menu items similarly */}
      </Row>
    </Container>
  );
};

export default Menu;

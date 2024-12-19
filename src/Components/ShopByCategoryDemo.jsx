import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import "../styles/NewArrivalCard.css";
import "../styles/ShopbyCatDEMO.css"

const ShopByCategoryDemo = () => {

  const sliderItems = [
    {
        id: 1,
        image: require("../assets/images/CategoryByShopSlicks/Crush.png"),
        text: "Crush(Pleated) Work"
    },
    {
        id: 2,
        image: require("../assets/images/CategoryByShopSlicks/lahenga.png"),
        text: "Lehenga Saree"
    },
    {
        id: 3,
        image: require("../assets/images/CategoryByShopSlicks/DesignerSaree.png"),
        text: "Designer Saree"
    },
    {
        id: 4,
        image: require("../assets/images/CategoryByShopSlicks/Printed.png"),
        text: "Printed Embroidered "
    },
    {
        id: 5,
        image: require("../assets/images/CategoryByShopSlicks/FloralSaree.png"),
        text: "Floral Saree"
    },
    {
        id: 6,
        image: require("../assets/images/CategoryByShopSlicks/Crush.png"),
        text: "Celebrity Outfits"
    },
    {
        id: 7,
        image: require("../assets/images/CategoryByShopSlicks/lahenga.png"),
        text: "Reception"
    },
    {
        id: 8,
        image: require("../assets/images/CategoryByShopSlicks/DesignerSaree.png"),
        text: "OTHERs"
    },
];

  const productNameSlug = (name) => {
    return name.replace(/\s+/g, "-").toLowerCase();
  };

  return (
    <div>
      <Container fluid className="shop-by-container">
        <Row className="justify-content-center">
          {sliderItems.map((product) => (
            <Col xs={12} sm={6} md={4} lg={3} key={product.id} className="d-flex justify-content-center">
              <Link
                to={`/product/${productNameSlug(product.text)}`}
                className="shop-by-category-card text-decoration-none"
              >
                <div className="image-container position-relative">
                  <img
                    src={product.image}
                    className="slider-image img-fluid"
                    alt={product.text}
                    loading="lazy"
                  />
                  <div className="image-overlay position-absolute d-flex align-items-center justify-content-center">
                    <h5 className="overlay-text text-white text-center">{product.text}</h5>
                  </div>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ShopByCategoryDemo;

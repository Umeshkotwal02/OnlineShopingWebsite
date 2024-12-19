import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import "../../styles/ShopByColor.css";


const shopByColorData = [
    {
      id: 1,
      product_name: "Red Shirt",
      product_image: "https://via.placeholder.com/150/FF0000/FFFFFF",
    },
    {
      id: 2,
      product_name: "Blue Jeans",
      product_image: "https://via.placeholder.com/150/0000FF/FFFFFF",
    },
    {
      id: 3,
      product_name: "Green Jacket",
      product_image: "https://via.placeholder.com/150/008000/FFFFFF",
    },
    {
      id: 4,
      product_name: "Yellow Hat",
      product_image: "https://via.placeholder.com/150/FFFF00/000000",
    },
    {
      id: 5,
      product_name: "Black Shoes",
      product_image: "https://via.placeholder.com/150/000000/FFFFFF",
    },
    
  ];

  

const ShopByColor = () => {
  return (
    <Container fluid className="position-relative shop-by-color-container">
      {/* Navigation Buttons */}
      <button className="shop-button prev-button">
        <FaAngleLeft />
      </button>
      <button className="shop-button next-button">
        <FaAngleRight />
      </button>

      {/* Image Carousel */}
      <Row className="g-4 justify-content-center">
        {shopByColorData.map((item) => (
          <Col xs={6} sm={4} md={3} lg={2} key={item.id}>
            <div className="product-card">
              <Link to={`/product/${item.product_name}`}>
                <img
                  src={item.product_image}
                  alt={item.product_name}
                  className="product-image img-fluid"
                />
              </Link>
              <h5 className="product-name text-center mt-2">{item.product_name}</h5>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ShopByColor;

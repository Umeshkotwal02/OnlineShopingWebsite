import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import { MdArrowForwardIos } from "react-icons/md";
import { Container, Row, Col } from "react-bootstrap"; // Importing Bootstrap components
import "../../styles/CategoryCard.css";
import { Link } from "react-router-dom";
import { RightAngle } from "../../assets/SvgIcons";

const CategoryCustomCard = ({ data }) => {
  const handleNavigate = () => {
    console.log("Navigate to product page");
  };

  return (
    <Container fluid className="category-section" onClick={handleNavigate}>
      <Row className="justify-content-center">
        <Col xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">
        <div
            className="swiper-slide-content"
            onClick={handleNavigate}
          >
            <div className="swiper-slide-inner">
              <div className="swiper-text-center">
                <h3 className="swiper-title">
                  NEW ARRIVALS
                </h3>
                <p className="swiper-subtitle">
                  350+ STYLES ADDED
                </p>
                <Link
                  className="swiper-link"
                  to="/product-page"
                >
                  SHOP HERE <RightAngle />
                </Link>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CategoryCustomCard;

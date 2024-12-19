import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import ProductImageSlider from "./ProductImageSlider";
import { FaHeart } from "react-icons/fa6";
import { FiHeart } from "react-icons/fi";
import "../../styles/NewArrivalCard.css";
import { productData } from "../../config/productData";

const NewArrivalCard = () => {
  const [isWishlisted, setIsWishlisted] = useState(productData[0].is_wishlist);

  const truncateProductName = (name) => {
    if (name.length > 18) {
      return name.substring(0, 20) + "...";
    }
    return name;
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    alert("Product added to cart!");
  };

  const handleWishlistToggle = (e) => {
    e.preventDefault();
    setIsWishlisted((prev) => !prev);
    alert(isWishlisted ? "Removed from wishlist!" : "Added to wishlist!");
  };

  const productNameSlug = (name) => {
    return name.replace(/\s+/g, "-").toLowerCase();
  };

  return (
    <Container fluid className="new-arrival-container">
      <h2 className="text-center">New Arrival</h2>
      <p className="text-center">"Embrace the festival magic, let joy fill every moment."</p>

      <Row className="px-lg-5 px-xl-5 px-xxl-5 g-4">
        {productData.map((product) => (
          <Col xs={12} sm={6} md={4} lg={3} xl={2} xxl={2} key={product.id} className="mb-1 rounded">
            <Link to={`/product/${productNameSlug(product.product_name)}`} className="new-arrival-card text-decoration-none">
              {/* Product Image Section */}
              <div className="image-container rounded">
                <ProductImageSlider imageList={product.product_images} />
                <div className="overlay-buttons">
                  <button className="add-to-cart-btn" onClick={handleAddToCart}>
                    ADD TO CART
                  </button>
                </div>

                {/* Wishlist Button */}
                <div className="wishlist-btn rounded-circle">
                  <button onClick={handleWishlistToggle} className="rounded-circle">
                    {isWishlisted ? (
                      <FaHeart className="icon heart-icon" />
                    ) : (
                      <FiHeart className="icon" />
                    )}
                  </button>
                </div>

                {/* Discount Badge */}
                {product.product_discount > 0 && (
                  <div className="discount-badge">
                    <p className="discount-p">{product.product_discount}% OFF</p>
                  </div>
                )}
              </div>

              {/* Product Info Section */}
              <div className="product-info">
                <h3 className="text-start text-dark">{truncateProductName(product.product_name)}</h3>
                <div className="price-section ">
                  <span className="mrp text-start">
                    {product.currency}
                    {product.product_mrp}
                  </span>
                  <span className="discounted-price">
                    {product.currency}
                    {product.product_price}
                  </span>
                </div>
              </div>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default NewArrivalCard;

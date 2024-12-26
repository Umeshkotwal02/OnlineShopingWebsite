import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductImageSlider from "./ProductImageSlider";
import { FaHeart } from "react-icons/fa6";
import { FiHeart } from "react-icons/fi";
import "../../styles/NewArrivalCard.css";
import { productData } from "../../config/productData";
import { Button } from "react-bootstrap";

const NewArrivalCard = () => {
  const [isWishlisted, setIsWishlisted] = useState(productData[0].is_wishlist);

  const truncateProductName = (name) => {
    if (name.length > 18) {
      return name.substring(0, 35) + "...";
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
    <div className="new-arrival-container px-lg-5 px-xl-5 px-xxl-5">
      <div className="d-none d-lg-block">
        <h3 className="text-center fs-3 ">New Arrival </h3>
        <p className="text-center">"Embrace the festival magic, let joy fill every moment."</p>
      </div>
      <div className="custom-grid px-lg-3 px-xl-3 px-xxl-3">
        {productData.map((product) => (
          <div className="grid-item" key={product.id}>
            {/* <Link to={`/product/${productNameSlug(product.product_name)}`} className="new-arrival-card text-decoration-none"> */}
            <Link to={`/products/details`} className="new-arrival-card text-decoration-none">
              {product.product_discount > 0 && (
                <div className="discount-badge "> 
                  <p className="discount-p">{product.product_discount}% OFF</p>
                </div>
              )}
              <div className="image-container rounded-top">
                <ProductImageSlider imageList={product.product_images} className="product-multi-img-slider" />
                <div className="overlay-buttons">
                  <button className="add-to-cart-btn" onClick={handleAddToCart}>
                    ADD TO CART
                  </button>
                </div>
                <div className="wishlist-btn rounded-circle">
                  <button onClick={handleWishlistToggle} className="rounded-circle">
                    {isWishlisted ? (
                      <FaHeart className="icon heart-icon" />
                    ) : (
                      <FiHeart className="icon" />
                    )}
                  </button>
                </div>

              </div>
              <div className="product-info">
                <p className="text-start text-dark" style={{ fontSize: "0.84rem" }}>{truncateProductName(product.product_name)}</p>
                <div className="price-section">
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
          </div>
        ))}
      </div>

      <div className="text-center py-3">
        <Link to="/products-page">
          <Button
            className="btn btn-dark text-white font-weight-medium px-4 py-2 d-inline-flex align-items-center gap-2"
            style={{ fontFamily: "Roboto", fontSize: "0.6", borderRadius: "30px" }}
          >
            View All
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NewArrivalCard;

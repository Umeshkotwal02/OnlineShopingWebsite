import React, { useState } from "react";
import { IoBagOutline } from "react-icons/io5";
import { Button, Form, Radio } from "react-bootstrap"; // React-Bootstrap imports
import { FaHeart, FaRegCircleCheck } from "react-icons/fa6";
import ProductDetailsSlider from "./ProductDetailsPage/ProductDetailsSlider";
import "../styles/ProductDetails.css";
import QuantityCounter from "./ProductDetailsPage/QuantityCounter";
import {
  CashOnDelIcon,
  ExchangeIcon,
  ShippingIcon,
  StitchingIcon,
} from "../assets/SvgIcons";
import { Container, Row, Col } from 'react-bootstrap';
import CustomerReview from "./ProductDetailsPage/CustomerReview"

const ProductDetails = () => {

  const bagShowOff = [
    {
      icon: <CashOnDelIcon />,
      title: "CASH ON DELIVERY",
    },
    {
      icon: <ExchangeIcon />,
      title: "SIMPLE EXCHANGE",
    },
    {
      icon: <StitchingIcon />,
      title: "SIMPLE EXCHANGE",
    },
    {
      icon: <ShippingIcon />,
      title: "SIMPLE EXCHANGE",
    },
  ];

  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedColorImages, setSelectedColorImages] = useState([]);
  const [stitchingValue, setStitchingValue] = useState("female");
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [showAllOffers, setShowAllOffers] = useState(false);

  // Static Data
  const productInfo = {
    product_name: "Pink Ethnic",
    product_detail: "Sea Green Georgette Semi-Stitched Lehenga and Unstitched Blouse with Dupatta (Set of 3)",
    product_sku_code: "SKU12345",
    average_rating: 3.5,
    total_rating: 55,
    product_price: 5400,
    product_discount: 40,
    colorist_images: [
      { varient_name: "Green", multiple_image: [require('../assets/images/ProductDetails/img1.png'), "image2.jpg"] },
      { varient_name: "Orange", multiple_image: [require('../assets/images/ProductDetails/orange.png'), "image4.jpg"] },
      { varient_name: "Blue", multiple_image: [require('../assets/images/ProductDetails/blue.png'), "image4.jpg"] },
      { varient_name: "Black", multiple_image: [require('../assets/images/ProductDetails/black.png'), "image4.jpg"] },
      { varient_name: "Blue", multiple_image: [require('../assets/images/ProductDetails/orange.png'), "image4.jpg"] },
    ],
    sizechart: true,
  };

  const availableOffers = [
    { heading: "GET FLAT 20% OFF", name: "NEW20", price: 100 },
  ];

  const handleAddToCartClick = (id) => {
    // Add to cart logic
    console.log("Added to cart:", id);
  };

  const handleChange = (e) => {
    setStitchingValue(e.target.value);
  };

  return (
    <div className="container">
      <div className="row py-5">
        {/* Product Image Slider */}
        <div className="col-lg-7">
          <ProductDetailsSlider />
        </div>

        {/* Product Details */}
        <div className="col-lg-5">
          <h1 className="my-4">{productInfo.product_name}</h1>
          <p>{productInfo.product_detail}</p>
          <p>Style No: {productInfo.product_sku_code}</p>

          {/* Rating */}
          <div className="d-flex align-items-center mb-3">
            <div className="border border-dark rounded p-2 d-flex align-items-center">
              <span>{productInfo.average_rating.toFixed(1)}</span>
              <FaHeart className="text-warning" />
            </div>
            <p className="ms-3">Based on {productInfo.total_rating} ratings</p>
          </div>

          {/* Price */}
          <div className="mb-4">
            <h4>
              ₹{productInfo.product_price}{" "}
              <span className="text-success">
                {productInfo.product_discount}% Off
              </span>
            </h4>
            <p>

              Inclusive of all taxes
            </p>
          </div>

          {/* Select Color */}
          <h5>Select Color</h5>
          <div className="d-flex mb-4">
            {productInfo.colorist_images?.map((item, index) => (
              <div
                key={index}
                className="position-relative border"
                style={{ width: "130px", height: "160px" }}
                onClick={() => {
                  setSelectedColor(item.varient_name);
                  setSelectedColorImages(item.multiple_image);
                }}
              >
                <img
                  src={item.multiple_image[0]}
                  alt={item.varient_name}
                  className="w-100 h-100 object-cover"
                />
                <p className="text-center">{item.varient_name}</p>
                {selectedColor === item.varient_name && (
                  <div className="position-absolute top-0 end-0 p-1 bg-dark bg-opacity-50">
                    <FaRegCircleCheck className="text-white" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Available Offers */}
          {availableOffers.length > 0 && (
            <div className="mb-4">
              <h5>Available Offers:</h5>
              {availableOffers.map((item, index) => (
                <div key={index} className="border border-light mb-2 p-2 discount-coupon">
                  <div className="d-flex">
                    <div className="text-white px-3 py-1 rounded me-3">
                      <img
                        src={require("../assets/images/ProductDetails/discount-bag.png")}
                        alt="Product"
                        className="discount-bag"
                      />
                    </div>
                    <div className="w-50">
                      <div>{item.heading}</div>
                      <div>Use Code: {item.name}</div>
                    </div>
                    <div>
                      <Button variant="outline-primary" onClick={() => alert(`Copied: ${item.name}`)}>
                        COPY
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
              {!showAllOffers && availableOffers.length > 2 && (
                <div className="text-end">
                  <Button variant="link" onClick={() => setShowAllOffers(true)}>
                    See All Offers
                  </Button>
                </div>
              )}
            </div>
          )}

          {/* Stitching Options */}
          <div className="mb-4">
            <h5>Lehenga Choli:</h5>
            <Form>
              {["Unstitched Lehenga Choli", "Standard Stitching", "Customize Stitching"].map((stitching, index) => (
                <Form.Check
                  key={index}
                  type="radio"
                  label={stitching}
                  value={stitching}
                  checked={stitchingValue === stitching}
                  onChange={handleChange}
                  inline
                />
              ))}
            </Form>
          </div>

          {/* Quantity and Size Chart */}
          <div className="d-flex align-items-center mb-4">
            <h5>Quantity:</h5>
            <QuantityCounter />
          </div>

          {/* Wishlist and Cart */}
          <div className="d-flex gap-3">
            <button
              className={`btn btn-outline-danger ${isWishlisted ? "disabled" : ""}`}
              onClick={() => setIsWishlisted(!isWishlisted)}
            >
              <FaHeart /> Wishlist
            </button>
            <button className="btn btn-warning" onClick={() => handleAddToCartClick(productInfo.product_sku_code)}>
              <IoBagOutline /> Add to Bag
            </button>
            <button className="btn btn-danger" onClick={() => handleAddToCartClick(productInfo.product_sku_code)}>
              <IoBagOutline /> Buy Now
            </button>
          </div>

          <Container className="bg-light py-3 mb-4 rounded">
            <Row className="d-flex justify-content-between">
              {bagShowOff.map((item, index) => (
                <Col key={index} xs={6} md={3} className="text-center">
                  <div className="icon mb-2">
                    {item.icon}
                  </div>
                  <div className="text-sm">{item.title}</div>
                </Col>
              ))}
            </Row>
          </Container>

          {/* Product Information */}
          {/* <ProductAllInformation/> */}
        </div>
      </div>
      <hr/>
      <CustomerReview />
    </div>
  );
};

export default ProductDetails;

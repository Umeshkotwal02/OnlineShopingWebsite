import React from "react";
import "./ProductCard.css"; // Custom CSS file for styling
import { Link } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import "./ProductCard.css"

const VideoCardData = [
    {
        id: 1,
        product_name: "Bright Red Ethnic Bridal Lehenga Choli",
        videoSrc: require("../../assets/video/bridalvideo.mp4"),
        badgeImg: require("../../assets/images/New-Arrive/img3.png"),
        product_mrp: 1200,
        product_price: 999,
        product_discount: 20,
        currency: "₹",
    },
];

const ProductCard = () => {
    const truncateProductName = (name) => {
        if (name.length > 18) {
            return name.substring(0, 20) + "...";
        }
        return name;
    };

    const productNameSlug = (name) => {
        return name.replace(/\s+/g, "-").toLowerCase();
    };

    return (
        <Container fluid className="new-arrival-container">
            <h2 className="text-center">New Arrival</h2>
            <p className="text-center">"Embrace the festival magic, let joy fill every moment."</p>

            <Row className="px-lg-5 px-xl-5 px-xxl-5">
                {VideoCardData.map((product) => (
                    <Col xs={12} sm={6} md={3} lg={3} xl={3} xxl={3} key={product.id}>
                        <Link to={`/product/${productNameSlug(product.product_name)}`} className="new-arrival-card text-decoration-none">
                            {/* Product Video Section */}
                            <div className="video-container position-relative">
                                <video
                                    className="product-video"
                                    src={product.videoSrc}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                ></video>

                                {/* Badge Image */}
                                <img
                                    src={product.badgeImg}
                                    alt="Badge"
                                    className="badge-img position-absolute"
                                />
                            </div>

                            {/* Product Info Section */}
                            <div className="product-info mt-2">
                                <h3 className="text-center text-dark">{truncateProductName(product.product_name)}</h3>
                                <div className="price-section text-center">
                                    <span className="mrp text-decoration-line-through me-2">
                                        {product.currency}{product.product_mrp}
                                    </span>
                                    <span className="discounted-price fw-bold">
                                        {product.currency}{product.product_price}
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

export default ProductCard;

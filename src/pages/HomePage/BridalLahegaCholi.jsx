import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap"; // Import React-Bootstrap components
import "../../styles/NewArrivalCard.css";

const BridalLahegaCholi = () => {

    const BridalData = [
        {
            id: 1,
            product_name: "Bridal Lahenga",
            product_images: require("../../assets/images/Bridal-Lagenga/img1.png")
        },
        {
            id: 2,
            product_name: "Bridal Lahenga",
            product_images: require("../../assets/images/Bridal-Lagenga/img2.png")
        },
        {
            id: 3,
            product_name: "Bridal Lahenga",
            product_images: require("../../assets/images/Bridal-Lagenga/img3.png")
        }
    ]

    const handleAddToCart = (e) => {
        e.preventDefault();
        alert("Product added to cart!");
    };

    const productNameSlug = (name) => {
        return name.replace(/\s+/g, "-").toLowerCase();
    };

    return (
        <div>
            <Container fluid className="new-arrival-container">
                <div>
                    <p className="text-center fs-4">Bridal Lehenga Choli
                    </p>
                    <p className="text-center">"Embrace the festival magic, let joy fill every moment."</p>
                </div>

                <Row className="px-lg-5 px-xl-5 px-xxl-5">
                    {BridalData.map((product) => (
                        <Col xs={12} sm={6} md={3} lg={4} xl={4} xxl={4} key={product.id}>
                            <Link to={`/product/${productNameSlug(product.product_name)}`} className="new-arrival-card text-decoration-none">
                                {/* Product Image Section */}
                                <div className="image-container">
                                    <div className="bridal-image-container">
                                        <img
                                            src={product.product_images} // Use product.product_images here
                                            className="slider-image img-fluid"
                                            alt={product.product_name} // Added alt text for accessibility
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="overlay-buttons">
                                        <button className="add-to-cart-btn" onClick={handleAddToCart}>
                                            SHOP NOW
                                        </button>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default BridalLahegaCholi;

import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap"; // Import React-Bootstrap components
import "../../styles/BridalLahegaCholi.css";
import Slider from "react-slick";

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
        },
        {
            id: 4,
            product_name: "Bridal Lahenga",
            product_images: require("../../assets/images/Bridal-Lagenga/img4.png")
        }
    ]

    const handleAddToCart = (e) => {
        e.preventDefault();
        alert("Product added to cart!");
    };

    const productNameSlug = (name) => {
        return name.replace(/\s+/g, "-").toLowerCase();
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrow: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    centerMode: false,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerMode: false,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerMode: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1.2,
                    slidesToScroll: 1,
                    centerMode: true,
                },
            },
        ],
    };

    return (
        <div className="mt-4">
            <Container fluid className="bridal-container">
                <div>
                    <h3 className="text-center d-none d-lg-block mt-2" style={{ fontWeight: "400" }}>Bridal Lehenga Choli
                    </h3>
                    <h3 className="text-start font-bold d-lg-none my-3 ms-2 mt-4">Bridal Lehenga Choli</h3>
                    <p className="text-center font-italic d-none d-lg-block"><i> "Embrace the festival magic, let joy fill every moment."</i></p>
                </div>
                <Row className="px-lg-5 px-xl-5 px-xxl-5">
                    <Slider {...settings} className="bg-white">
                        {BridalData.map((product) => (
                            <Col xs={12} sm={6} md={3} lg={4} xl={4} xxl={4} key={product.id}>
                                <Link to={`/product/${productNameSlug(product.product_name)}`} className="new-arrival-card text-decoration-none">
                                    {/* Product Image Section */}
                                    <div className="bridal-image-container rounded">
                                        <img
                                            src={product.product_images}
                                            className="slider-image bridal-img"
                                            alt={product.product_name}
                                        />
                                        <div className="overlay-buttons">
                                            <button className="add-to-cart-btn" onClick={handleAddToCart}>
                                                SHOP NOW
                                            </button>
                                        </div>
                                    </div>
                                </Link>
                            </Col>
                        ))}
                    </Slider>
                </Row>
            </Container>
        </div >
    );
}

export default BridalLahegaCholi;

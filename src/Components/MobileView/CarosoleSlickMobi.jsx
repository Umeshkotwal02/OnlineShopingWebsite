import React from "react";
import Slider from "react-slick";
// import "../../styles/CarosoleSilckMobi.css";
import { Container, Row } from "react-bootstrap";

// Custom Next Arrow Component
const NextArrow = ({ onClick }) => {
    return (
        <div className="custom-arrow next-arrow d-none d-lg-block" onClick={onClick}>
            <img
                src="/assets/images/Carasole-Img/sidechange-next.png"
                className="img-fluid"
                alt="Next"
            />
        </div>
    );
};

// Custom Previous Arrow Component
const PrevArrow = ({ onClick }) => {
    return (
        <div className="custom-arrow prev-arrow d-none d-lg-block" onClick={onClick}>
            <img
                src="/assets/images/Carasole-Img/sidechange-prev.png"
                className="img-fluid"
                alt="Previous"
            />
        </div>
    );
};

const CarosoleSlickMobi = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        dots: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    // Array of images
    const images = [
        "/assets/images/Carasole-Img/Carousel-1.png",
        "/assets/images/Carasole-Img/Carousel-2.png",
        "/assets/images/Carasole-Img/Carousel-3.png",
    ];

    return (
        <Container fluid className="slider-wrapper p-3 d-lg-none">
            <Row>
                <Slider {...settings}>
                    {images.map((image, index) => (
                        <div key={index} className="slider-item">
                            <img
                                src={image}
                                alt={`Slide ${index + 1}`}
                                className="slider-image imf-fluid"
                            />
                        </div>
                    ))}
                </Slider>
            </Row>
        </Container>
    );
};

export default CarosoleSlickMobi;

import React from "react";
import Slider from "react-slick";
import "../../styles/CarosoleSilck.css";
import { Container, Row } from "react-bootstrap";

// Custom Next Arrow Component
const NextArrow = ({ onClick }) => {
    return (
        <div className="custom-arrow next-arrow d-none d-lg-block " onClick={onClick}>
            <img
                src={require("../../assets/images/Carasole-Img/sidechange-next.png")}
                className="img-fluid"
                alt="Next"
            />
        </div>
    );
};

// Custom Previous Arrow Component
const PrevArrow = ({ onClick }) => {
    return (
        <div className="custom-arrow prev-arrow d-none d-lg-block " onClick={onClick}>
            <img
                src={require("../../assets/images/Carasole-Img/sidechange-prev.png")}
                className="img-fluid"
                alt="Previous"
            />
        </div>
    );
};

const CarosoleSilckSlider = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,  // Only one slide at a time
        slidesToScroll: 1,
        autoplay: true, 
        autoplaySpeed: 3000,
        dots: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        adaptiveHeight: false,
        adaptiveWidth: false,
        focusOnSelect: true,
    };
    

    // Array of images
    const images = [
        require("../../assets/images/Carasole-Img/Carousel-1.png"),
        require("../../assets/images/Carasole-Img/Carousel-2.png"),
        require("../../assets/images/Carasole-Img/Carousel-3.png"),
    ];

    return (
        <Container fluid className=" d-none d-lg-block CarosoleSlickSlider py-3 px-lg-5 px-xl-5 px-xxl-5">
            <Row>
                <Slider {...settings} className="h-100 w-100">
                    {images.map((image, index) => (
                        <div key={index} className="slider-item h-100 w-100">
                            <img
                                src={image}
                                alt={`Slide ${index + 1}`}
                                className="Carosole-slider-image"
                            />
                        </div>
                    ))}
                </Slider>
            </Row>
        </Container>
    );
};

export default CarosoleSilckSlider;

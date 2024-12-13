import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CategoryPrevNextIcon, CategorySlickNextIcon } from "../../assets/SvgIcons";
import "../../styles/ShopByCategorySlick.css";
import { sliderItems } from "../../config/ConstantData";
import { Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

// Custom Next Arrow Component
const NextCatArrow = ({ onClick }) => {
    return (
        <div className="custom-arrow next-arrow" onClick={onClick}>
            <CategorySlickNextIcon />
        </div>
    );
};

// Custom Previous Arrow Component
const PrevCatArrow = ({ onClick }) => {
    return (
        <div className="custom-arrow prev-arrow" onClick={onClick}>
            <CategoryPrevNextIcon />
        </div>
    );
};

const ShopByCategorySlick = () => {
    // Slick slider settings
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 1000,
        nextArrow: <NextCatArrow />,
        prevArrow: <PrevCatArrow />,
    };

    return (
        <Container fluid className="ShopByCategorySlick slider-container p-2">
            <Slider {...settings}>
                {sliderItems.map((item) => (
                    <div key={item.id} className="text-center ctgBanner">
                        <img src={item.image} alt={item.text} />
                        <div className='boxShade'></div>
                        <div className='inCtgBanner'>
                            <h2 className='mb-2 mb-sm-4'>{item.text}</h2>
                        </div>
                    </div>
                ))}
            </Slider>
        </Container>
    );
};

export default ShopByCategorySlick;

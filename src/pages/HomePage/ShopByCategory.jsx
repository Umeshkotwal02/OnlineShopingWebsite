import React from "react";
import Slider from "react-slick";
import { CategoryPrevNextIcon, CategorySlickNextIcon } from "../../assets/SvgIcons";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../styles/ShopbyCatCard.css"
import "../../styles/ShopByCategorySlick.css";
import CategoryCustomCard from "./CategoryCustomCard";

const sliderItems = [
    {
        id: 1,
        image: require("../../assets/images/CategoryByShopSlicks/Crush.png"),
        text: "Crush(Pleated) Work"
    },
    {
        id: 2,
        image: require("../../assets/images/CategoryByShopSlicks/lahenga.png"),
        text: "Lehenga Saree"
    },
    {
        id: 3,
        image: require("../../assets/images/CategoryByShopSlicks/DesignerSaree.png"),
        text: "Designer Saree"
    },
    {
        id: 4,
        image: require("../../assets/images/CategoryByShopSlicks/Printed.png"),
        text: "Printed Embroidered "
    },
    {
        id: 5,
        image: require("../../assets/images/CategoryByShopSlicks/FloralSaree.png"),
        text: "Floral Saree"
    },
    {
        id: 6,
        image: require("../../assets/images/CategoryByShopSlicks/Crush.png"),
        text: "Celebrity Outfits"
    },
    {
        id: 7,
        image: require("../../assets/images/CategoryByShopSlicks/lahenga.png"),
        text: "Reception"
    },
    {
        id: 8,
        image: require("../../assets/images/CategoryByShopSlicks/DesignerSaree.png"),
        text: "OTHERs"
    },
];

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
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        nextArrow: <NextCatArrow />,
        prevArrow: <PrevCatArrow />
    };

    const productNameSlug = (name) => name.replace(/\s+/g, "-").toLowerCase();

    return (
        <Container fluid className="shop-by-category-slick slider-container h-100 w-100 px-lg-5 px-xl-5 px-xxl-5 ">
            <Row>
                <Col xxl={2} xl={2} lg={2} className="m-0">
                    {/* Render the custom card at the start */}
                    <div className="static-category-card">
                        <CategoryCustomCard />
                    </div>

                </Col>
                <Col xxl={10} xl={10} lg={10} className="p-0 m-0">
                    {/* Render the slider */}
                    <Slider {...settings}>
                        {sliderItems.map((product) => (
                            <div key={product.id}>
                                <Link
                                    to={`/product/${productNameSlug(product.text)}`}
                                    className="shop-by-category-card text-decoration-none"
                                >
                                    <div className="position-relative w-100 h-100">
                                        <img
                                            src={product.image}
                                            className="slider-image py-lg-2"
                                            alt={product.text}
                                            loading="lazy"
                                        />
                                        <div className="image-overlay position-absolute d-flex align-items-end justify-content-center pb-3">
                                            <p className="overlay-text text-white text-center" style={{ fontFamily: "KaushanScript" }}>{product.text}</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </Slider>
                </Col>
            </Row>
        </Container>
    );
};

export default ShopByCategorySlick;

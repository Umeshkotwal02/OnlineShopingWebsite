import React from "react";
import Slider from "react-slick";
import { Link, useNavigate } from "react-router-dom";
import NewArrivalOfferCard from "./NewArrivalOfferCard";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "../../styles/NewOnOnlineSwiper.css";
import { Container, Row, Col } from "react-bootstrap";

const NewOnOnlineSwiper = () => {
  const navigate = useNavigate();

  // Static data
  const staticData = [
    {
      product_name: "Lavender Georgette",
      product_image: require('../../assets/images/NewOnOnline/img1.png'),
      product_discount: "20",
    },
    {
      product_name: "Lavender Georgette",
      product_image: require('../../assets/images/NewOnOnline/img2.png'),
      product_discount: "40",
    },
    {
      product_name: "Lavender Georgette",
      product_image: require('../../assets/images/NewOnOnline/img3.png'),
      product_discount: "40",
    },
    {
      product_name: "Lavender Georgette",
      product_image: require('../../assets/images/NewOnOnline/img4.png'),
      product_discount: "40",
    },
    {
      product_name: "Lavender Georgette",
      product_image: require('../../assets/images/NewOnOnline/img5.png'),
      product_discount: "40",
    },
    {
      product_name: "Lavender Georgette",
      product_image: require('../../assets/images/New-Arrive/img1.png'),
      product_discount: "40",
    },
  ];

  const handleNavigate = () => {
    navigate("/product-page");
  };

  // Slick Slider settings
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <FaAngleRight className="slick-arrow-right" />,
    prevArrow: <FaAngleLeft className="slick-arrow-left" />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
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
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
    ],
  };

  return (

    <div className="new-on-kapoor-swiper px-lg-5 px-xl-5 px-xxl-5 new-onKapoor-background-gradient ">
      <div className="d-none d-lg-block">
        <h3 className="text-center font-normal fs-3 pt-3" style={{ paddingBottom: "0px" }}>New on Online Shop</h3>
        <p className="text-center"><i>"Find Everything For Your Every Need"</i></p>
      </div>
      <Row>
        <Col xxl={2} xl={2} lg={2} className="px-2 d-none d-lg-block ">
          <div >
            <Link
              to={`/product/`}
              className="shop-by-category-card text-decoration-none"
            >
              <div className="position-relative w-100 h-100  rounded">
                <img
                  src={require(("../../assets/images/NewOnOnline/newarrive.png"))}
                  className="staic-slider-image"
                  alt={"New Arrive Product"}
                  loading="lazy"
                  style={{height:"320px"}}
                />
              </div>
            </Link>
          </div>
        </Col>
        <Col xxl={10} xl={10} lg={10} className="p-0 m-0">
          {/* Slider Component */}
          <Slider {...settings}>
            {staticData.map((item, index) => (
              <div key={"newOnKapoor-" + index} className="slick-slide-container swiper-slide-container ">
                <NewArrivalOfferCard itemInfo={item} />
              </div>
            ))}
          </Slider>
        </Col>
      </Row>
    </div>

  );
};

export default NewOnOnlineSwiper;

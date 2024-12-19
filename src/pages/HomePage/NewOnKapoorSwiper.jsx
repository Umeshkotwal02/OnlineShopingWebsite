import React from "react";
import Slider from "react-slick";
import { Link, useNavigate } from "react-router-dom";
import NewArrivalOfferCard from "./NewArrivalOfferCard";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { RightAngle } from "../../assets/SvgIcons";
import "../../styles/NewOnKapoorSwiper.css";

const NewOnKapoorSwiper = () => {
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
      product_name: "Party Wear Dress",
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
    <div className="new-on-kapoor-swiper px-lg-5 px-xl-5 px-xxl-5">
   

      {/* Slider Component */}
      <Slider {...settings}>
        {staticData.map((item, index) => (
          <div key={"newOnKapoor-" + index} className="slick-slide-container swiper-slide-container ">
            <NewArrivalOfferCard itemInfo={item} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NewOnKapoorSwiper;

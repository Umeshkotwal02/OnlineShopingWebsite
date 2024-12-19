import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import "../../styles/watchShopCard.css";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick"; // Import React Slick
import { CategoryPrevNextIcon, CategorySlickNextIcon } from "../../assets/SvgIcons";

const WatchShopCard = ({ productInfo }) => {
    const [play, setPlay] = useState(false);

    const handleMouseEnter = () => setPlay(true);
    const handleMouseLeave = () => setPlay(true);

    return (
        <div
            className="watch-shop-card"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Video Container */}
            <div className="video-container">
                <ReactPlayer
                    url={productInfo.product_video_url}
                    playing={play}
                    loop
                    muted
                    width="100%"
                    height="auto"
                    className="react-video"
                />
            </div>

            {/* Badge Section */}
            <div className="badge-container">
                <img
                    src={productInfo.small_image || ""}
                    alt="Product"
                />
            </div>

            {/* Product Info Section */}
            <Link to={`/product/${productInfo.id}/${productInfo.product_name}`} className="product-link">
                <div className="product-info">
                    <h3>{productInfo.product_name}</h3>
                    <div className="price">₹{productInfo.product_price}</div>
                </div>
            </Link>
        </div>
    );
};

// Static data example
const productData = [
    {
        id: "1",
        product_name: "Ruffle Lehenga With Crop Top",
        product_price: "1,999 - ₹5,999",
        product_video_url: "https://www.koskii.com/cdn/shop/files/quinn_Qd2F4EqIl5KtZdCoJ2m53.mp4",
        small_image: "https://cdn.shopify.com/s/files/1/0049/3649/9315/files/koskii-wine-swarovski-semicrepe-designer-saree-saus0029624_wine_4_cec7ec12-04e9-469d-b993-d046a0f61ee1_200x200.jpg?v=1710161670",
    },
    {
        id: "2",
        product_name: "Ruffle Lehenga With Crop Top",
        product_price: "1,999 - ₹5,999",
        product_video_url: "https://www.koskii.com/cdn/shop/files/quinn_t32uuhxkdsw44jxao3ifkisl.mp4",
        small_image: "https://cdn.shopify.com/s/files/1/0049/3649/9315/files/koskii-navy-blue-swarovski-semi-crepe-designer-saree-saus0017312_navy_blue_1_594227a8-c285-4637-ad30-b18091eebc66_200x200.jpg?v=1689751227",
    },
    {
        id: "3",
        product_name: "Ruffle Lehenga With Crop Top",
        product_price: "1,999 - ₹5,999",
        product_video_url: "https://www.koskii.com/cdn/shop/files/quinn_fpDadFFBq1o6TadfeVVbg.mp4",
        small_image: "https://cdn.shopify.com/s/files/1/0049/3649/9315/files/koskii-wine-swarovski-semicrepe-designer-saree-saus0029624_wine_4_cec7ec12-04e9-469d-b993-d046a0f61ee1_200x200.jpg?v=1710161670",
    },
    {
        id: "4",
        product_name: "Ruffle Lehenga With Crop Top",
        product_price: "1,999 - ₹5,999",
        product_video_url: "https://www.koskii.com/cdn/shop/files/quinn_xrwczuptre1zumxwhojw2l6i.mp4",
        small_image: "https://cdn.shopify.com/s/files/1/0049/3649/9315/files/koskii-wine-swarovski-semicrepe-designer-saree-saus0029624_wine_4_cec7ec12-04e9-469d-b993-d046a0f61ee1_200x200.jpg?v=1710161670",
    },
    {
        id: "5",
        product_name: "Ruffle Lehenga With Crop Top",
        product_price: "1,999 - ₹5,999",
        product_video_url: "https://www.koskii.com/cdn/shop/files/quinn_b8nskjdd37lrkx8kk4ol7a19.mp4",
        small_image: "https://cdn.shopify.com/s/files/1/0049/3649/9315/files/koskii-wine-swarovski-semicrepe-designer-saree-saus0029624_wine_4_cec7ec12-04e9-469d-b993-d046a0f61ee1_200x200.jpg?v=1710161670",
    },
    {
        id: "6",
        product_name: "Ruffle Lehenga With Crop Top",
        product_price: "1,999 - ₹5,999",
        product_video_url: "https://www.koskii.com/cdn/shop/files/quinn_eebme1xxxy977oxtfcs29pnu.mp4",
        small_image: "https://cdn.shopify.com/s/files/1/0049/3649/9315/files/koskii-wine-swarovski-semicrepe-designer-saree-saus0029624_wine_4_cec7ec12-04e9-469d-b993-d046a0f61ee1_200x200.jpg?v=1710161670",
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
const WatchShopCardDemo = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: <NextCatArrow />,
        prevArrow: <PrevCatArrow />,
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
        <Container fluid className="watch-shop-card px-lg-5 px-xl-5 px-xxl-5 px-sm-0">
            <h2 className="text-center">Watch and Shop</h2>
            <p className="text-center">"Embrace the festival magic, let joy fill every moment."</p>
            <Slider {...settings}>
                {productData.map((product) => (
                    <div key={product.id}>
                        <WatchShopCard productInfo={product} />
                    </div>
                ))}
            </Slider>
        </Container>
    );
};



export default WatchShopCardDemo;

import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import Slider from "react-slick";
import "../../styles/watchShopCard.css";

const productData = [
    {
        id: "1",
        product_name: "Ruffle Lehenga With Crop Top",
        product_price: "₹1,999 - ₹5,999",
        product_image: "https://cdn.shopify.com/s/files/1/0049/3649/9315/files/koskii-wine-swarovski-semicrepe-designer-saree-saus0029624_wine_4_cec7ec12-04e9-469d-b993-d046a0f61ee1.jpg?v=1710161670",
    },
    {
        id: "2",
        product_name: "Ruffle Lehenga With Crop Top",
        product_price: "₹1,999 - ₹5,999",
        product_image: "https://cdn.shopify.com/s/files/1/0049/3649/9315/files/koskii-navy-blue-swarovski-semi-crepe-designer-saree-saus0017312_navy_blue_1_594227a8-c285-4637-ad30-b18091eebc66.jpg?v=1689751227",
    },
    // Add more products here
];

const WatchShopCardDemo = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const sliderSettings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        centerMode: true,
        centerPadding: "0px",
    };

    const handleOpenModal = (index) => {
        setSelectedIndex(index);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <div className="watch-shop-container">
            <div className="product-list">
                {productData.map((product, index) => (
                    <div
                        key={product.id}
                        className="product-card"
                        onClick={() => handleOpenModal(index)}
                    >
                        <img
                            src={product.product_image}
                            alt={product.product_name}
                            className="product-thumbnail"
                        />
                        <h3>{product.product_name}</h3>
                        <p>{product.product_price}</p>
                    </div>
                ))}
            </div>

            {/* Modal */}
            <Modal
                show={isModalOpen}
                onHide={handleCloseModal}
                centered
                className="custom-modal"
            >
                <div className="custom-modal-body">
                    <Slider {...sliderSettings} initialSlide={selectedIndex}>
                        {productData.map((product) => (
                            <div key={product.id} className="slider-item">
                                <img
                                    src={product.product_image}
                                    alt={product.product_name}
                                    className="modal-image"
                                />
                                <div className="overlay-text">
                                    <p>Shop Now</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                    <button className="close-btn" onClick={handleCloseModal}>
                        ✕
                    </button>
                </div>
            </Modal>
        </div>
    );
};

export default WatchShopCardDemo;




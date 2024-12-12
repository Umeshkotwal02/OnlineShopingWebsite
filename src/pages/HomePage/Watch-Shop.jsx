import React from "react";
import { Card } from "react-bootstrap";
import "./ProductCard.css"; // Custom CSS file for additional styling

const productData = [
    {
        id: 1,
        link: "/product/604/Bright Red Ethnic Bridal Lehenga Choli",
        videoSrc: "https://www.koskii.com/cdn/shop/files/quinn_w4pxxur5fpkxpr78lr18u5q1.mp4#t=0.1",
        badgeImg: "/images/company-badge.png",
        mainImg: "https://kapoorlehengasaree.com/admin/multiple_image/no_image.png",
        title: "Bright Red Ethnic Bridal Lehenga Choli",
        price: "₹11995",
    },
    {
        id: 2,
        link: "/product/604/Bright Red Ethnic Bridal Lehenga Choli",
        videoSrc: "https://www.koskii.com/cdn/shop/files/quinn_w4pxxur5fpkxpr78lr18u5q1.mp4#t=0.1",
        badgeImg: "/images/company-badge.png",
        mainImg: "https://kapoorlehengasaree.com/admin/multiple_image/no_image.png",
        title: "Bright Red Ethnic Bridal Lehenga Choli",
        price: "₹11995",
    },
];

const ProductCard = () => {
    return (
        <div className="product-card-container">
            {productData.map((product) => (
                <Card key={product.id} className="custom-card">
                    <div className="video-container">
                        <iframe
                            allowFullScreen=""
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            title="Product video"
                            src={product.videoSrc}
                            className="product-video"
                        />
                        <img
                            src={product.mainImg}
                            alt="Product Thumbnail"
                            className="product-overlay-image h-full w-full object-cover"
                        />
                    </div>
                    <Card.Body className="card-body">
                        <Card.Title className="card-title text-truncate">{product.title}</Card.Title>
                        <Card.Text className="card-price">{product.price}</Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
};

export default ProductCard;

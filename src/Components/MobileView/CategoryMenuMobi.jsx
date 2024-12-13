import React from "react";
import { Card, Image } from "react-bootstrap";

const menuItems = [
  {
    name: "Sale",
    image: "/assets/images/CateMobi/img-1.png",
  },
  {
    name: "New Arrivals",
    image: "/assets/images/CateMobi/img-2.png",
  },
  {
    name: "Half Saree",
    image: "/assets/images/CateMobi/img-5.png",
  },
  {
    name: "Fashion Saree",
    image: "/assets/images/CateMobi/img-4.png",
  },
  {
    name: "Lehenga",
    image: "/assets/images/CateMobi/img-3.png",
  },
  {
    name: "Gown",
    image: "/assets/images/CateMobi/img-1.png",
  },
  {
    name: "Wedding",
    image: "/assets/images/CateMobi/img-1.png",
  },
  {
    name: "Celebrity Outfits",
    image: "/assets/images/CateMobi/img-1.png",
  },
  {
    name: "Occasions",
    image: "/assets/images/CateMobi/img-1.png",
  },
  {
    name: "Engagement",
    image: "/assets/images/CateMobi/img-1.png",
  },
  {
    name: "Reception",
    image: "/assets/images/CateMobi/img-1.png",
  },
  {
    name: "Others",
    image: "/assets/images/CateMobi/img-1.png",
  },
];

const CategoryMenuMobi = () => {
  return (
    <div
      style={{
        overflowX: "auto",
        display: "flex",
        flexWrap: "nowrap",
        scrollbarWidth: "none",
      }}
      className="hide-scrollbar d-lg-none p-2"
    >
      {menuItems.map((item, index) => (
        <div
          key={index}
          className="m-1"
          style={{
            textAlign: "center",
            flexShrink: 0,
          }}
        >
          <Card.Body>
            <Image
              src={item.image}
              roundedCircle
              width={80}
              height={80}
              className="border-none"
              alt="mobile-categoty-image"
            />
            <Card.Text className="fw-bold" style={{ fontFamily: "Roboto" }}>
              {item.name}
            </Card.Text>
          </Card.Body>
        </div>
      ))}
    </div>
  );
};

export default CategoryMenuMobi;

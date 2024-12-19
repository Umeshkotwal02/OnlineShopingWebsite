import React from "react";
import { Card, Button } from "react-bootstrap";
import { GoDownload } from "react-icons/go";
import "../styles/CategoryCard.css";
import { FaRegHeart } from "react-icons/fa";

const imageData = [
  {
    category_name: "Category 1",
    catelog: "/assets/images/New-Arrive/img1.png",
    image: require("../assets/images/CategoryByShopSlicks/ShopByCategoryBg.png"),

  },
  {
    category_name: "Category 2",
    catelog: "/path/to/catalog2.pdf",
    image: "/path/to/image2.jpg",
    catelog: "/assets/images/New-Arrive/img1.png",
    image: "/assets/images/New-Arrive/img1.png",
  },
  {
    category_name: "Category 3",
    catelog: "/assets/images/CategoryByShopSlicks/NEW ARRIVAL.png",
    image: "/path/to/image3.jpg",
  },
  {
    category_name: "Category 4",
    catelog: "/assets/images/CategoryByShopSlicks/NEW ARRIVAL.png",
    image: "/path/to/image3.jpg",
  },
  {
    category_name: "Category 5",
    catelog: "/path/to/catalog3.pdf",
    image: "/path/to/image3.jpg",
  },
  {
    category_name: "Category 6",
    catelog: "/path/to/catalog3.pdf",
    image: "/path/to/image3.jpg",
  },
  {
    category_name: "Category 7",
    catelog: "/path/to/catalog3.pdf",
    image: "/path/to/image3.jpg",
  },
];

const CategoryCard = ({
  category_name,
  catelog,
  image,
  color,
  withMargin,
  onClick,
  isLargeFont,
}) => {
  return (
    <Card
      className={`category-card  ${withMargin ? "mx-2" : ""}`}
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      <a
        target="_blank"
        className="icon-for-download"
        href={catelog}
        rel="noopener noreferrer"
      >
        <FaRegHeart />
      </a>
      <div className="div-containing-image">
        <img src={image} alt={category_name} className="img-fluid" />
      </div>
      <Button
        className="button-icon1"
        onClick={(e) => {
          e.stopPropagation();
          // Implement modal logic if needed
          alert("Modal Opened!");
        }}
      >
        ADD TO CART
      </Button>
      <p className="text-center mt-1 mb-0 fw-semibold">
        <span
          className={`text-light product-name ${
            isLargeFont ? "large-font" : "small-font"
          }`}
        >
          {category_name}
        </span>
      </p>
    </Card>
  );
};

const CategoryCardList = () => {
  return (
    <div className="d-flex flex-wrap">
      {imageData.map((data, index) => (
        <CategoryCard
          key={index}
          category_name={data.category_name}
          catelog={data.catelog}
          image={data.image}
        />
      ))}
    </div>
  );
};

export default CategoryCardList;
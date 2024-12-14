import React from "react";
import { Card, Button } from "react-bootstrap";
import { GoDownload } from "react-icons/go";
import "../styles/CategoryCard.css";

const imageData = [
  {
    category_name: "Category 1",
    catelog: "/assets/images/New-Arrive/img1.png",
    image: "../assets/images/New-Arrive/img1.png",
    color: "#FF5733",
  },
  {
    category_name: "Category 2",
    catelog: "/assets/images/New-Arrive/img1.png",
    image: "../assets/images/New-Arrive/img1.png",
    color: "#33FF57",
  },
  {
    category_name: "Category 3",
    catelog: "/assets/images/CategoryByShopSlicks/NEW ARRIVAL.png",
    image: "../path/to/image3.jpg",
    color: "#3357FF",
  },
  {
    category_name: "Category 4",
    catelog: "/assets/images/CategoryByShopSlicks/NEW ARRIVAL.png",
    image: "/path/to/image3.jpg",
    color: "#3357FF",
  },
  {
    category_name: "Category 5",
    catelog: "/path/to/catalog3.pdf",
    image: "/path/to/image3.jpg",
    color: "#3357FF",
  },
  {
    category_name: "Category 6",
    catelog: "/path/to/catalog3.pdf",
    image: "/path/to/image3.jpg",
    color: "#3357FF",
  },
  {
    category_name: "Category 7",
    catelog: "/path/to/catalog3.pdf",
    image: "/path/to/image3.jpg",
    color: "#3357FF",
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
        <GoDownload />
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
          color={data.color}
        />
      ))}
    </div>
  );
};

export default CategoryCardList;

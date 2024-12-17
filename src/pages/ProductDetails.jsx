import React from "react";
import { useParams, Link } from "react-router-dom";

const productsData = [
  { id: 1, name: "Wedding Lehenga", description: "Beautiful wedding lehenga", price: "$299", image: "https://via.placeholder.com/300" },
  { id: 2, name: "Bridal Lehenga", description: "Elegant bridal lehenga", price: "$499", image: "https://via.placeholder.com/300" },
  { id: 3, name: "Designer Lehenga", description: "Stylish designer lehenga", price: "$399", image: "https://via.placeholder.com/300" },
];

const ProductDetails = () => {
  const { productId } = useParams();
  const product = productsData.find(p => p.id === parseInt(productId));

  if (!product) return <h2>Product not found</h2>;

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <img src={product.image} alt={product.name} style={{ width: "300px", height: "300px" }} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <h3>{product.price}</h3>
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </div>
  );
};

export default ProductDetails;

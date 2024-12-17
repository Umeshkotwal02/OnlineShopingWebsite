import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const productsData = [
  { id: 1, name: "Wedding Lehenga", category: "wedding-lehenga", price: "$299", image: "https://via.placeholder.com/200" },
  { id: 2, name: "Bridal Lehenga", category: "bridal-lehenga", price: "$499", image: "https://via.placeholder.com/200" },
  { id: 3, name: "Designer Lehenga", category: "designer-lehenga", price: "$399", image: "https://via.placeholder.com/200" },
];

const ProductPage = () => {
  const { category } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Filter products based on category from the URL
    const filtered = productsData.filter(product => product.category === category);
    setFilteredProducts(filtered);
  }, [category]);

  return (
    <div>
      <h2>Products in Category: {category.replace("-", " ")}</h2>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {filteredProducts.map(product => (
          <div key={product.id} style={{ border: "1px solid #ccc", padding: "10px", textAlign: "center" }}>
            <img src={product.image} alt={product.name} style={{ width: "200px", height: "200px" }} />
            <h4>{product.name}</h4>
            <p>{product.price}</p>
            <Link to={`/products/details/${product.id}`}>
              <button>View Details</button>
            </Link>
          </div>
        ))}
        {filteredProducts.length === 0 && <p>No products found for this category.</p>}
      </div>
    </div>
  );
};

export default ProductPage;

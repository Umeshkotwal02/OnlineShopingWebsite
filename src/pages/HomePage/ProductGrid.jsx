import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa6";
import { TbHeartPlus } from "react-icons/tb";

// Mock data for products
const productData = [
  {
    id: 1,
    product_name: "Elegant Dress",
    product_images: ["assets/images/amzon.jpg", "/images/dress2.jpg"],
    product_price: 1500,
    product_mrp: 2000,
    product_discount: 25,
    currency: "₹",
    is_wishlist: false,
  },
  {
    id: 2,
    product_name: "Casual Shirt",
    product_images: ["/images/shirt1.jpg", "/images/shirt2.jpg"],
    product_price: 800,
    product_mrp: 1000,
    product_discount: 20,
    currency: "₹",
    is_wishlist: true,
  },
];

const ProductImageSlider = ({ imageList }) => (
  <div>
    <img
      src={imageList[0]}
      alt="Product"
      className="w-full h-full object-cover"
    />
  </div>
);

const NewArrivalCard = ({ info }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    setIsWishlisted(info?.is_wishlist);
  }, [info]);

  const handleAddToCartClick = (id) => {
    console.log("Add to Cart clicked for Product ID:", id);
    alert("Product added to cart!");
  };

  const truncateProductName = (name) => {
    if (name.length > 18) {
      return name.substring(0, 18) + "...";
    }
    return name;
  };

  return (
    <Link to={`/product/${info?.id}`}>
      <div className="group transition hover:shadow-[0px_0px_30px_0px_#0000004D] ">
        <div className="aspect-[2/3] relative">
          <div className="h-full bg-no-repeat bg-left-top">
            <ProductImageSlider imageList={info?.product_images} />
          </div>
          <div className="absolute z-10 left-0 bottom-2.5 w-full px-4 opacity-0 transition group-hover:opacity-100">
            <button
              className="w-full border-none text-xs font-normal px-4 py-2 bg-white text-black block text-center uppercase border hover:bg-[#E9B159] rounded"
              type="button"
              onClick={(e) => {
                e.preventDefault();
                handleAddToCartClick(info?.id);
              }}
            >
              ADD TO CART
            </button>
          </div>
          <div className="absolute right-2 top-5 z-20">
            {isWishlisted ? (
              <button
                type="button"
                className="flex items-center justify-center bg-white p-2 rounded-full"
                onClick={(e) => {
                  e.preventDefault();
                  setIsWishlisted(false);
                  alert("Removed from wishlist!");
                }}
              >
                <FaHeart className="text-[#FF3F3F] text-lg" />
              </button>
            ) : (
              <button
                type="button"
                className="flex items-center justify-center bg-white p-2 rounded-full"
                onClick={(e) => {
                  e.preventDefault();
                  setIsWishlisted(true);
                  alert("Added to wishlist!");
                }}
              >
                <TbHeartPlus className="text-black text-lg" />
              </button>
            )}
          </div>
          {info?.product_discount > 0 && (
            <div className="absolute z-10 right-1 -top-[6px]">
              <div
                className="grid place-content-center w-[61px] h-[42px] bg-no-repeat bg-cover text-center"
                style={{ backgroundImage: "url(/images/offer-card-bg.png)" }}
              >
                <h5 className="text-xs font-black text-white">
                  {info?.product_discount}%
                </h5>
                <span className="text-[8px] font-semibold text-white">
                  DISCOUNT
                </span>
              </div>
            </div>
          )}
        </div>
        <div className="p-2.5">
          <h3 className="text-sm font-normal capitalize">
            {truncateProductName(info?.product_name)}
          </h3>
          <div className="flex items-center gap-2">
            <span className="text-xs line-through text-gray-500">
              {info?.currency}
              {info?.product_mrp}
            </span>
            <span className="text-sm font-semibold text-[#03A685]">
              {info?.currency}
              {info?.product_price}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

const ProductGrid = () => (
  <div className="grid grid-cols-2 gap-4">
    {productData.map((product) => (
      <NewArrivalCard key={product.id} info={product} />
    ))}
  </div>
);

export default ProductGrid;

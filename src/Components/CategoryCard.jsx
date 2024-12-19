  import React, { useState } from "react";
  import { Link, useNavigate } from "react-router-dom";

  const CategoryCard = ({ info }) => {
    const [imageError, setImageError] = useState(false);
    const navigate = useNavigate();
    
    const isValidImage = info?.category_web_image && typeof info?.category_web_image === "string";

    return (
      <Link
        to="javascript:void(0);"
        onClick={() => {
          navigate("/product-page", {
            state: { category: [info?.id] },
          });
        }}
      >
        <div className="relative h-full overflow-hidden">
          {isValidImage && !imageError ? (
            <div className="aspect-[9/12] h-full max-w-full group">
              <img
                src={info?.category_web_image || "/images/product-img.png"}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                alt=""
                loading="lazy"
                onError={() => setImageError(true)}
              />
            </div>
          ) : (
            <div className="aspect-[9/12] h-full max-w-full bg-gray-200"></div>
          )}
          <div className="absolute left-0 bottom-0 w-full text-center bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.88)_100%)] pt-[27px] pb-3 px-2">
            <h3 className="text-lg sm:text-xl font-regular leading-[29px] text-white font-Kaushan">
              {info?.category_name}
            </h3>
          </div>
        </div>
      </Link>
    );
  };

  export default CategoryCard;

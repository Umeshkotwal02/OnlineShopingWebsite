import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../styles/ProductImageSlider.css";

const ProductImageSlider = ({ imageList }) => {
  const id = Date.now();
  const nextClassName = `swiper-button-next-${id}`;
  const prevClassName = `swiper-button-prev-${id}`;

  return (
    <div className="product-slider-container">
      <button className={`slider-button slider-button-prev ${nextClassName}`}>
        <FaAngleLeft className="icon-lg" />
      </button>
      <button className={`slider-button slider-button-next ${prevClassName}`}>
        <FaAngleRight className="icon-lg" />
      </button>
      <Swiper
        className="product-image-slider"
        spaceBetween={0}
        slidesPerView={1}
        centeredSlides
        navigation={{
          nextEl: "." + prevClassName,
          prevEl: "." + nextClassName,
        }}
        pagination={{
          clickable: false,
        }}
        modules={[Navigation, Pagination]}
        loop
        autoplay={{
          delay: 1000,
        }}
      >
        {imageList?.map((image, index) => {
          return (
            <SwiperSlide key={"productImage-" + index} className="slider-slide rounded">
              <div className="slider-image-container">
                <img
                  src={image}
                  className="slider-image rounded"
                  alt=""
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ProductImageSlider;

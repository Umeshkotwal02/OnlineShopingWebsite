import React, { useState, useRef } from "react";
import {
  FaAngleDown,
  FaAngleLeft,
  FaAngleRight,
  FaAngleUp,
} from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/pagination";
import { FreeMode, Navigation, Thumbs, Pagination } from "swiper/modules";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductDetailsSlider = () => {
  const images = [
    "https://s3-alpha-sig.figma.com/img/f0c0/a2ec/d46520918fa3c04cc6bfadfa0cf8f147?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M9gdkvfGNjBOOmuZjGTY4~siFW2Y~OwOc874CCR6UZxE9ep2v8dj7gzoBZDgCaJ8Ph1qNT31tYWcsWbs7FL4ae44ekVOjAc~RjG7tml9bYxW1HE05zgDZ3UqT1O6NFATo4-bk9DBg8q8~z5VGV38wwy4NoH77kMzJhz6cWrJDu8K2xIcbuz3h16wJXPkQVi527rjzoalOXZwyXPxeupC7-Hei67G1G8BT2vpuQs3muMBMSbRpwkVTyxpAFnQUgbrUVAy1l6nfiC2UvOjKtuEUtVrUvT79yOPGeFRO7r9I31b70QLbL7h2VdSus1I9WpPKOhszlrrym~9NVPymtgnEA__",
    "https://s3-alpha-sig.figma.com/img/f0c0/a2ec/d46520918fa3c04cc6bfadfa0cf8f147?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M9gdkvfGNjBOOmuZjGTY4~siFW2Y~OwOc874CCR6UZxE9ep2v8dj7gzoBZDgCaJ8Ph1qNT31tYWcsWbs7FL4ae44ekVOjAc~RjG7tml9bYxW1HE05zgDZ3UqT1O6NFATo4-bk9DBg8q8~z5VGV38wwy4NoH77kMzJhz6cWrJDu8K2xIcbuz3h16wJXPkQVi527rjzoalOXZwyXPxeupC7-Hei67G1G8BT2vpuQs3muMBMSbRpwkVTyxpAFnQUgbrUVAy1l6nfiC2UvOjKtuEUtVrUvT79yOPGeFRO7r9I31b70QLbL7h2VdSus1I9WpPKOhszlrrym~9NVPymtgnEA__",
    "https://s3-alpha-sig.figma.com/img/f0c0/a2ec/d46520918fa3c04cc6bfadfa0cf8f147?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M9gdkvfGNjBOOmuZjGTY4~siFW2Y~OwOc874CCR6UZxE9ep2v8dj7gzoBZDgCaJ8Ph1qNT31tYWcsWbs7FL4ae44ekVOjAc~RjG7tml9bYxW1HE05zgDZ3UqT1O6NFATo4-bk9DBg8q8~z5VGV38wwy4NoH77kMzJhz6cWrJDu8K2xIcbuz3h16wJXPkQVi527rjzoalOXZwyXPxeupC7-Hei67G1G8BT2vpuQs3muMBMSbRpwkVTyxpAFnQUgbrUVAy1l6nfiC2UvOjKtuEUtVrUvT79yOPGeFRO7r9I31b70QLbL7h2VdSus1I9WpPKOhszlrrym~9NVPymtgnEA__",
    "https://s3-alpha-sig.figma.com/img/f0c0/a2ec/d46520918fa3c04cc6bfadfa0cf8f147?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M9gdkvfGNjBOOmuZjGTY4~siFW2Y~OwOc874CCR6UZxE9ep2v8dj7gzoBZDgCaJ8Ph1qNT31tYWcsWbs7FL4ae44ekVOjAc~RjG7tml9bYxW1HE05zgDZ3UqT1O6NFATo4-bk9DBg8q8~z5VGV38wwy4NoH77kMzJhz6cWrJDu8K2xIcbuz3h16wJXPkQVi527rjzoalOXZwyXPxeupC7-Hei67G1G8BT2vpuQs3muMBMSbRpwkVTyxpAFnQUgbrUVAy1l6nfiC2UvOjKtuEUtVrUvT79yOPGeFRO7r9I31b70QLbL7h2VdSus1I9WpPKOhszlrrym~9NVPymtgnEA__",
  ];

  const [mainSwiper, setMainSwiper] = useState(null);
  const [thumbSwiper, setThumbSwiper] = useState(null);
  const [activeMainIndex, setActiveMainIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const zoomRef = useRef(null);

  const handleMainSlideChange = (swiper) => {
    setActiveMainIndex(swiper.activeIndex);
    if (thumbSwiper && thumbSwiper !== null) {
      const thumbSlidesInView = thumbSwiper.params.slidesPerView;
      const thumbIndexInView = swiper.activeIndex - thumbSlidesInView / 2;
      const thumbIndexMax = images.length - thumbSlidesInView;
      const newThumbIndex =
        thumbIndexInView < 0
          ? 0
          : thumbIndexInView > thumbIndexMax
          ? thumbIndexMax
          : thumbIndexInView;
      thumbSwiper.slideTo(newThumbIndex);
    }
  };

  const handleThumbClick = (index) => () => {
    mainSwiper.slideTo(index);
    setActiveMainIndex(index);
  };

  const handlePrev = () => {
    if (activeMainIndex > 0) {
      mainSwiper.slideTo(activeMainIndex - 1);
      setActiveMainIndex(activeMainIndex - 1);
    }
  };

  const handleNext = () => {
    if (activeMainIndex < images.length - 1) {
      mainSwiper.slideTo(activeMainIndex + 1);
      setActiveMainIndex(activeMainIndex + 1);
    }
  };

  const toggleZoom = () => setIsZoomed(!isZoomed);

  const handleMouseMove = (e) => {
    if (zoomRef.current && isZoomed) {
      const { left, top, width, height } =
        zoomRef.current.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;
      zoomRef.current.style.transformOrigin = `${(x / width) * 100}% ${(y / height) * 100}%`;
    }
  };

  return (
    <>
      <div className="row align-items-center">
        {/* Thumbnail Slider */}
        <div className="col-md-2 d-none d-md-block">
          <Swiper
            onSwiper={setThumbSwiper}
            spaceBetween={0}
            slidesPerView={4}
            direction="vertical"
            modules={[FreeMode, Thumbs]}
            className="h-100"
          >
            {images.map((item, index) => (
              <SwiperSlide key={index}>
                <img
                  src={item}
                  className={`img-fluid border ${
                    activeMainIndex === index ? "border-primary" : "border-transparent"
                  }`}
                  alt="thumbnail"
                  onClick={handleThumbClick(index)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="d-flex justify-content-between mt-2">
            <button className="btn btn-dark" onClick={handlePrev}>
              <FaAngleUp />
            </button>
            <button className="btn btn-dark" onClick={handleNext}>
              <FaAngleDown />
            </button>
          </div>
        </div>

        {/* Main Slider */}
        <div className="col-md-10">
          <Swiper
            onSlideChange={handleMainSlideChange}
            onSwiper={setMainSwiper}
            spaceBetween={10}
            navigation
            pagination={{ clickable: true }}
            modules={[FreeMode, Navigation, Thumbs, Pagination]}
            className="h-100"
          >
            {images.map((item, index) => (
              <SwiperSlide key={index}>
                <img
                  src={item}
                  className="img-fluid cursor-pointer"
                  alt="main"
                  onClick={() => setOpen(true)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Fullscreen Modal */}
      <div
        className={`modal fade ${open ? "show" : ""}`}
        tabIndex="-1"
        style={{ display: open ? "block" : "none" }}
        onClick={() => setOpen(false)}
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content bg-dark text-white">
            <div className="modal-body position-relative">
              <img
                ref={zoomRef}
                src={images[activeMainIndex]}
                className={`img-fluid ${isZoomed ? "zoomed" : ""}`}
                alt="zoomed"
                onClick={toggleZoom}
                onMouseMove={handleMouseMove}
                style={{ cursor: isZoomed ? "zoom-out" : "zoom-in" }}
              />
              <button
                className="btn-close btn-close-white position-absolute top-0 end-0 m-3"
                onClick={() => setOpen(false)}
              ></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsSlider;

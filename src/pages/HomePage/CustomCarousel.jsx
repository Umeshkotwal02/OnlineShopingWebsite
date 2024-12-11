import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "../../styles/Carousel.css"

const CustomCarousel1 = () => {
  return (
    <Carousel className="custom-carousel ms-4 me-4">
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src="/assets/images/Carasole-Img/Carousel-1.png"
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src="/assets/images/Carasole-Img/Carousel-1.png"
          alt="Second slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src="/assets/images/Carasole-Img/Carousel-1.png"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default CustomCarousel1;

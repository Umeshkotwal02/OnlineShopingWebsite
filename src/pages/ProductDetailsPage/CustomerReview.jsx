import React, { useState } from "react";
import { FaStar, FaTimes, FaAngleRight, FaAngleLeft } from "react-icons/fa";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Rating from "@mui/material/Rating";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "bootstrap/dist/css/bootstrap.min.css";

// Sample Static Data
const staticReviews = [
  {
    id: 1,
    user_profile: "https://s3-alpha-sig.figma.com/img/b299/8860/dc2a093734133c1a561bc35bfa1b266d?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OGR7De9jn73B9wH4cQExgxJbNID-4ut9X9YLkC~tyXny3EoycOmJYTIipyN6THlyozqz64sT5a7hvsIacFeAUtyIcm5KelUSAw7XNeOg0koh6PT24Vqayp4xbnErjsGGjnj-ZmfsCIX1EPGoZXAbrGONm26kZx7aXHeOKsuobY1LVBRhJ~CWJLQUpoDoBN102SdF70dlfz3bKDfBxdG04omN0PWY-lgVrJa6hr-o-x8Wp4iNN6op93FDzdOg2eCjsR9RaarJ1Lm8eBsa-ACjfXBr9UXx8~u51K1LtfTzdrh6ct6P9KXSoXOSb6kLhAWsqQd4rEIwo8wz5CC2ukz3Ag__",
    user_name: "Anglo Saxon",
    created_at: "25 Sep, 2023",
    product_review_star: 3,
    product_review_message: "Pink and white teardrop cut zirconia gemstones adorn this opulent jewellery set, which has been fashioned out of brass. Two tone plated and a good match.",
    review_images: [
      // require('../../assets/images/ProductDetails/img1.png'),
      // require('../../assets/images/ProductDetails/img2.png')
    ],
  },
  {
    id: 2,
    user_profile: "https://s3-alpha-sig.figma.com/img/b299/8860/dc2a093734133c1a561bc35bfa1b266d?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OGR7De9jn73B9wH4cQExgxJbNID-4ut9X9YLkC~tyXny3EoycOmJYTIipyN6THlyozqz64sT5a7hvsIacFeAUtyIcm5KelUSAw7XNeOg0koh6PT24Vqayp4xbnErjsGGjnj-ZmfsCIX1EPGoZXAbrGONm26kZx7aXHeOKsuobY1LVBRhJ~CWJLQUpoDoBN102SdF70dlfz3bKDfBxdG04omN0PWY-lgVrJa6hr-o-x8Wp4iNN6op93FDzdOg2eCjsR9RaarJ1Lm8eBsa-ACjfXBr9UXx8~u51K1LtfTzdrh6ct6P9KXSoXOSb6kLhAWsqQd4rEIwo8wz5CC2ukz3Ag__",
    user_name: "Anglo Saxon",
    created_at: "25 Sep, 2023",
    product_review_star: 3,
    product_review_message: "Pink and white teardrop cut zirconia gemstones adorn this opulent jewellery set, which has been fashioned out of brass. Two tone plated and a good match.",
    review_images: [
      require('../../assets/images/ProductDetails/img1.png'),
      require('../../assets/images/ProductDetails/img2.png')
    ],
  }
];

const CustomerReview = () => {
  const [reviews] = useState(staticReviews);
  const [openImageGallery, setOpenImageGallery] = useState(false);
  const [selectedReview, setSelectedReview] = useState({});

  const handleImageGalleryOpen = (review) => {
    setOpenImageGallery(true);
    setSelectedReview(review);
  };

  const handleImageGalleryClose = () => setOpenImageGallery(false);

  return (
    <div className="container mt-4">
      {reviews.length === 0 ? (
        <div className="text-center my-5">
          <p>No reviews available.</p>
        </div>
      ) : (
        reviews.map((data) => (
          <div key={data.id} className="d-flex mb-4">
            <div className="flex-shrink-0 me-3">
              <img
                src={data.user_profile}
                className="rounded-circle border"
                alt="User"
                width="50"
                height="50"
              />
            </div>
            <div>
              <h5>{data.user_name}</h5>
              <div className="d-flex align-items-center mb-2">
                <Rating
                  value={parseFloat(data.product_review_star).toFixed(1)}
                  readOnly
                  icon={<FaStar className="text-warning" />}
                  emptyIcon={<FaStar className="text-muted" />}
                />
                <span className="text-muted ms-2">
                  {new Date(data.created_at).toLocaleDateString()}
                </span>
              </div>
              <p>{data.product_review_message}</p>
              <div className="d-flex gap-2 mt-2">
                {data.review_images.map((media, index) => (
                  <img
                    key={index}
                    src={media}
                    alt="Review"
                    className="img-thumbnail"
                    style={{ width: "100px", height: "100px", cursor: "pointer" }}
                    onClick={() => handleImageGalleryOpen(data)}
                  />
                ))}
              </div>
            </div>
          </div>
        ))
      )}

      {/* Modal for Image Gallery */}
      <Modal
        show={openImageGallery}
        onHide={handleImageGalleryClose}
        centered
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header closeButton>
          <Modal.Title>Image Gallery</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex">
            <Swiper
              slidesPerView={1}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              modules={[Navigation]}
            >
              {selectedReview.review_images?.map((media, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={media}
                    alt={`Slide ${index}`}
                    className="w-100"
                    style={{ height: "300px", objectFit: "cover" }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-button-prev">
              <FaAngleLeft size={30} />
            </div>
            <div className="swiper-button-next">
              <FaAngleRight size={30} />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleImageGalleryClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CustomerReview;

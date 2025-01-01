import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"; // Replace with desired React icon
import { IoMdClose } from "react-icons/io";
import { Button, Col, Container, Row } from 'react-bootstrap'
import { LgBagIcon } from '../../assets/SvgIcons'
import { FaTimes } from 'react-icons/fa'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import CouponCanva from "./CouponCanva";

const BagCard = (activeTab) => {


  const items = [
    {
      id: 1,
      name: "Pink Ethnic",
      description: "Sea Green Georgette Semi-Stitched Lehenga and Unstitched Blouse with...",
      price: "₹5,400",
      originalPrice: "₹10,999",
      discount: "50% off",
      quantity: 1,
      img: "https://s3-alpha-sig.figma.com/img/7cd0/655e/1798e57a8f8db2bfd19e7f556d0f666d?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VCwRAjyroAzRPX32fVy0TPpeRFiVOBcP~WRxiKECJiCk6rFVMldRKbtp3SOvwmIBXHH5CiILxOmHIwqTg6DyZMAgXDM40sMgybmGa2MDkeX~A7-cXmKDcol-fyGb0pnz3DlPG1wRhYJREUNyIjlrqeWfY72rJEFxPc6A0rKo~Ax0TNwAcneOHXlNO0s4im7nmdaXUsHzvX1mWVedCsXZQsAlVLTLnhFckM3IfeoQxLDg0BnwcqqOxeWSMdyFA9wpUvVHGCZ6IWAHlSykvNZ-l-eHzV7oe8Fn9Vl94jadBUlWxpeJw6RrC0YI0Ux9R1UJilY6hZEu7o47COj1Qv9eqQ__",
    },
    {
      id: 2,
      name: "Attire In Pink Tone ...",
      description: "Sea Green Georgette Semi-Stitched Lehenga and Unstitched Blouse with...",
      price: "₹5,400",
      originalPrice: "₹10,999",
      discount: "50% off",
      quantity: 1,
      img: "https://s3-alpha-sig.figma.com/img/3432/c5a9/f8d0ffa14f99c130b369f4bf614526dd?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qZ-aerW-SoPaEuvC6UwglLX6ftXa5Hx95-Wj9f1diR9HKDxE59xBYx2VKLI8XzsNy3cL0vXU6R6W89O9HbgMIWJla6YCl~Nu7NQvqNUS3ywRUo3qzcJCxCsTmrqPHMde5pBUEOQsoZGHMhzoTnXORr8wW9ECQwKOA2rW0pUUa~cUVmYJlUmzc3ILMLYcKbE~qmG6TyFh05nMAkrSq~QaCPdiWq~rtvUzzkGiz1jd31425ZLs3qOQY4uedR6hygHZTI8V~YKFMzV07Op~Pzrkkp3C0aKH86NNZrd7PDPcipwSiEHl2rnWlhrlGxA~paDqhmvBxZWlAO29mtmdn5dPTw__",
    }
  ]

  const [isOpen, setIsOpen] = useState(true);
  const [showCouponCanvas, setShowCouponCanvas] = useState(false); // Address Offcanvas

  const navigate = useNavigate();

  const toggleAccordion = () => setIsOpen(!isOpen);

  const handleContinueSubmit = () => {
    navigate('/checkout-page', { state: { activeTab: 'Payment' } });
  };

  //Coupon
  const handleShowCouponCanvas = () => {
    document.body.classList.add("body-lock");
    setShowCouponCanvas(true);
  };
  const handleCloseCouponCanvas = () => {
    document.body.classList.remove("body-lock");
    setShowCouponCanvas(false);
  };

  return (
    <Container fluid>

      <Row>
        <Col>
          <div className="card border p-3 web-bg-color">
            <div className="d-flex justify-content-between align-items-center">
              <h4><LgBagIcon className="fs-2" /> Bag</h4>
              <h4>2 Items</h4>
            </div>

            {items.map((item) => (
              <div
                key={item.id}
                className="d-flex rounded mb-3 py-2 position-relative border" style={{ backgroundColor: "white", borderRadius: "10px" }}>
                <div className="px-2" style={{ borderRadius: "8px" }} >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="rounded"
                    style={{ width: "100px", objectFit: "fill", }}
                  />
                </div>
                <div className="flex-grow-1">
                  <Button
                    variant="light"
                    className="position-absolute top-0 end-0 p-1"
                    size="sm"
                  >
                    <FaTimes />
                  </Button>
                  <h5 className="m-0 fw-medium cart-para">{item.name}</h5>
                  <p className="text-muted small cart-para">{item.description}</p>
                  <div className="d-flex align-items-center gap-2">
                    <span className="fw-bold text-secondary">Qty:</span>
                    <div className="d-flex align-items-center border rounded p-1">
                      <Button variant="light" size="sm" className="p-0">
                        <FaChevronLeft className="text-secondary" />
                      </Button>
                      <span className="px-2">{item.quantity}</span>
                      <Button variant="light" size="sm" className="p-0">
                        <FaChevronRight className="text-secondary" />
                      </Button>
                    </div>
                  </div>

                  <div className="d-flex align-items-center mb-2">
                    <span className="text-success fw-bold me-2">{item.price}</span>
                    <span className="text-muted text-decoration-line-through me-2">
                      {item.originalPrice}
                    </span>
                    <span className="text-danger small">{item.discount}</span>
                  </div>

                </div>
              </div>
            ))}

            {/* ++++ Coupon Part ++++ */}
            <hr />

            <div className="accordion-container border-0 shadow-none rounded-3 my-0">
              {/* Accordion Header */}
              <div
                className={`accordion-header d-flex align-items-center justify-content-between p-3 rounded `}
                style={{ cursor: "pointer" }}
                onClick={toggleAccordion}
              >
                <div className="d-flex align-items-center gap-3">
                  <img
                    src={require("../../assets/images/coupon.png")}
                    alt="Coupon Icon"
                    className="icon"
                    style={{ width: "1.5rem" }}
                  />
                  <span className="fs-5 fw-medium">Coupon Code</span>
                </div>
                <div>
                  {isOpen ? (
                    <IoIosArrowForward size={24} className="text-dark" />
                  ) : (
                    <IoIosArrowBack size={24} className="text-dark" />
                  )}
                </div>
              </div>

              {/* Accordion Content */}
              {isOpen && (
                <div className="accordion-body rounded border-0">
                  <div className="d-flex justify-content-between align-items-center rounded-5 px-3">
                    <div style={{ width: "75%" }}>
                      <input
                        type="text"
                        className="form-control border rounded-5"
                        placeholder="Enter Coupon Code"
                      />
                    </div>
                    <div style={{ width: "20%" }}>
                      <button className="btn btn-dark  w-100 text-white fw-bold rounded-5" onClick={handleShowCouponCanvas}>
                        Apply
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>


            {/* ++++ Price Details ++++ */}
            <hr />
            <div className="mb-2">
              <div>
                <h4 className="fw-bold" style={{ fontSize: "22px", marginBottom: "12px", fontWeight: "500", lineHeight: "1", }}>
                  <HiOutlineCurrencyRupee className="fs-4" /> Price Details
                </h4>
              </div>
              <div style={{ padding: "10px" }}>
                <h5
                  style={{
                    fontSize: "20px",
                    marginBottom: "12px",
                    fontWeight: "500",
                    lineHeight: "1",
                  }}
                >
                  Price Summary
                </h5>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <p style={{ fontSize: "1.2rem", marginBottom: "0.1rem", fontWeight: "400", color: "#555555", }}>
                    Bag Total
                  </p>
                  <p style={{ fontSize: "1.2rem", marginBottom: "0.1rem", fontWeight: "400", color: "#555555" }}>
                    ₹10,800.00
                  </p>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <p style={{ fontSize: "1.2rem", marginBottom: "0.1rem", fontWeight: "400", color: "#555555" }}>
                    Coupon
                  </p>
                  <p style={{ fontSize: "1.2rem", marginBottom: "0.1rem", fontWeight: "400", color: "#555555" }}>
                    -₹800.00
                  </p>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <p style={{ fontSize: "1.2rem", marginBottom: "0.1rem", fontWeight: "400", color: "#555555" }}>
                    GST 18%
                  </p>
                  <p style={{ fontSize: "1.2rem", marginBottom: "0.1rem", fontWeight: "400", color: "#555555" }}>
                    ₹1800
                  </p>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <p
                    style={{
                      fontSize: "1.2rem", marginBottom: "0.1rem",
                      paddingTop: "10px",
                      fontWeight: "600",
                      color: "#03A685",
                    }}
                  >
                    You Pay
                  </p>
                  <p
                    style={{
                      fontSize: "1.2rem", marginBottom: "0.1rem",
                      paddingTop: "10px",
                      fontWeight: "600",
                      color: "#03A685",
                    }}
                  >
                    ₹11,800.00
                  </p>
                </div>
              </div>

              <button type="button mt-3" className="btn-payment w-100" onClick={handleContinueSubmit}>
                Continue
              </button>
            </div>
          </div>


        </Col>
      </Row>
      <CouponCanva show={showCouponCanvas} handleClose={handleCloseCouponCanvas} />

    </Container>
  )
}

export default BagCard
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Offcanvas, Row, Col, Nav } from "react-bootstrap";
import { CartIcon, OffCanvaArrowIcon } from "../../assets/SvgIcons";
import { FiSearch } from "react-icons/fi";
import "../../styles/OffCanvasForHeader.css"

const MainHeaderMobi = ({
  wishlistCount,
  searchTerm,
  handleKeyUp,
  handleChange,
  suggestions,
  handleSuggestionClick,
  showSuggestions,
}) => {

  const [showOffcanvas, setShowOffcanvas] = useState(false); // Menu Offcanvas
  const handleOffcanvasToggle = () => setShowOffcanvas(!showOffcanvas);


  return (
    <header>
      {/* Header for Small and Medium Screens Mobile and tablate view*/}
      <div className="d-lg-none container-fluid">
        <Row className="align-items-center py-1 px-0">
          <Col xs={2} className="text-start">
            <button
              className="btn fs-2"
              onClick={handleOffcanvasToggle}
              aria-label="Toggle navigation"
            >
              <img src={require("../../assets/images/offvanvaMobiCat.png")} alt="menu-btn-mobile" style={{ width: "21px" }} />
            </button>
          </Col>

          {/* Logo in the center */}
          <Col xs={8} className="text-center">
            <Link to="/">
              <img
                src={require("../../assets/images/header-logo.png")}
                alt="header-logo"
                className="img-fluid"
                style={{ maxWidth: "150px" }}
              />
            </Link>
          </Col>

          {/* Cart icon at the end */}
          <Col xs={2} className="text-end">
            <div className="btn text-dark">
              <CartIcon />
              {wishlistCount > 0 && (
                <span className="badge bg-danger">{wishlistCount}</span>
              )}
            </div>
          </Col>
        </Row>

        <Row className="justify-content-center my-2 pb-3">
          {/* Search Bar */}
          <Col
            className="d-flex justify-content-center align-items-center px-4"
          >
            <div
              className="d-flex align-items-center bg-opacity-10 px-3"
              style={{
                border: "2px solid #D3D1D1",
                borderRadius: "25px",
                width: "100%",
                backgroundColor: "#fff",
              }}
            >
              <FiSearch className="text-dark fs-3" />
              <input
                type="search"
                placeholder="Search for products..."
                className="form-control border-0 search-hover text Mobile-placeholder"
                value={searchTerm}
                onKeyDown={handleKeyUp}
                onChange={handleChange}
                style={{
                  outline: "none",
                  boxShadow: "none",
                  backgroundColor: "#fff",
                  padding: "8px 12px",
                }}
                aria-label="Search products"
              />
            </div>
            {showSuggestions && suggestions.length > 0 && (
              <div
                className="position-absolute w-100 bg-white shadow mt-1"
                style={{ maxHeight: "300px", overflowY: "auto", zIndex: 1050 }}
              >
                {suggestions.map((item) => (
                  <div
                    key={item.id}
                    className="p-2 cursor-pointer hover-bg-light"
                    onClick={() => handleSuggestionClick(item)}
                  >
                    {item.suggestion}
                  </div>
                ))}
              </div>
            )}
          </Col>
        </Row>

        {/* OffCanvas for Small Screens */}
        <Offcanvas
          show={showOffcanvas}
          onHide={handleOffcanvasToggle}
          placement="start"
          responsive="lg"
          className="offcanvas-for-header"
          style={{ width: "85%" }}
        >
          <Offcanvas.Header closeButton>
            <div className="col-10 col-md-6 col-lg-3 text-center text-md-left">
              <img
                className="offcanvas-header-logo"
                src={require("../../assets/images/MobileView/mobiheaderlogo.png")}
                alt="offcanvas-header-logo"
              />
            </div>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="d-grid align-items-center mobile-offcanvas text-capitalize">
              <Nav.Link href="/home" className="red-hover">
                <span className="pe-3"> <OffCanvaArrowIcon /> </span> Home
              </Nav.Link>
              <div className="border-bottom"></div>
              <Nav.Link href="/about-us" className="red-hover">
                <span className="pe-3"> <OffCanvaArrowIcon /> </span> About Us
              </Nav.Link>
              <div className="border-bottom"></div>

              <Nav.Link href="/my-order" className="red-hover text-dark ">
                <span className="pe-3"> <OffCanvaArrowIcon /> </span> Your Order
              </Nav.Link>
              <div className="border-bottom"></div>

              <Nav.Link href="/privacy-policy" className="red-hover  text-dark ">
                <span className="pe-3"> <OffCanvaArrowIcon /> </span> Privacy Policy
              </Nav.Link>
              <div className="border-bottom"></div>

              <Nav.Link href="/term-condition" className="red-hover  text-dark">
                <span className="pe-3"> <OffCanvaArrowIcon /> </span> Terms & Conditions
              </Nav.Link>
              <div className="border-bottom"></div>
              <Nav.Link href="/faq" className="red-hover  text-dark">
                <span className="pe-3"> <OffCanvaArrowIcon /> </span> FAQ
              </Nav.Link>
              <div className="border-bottom"></div>
              <Nav.Link href="/contact-us" className="red-hover  text-dark">
                <span className="pe-3"> <OffCanvaArrowIcon /> </span> Contact Us
              </Nav.Link>
              <div className="border-bottom"></div>
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
      </div>

    </header>
  );
}

export default MainHeaderMobi;

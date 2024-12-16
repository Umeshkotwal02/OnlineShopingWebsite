import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Offcanvas, Row, Col } from "react-bootstrap";
import { CartIcon, SearchIcon } from "../../assets/SvgIcons";
import { FiSearch } from "react-icons/fi";

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
      <div className="d-lg-none">
        <Row className="align-items-center py-1 px-0">
          <Col xs={2} className="text-start">
            <button
              className="btn fs-2"
              onClick={handleOffcanvasToggle}
              aria-label="Toggle navigation"
            >
              ☰
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
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div className="mb-3">
              <Link to="/account" className="text-dark d-block mb-2">
                Account
              </Link>
              <Link to="/account" className="text-dark d-block mb-2">
                Home
              </Link>
              <Link to="/account" className="text-dark d-block mb-2">
                About Us
              </Link>
              <Link to="/account" className="text-dark d-block mb-2">
                Blogs
              </Link>
              <Link to="/account" className="text-dark d-block mb-2">
                Careers
              </Link>
              <Link to="/account" className="text-dark d-block mb-2">
                Your Orders
              </Link>
              <Link to="/account" className="text-dark d-block mb-2">
                Enquire Now
              </Link>
              <Link to="/account" className="text-dark d-block mb-2">
                Privacy Policy
              </Link>
              <Link to="/account" className="text-dark d-block mb-2">
                Terms & Conditions
              </Link>
              <Link to="/account" className="text-dark d-block mb-2">
                Contact Us
              </Link>
              <Link to="/account" className="text-dark d-block mb-2">
                FAQ
              </Link>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </div>

    </header>
  );
}

export default MainHeaderMobi;

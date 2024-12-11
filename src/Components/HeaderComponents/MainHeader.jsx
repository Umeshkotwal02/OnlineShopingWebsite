import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Offcanvas, Button, Container, Row, Col } from "react-bootstrap";
import { AccountIcon, WishlistIcon, CartIcon, SearchIcon, LoginIcon } from "../../assets/SvgIcons";
import Menu from "./MainMenu";
import LoginOffCanvas from "./Login"; // Import your Login OffCanvas component

const Header = ({
  isLoggedIn,
  userDetails,
  userProfile,
  wishlistCount,
  handleLogout,
  handleNavigateToWishlist,
  headerButtons,
  searchTerm,
  handleKeyUp,
  handleChange,
  suggestions,
  handleSuggestionClick,
  showSuggestions,
}) => {
  const navigate = useNavigate();

  const [showOffcanvas, setShowOffcanvas] = useState(false); // Menu Offcanvas
  const [showLoginCanvas, setShowLoginCanvas] = useState(false); // Login Offcanvas
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleOffcanvasToggle = () => setShowOffcanvas(!showOffcanvas);
  const handleShowLoginCanvas = () => setShowLoginCanvas(true);
  const handleCloseLoginCanvas = () => setShowLoginCanvas(false);

  return (
    <>
        <header className="sticky-top" style={{ backgroundColor: "#F3F3F3" }}>
          <Row className="align-items-center py-2">
            {/* Logo Section */}
            <Col xl={3} xxl={3} className="d-flex align-items-center">
              <Link to="/">
                <img
                  src="/assets/images/header-logo.png"
                  alt="header-logo"
                  className="img-fluid"
                  style={{ maxWidth: "200px", backgroundColor: "white" }}
                />
              </Link>
            </Col>

            {/* Search Bar */}
            <Col xxl={5} xl={5} className="flex-grow-1 my-2">
              <div
                className="d-flex align-items-center bg-opacity-10 bg-white px-3"
                style={{
                  border: "2px solid #D3D1D1",
                  borderRadius: "25px",
                }}
              >
                <SearchIcon className="text-dark me-2" />
                <input
                  type="search"
                  placeholder="Search for products..."
                  className="form-control border-0 bg-transparent text-dark search-hover"
                  value={searchTerm}
                  onKeyDown={handleKeyUp}
                  onChange={handleChange}
                  style={{
                    outline: "none",
                    boxShadow: "none",
                    backgroundColor: "white",
                  }}
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

            {/* Icons Section */}
            <Col xxl={4} xl={4} className="d-flex justify-content-end gap-3">
              <button className="btn text-dark d-flex align-items-center gap-1">
                {isLoggedIn ? (
                  <>
                    <img
                      className="rounded-circle"
                      src={userDetails?.user_profile}
                      alt="User"
                      style={{ width: "30px", height: "30px", objectFit: "cover" }}
                    />
                    <span className="d-none d-xl-inline-block">
                      {userProfile?.user_type === "btoc"
                        ? "Account"
                        : "Wholesale Account"}
                    </span>
                  </>
                ) : (
                  <div style={{ position: "relative", display: "inline-block" }}>
                    {/* Account Button */}
                    <button
                      className="btn text-dark d-flex align-items-center gap-1"
                      onClick={toggleDropdown}
                    >
                      <AccountIcon />
                      <span className="d-none d-xl-inline-block">Account</span>
                    </button>

                    {/* Dropdown */}
                    {isOpen && (
                      <div
                        className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation8 MuiPopover-paper"
                        tabIndex="-1"
                        style={{
                          position: "absolute",
                          top: "50px",
                          left: "0",
                          background: "#fff",
                          boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
                          borderRadius: "8px",
                          zIndex: 1000,
                        }}
                      >
                        <div className="flex flex-col px-3.5">
                          <button
                            className="py-3.5 border-b border-[#D6D6D6] flex items-center gap-3.5 last:border-none text-base font-medium text-[#252525]"
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "10px",
                              width: "100%",
                              background: "none",
                              border: "none",
                              cursor: "pointer",
                              padding: "10px",
                            }}
                            onClick={handleShowLoginCanvas} // Show Login Canvas
                          >
                            <LoginIcon />
                            Login/Signup
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </button>

              <button
                className="btn text-dark d-flex align-items-center gap-1"
                onClick={handleNavigateToWishlist}
              >
                <WishlistIcon />
                {wishlistCount > 0 && (
                  <span className="badge bg-danger">{wishlistCount}</span>
                )}
                <span className="d-none d-xl-inline-block">Wishlist</span>
              </button>

              <button className="btn text-dark d-flex align-items-center gap-1">
                <CartIcon />
                {wishlistCount > 0 && (
                  <span className="badge bg-danger">{wishlistCount}</span>
                )}
                <span className="d-none d-xl-inline-block">Cart</span>
              </button>
            </Col>
            <Menu />

            {/* OffCanvas Toggle for Small Screens */}
            <div className="d-lg-none col-4">
              <Button
                variant="dark"
                className="btn-sm"
                onClick={handleOffcanvasToggle}
              >
                ☰
              </Button>
            </div>
          </Row>

          {/* Menu Section */}
          <div className="container py-2 d-none d-lg-block">
            <div className="d-flex justify-content-center">
              {headerButtons?.map((item, index) => (
                <button
                  key={index}
                  className="btn btn-link text-decoration-none text-dark"
                >
                  {item.category_name}
                </button>
              ))}
            </div>
          </div>

          {/* OffCanvas for Small Screens */}
          <Offcanvas show={showOffcanvas} onHide={handleOffcanvasToggle} placement="start">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <div className="mb-3">
                <Link to="/account" className="text-dark d-block mb-2">
                  Account
                </Link>
                <Link to="/wishlist" className="text-dark d-block mb-2">
                  Wishlist
                </Link>
                <Link to="/cart" className="text-dark d-block">
                  Cart
                </Link>
              </div>
              <Menu />
            </Offcanvas.Body>
          </Offcanvas>
        </header>

      {/* Login Canvas */}
      <LoginOffCanvas
        show={showLoginCanvas}
        handleClose={handleCloseLoginCanvas}
      />
    </>
  );
};

export default Header;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { AccountIcon, WishlistIcon, SearchIcon, LoginIcon, Dropdown, LgBagIcon } from "../../assets/SvgIcons";
import LoginOffCanvas from "./LoginCanva";
import MainHeaderMobi from "../MobileView/MainHeaderMobi";
import CartOffCanvas from "./CartOffCanvas";
import Menu from "./CategoryMenu";
import CategoryMenuMobi from "../MobileView/CategoryMenuMobi";

const MainHeader = ({
  isLoggedIn,
  userDetails,
  userProfile,
  wishlistCount,
  handleNavigateToWishlist,
  headerButtons,
  searchTerm,
  handleKeyUp,
  handleChange,
  suggestions,
  handleSuggestionClick,
  showSuggestions,
}) => {

  const [showLoginCanvas, setShowLoginCanvas] = useState(false); // Login Offcanvas
  const [showCartCanvas, setShowCartCanvas] = useState(false); // Login Offcanvas
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  // const handleOffcanvasToggle = () => setShowOffcanvas(!showOffcanvas);
  const handleShowLoginCanvas = () => {
    setIsOpen(false);
    setShowLoginCanvas(true);
  };
  const handleCloseLoginCanvas = () => setShowLoginCanvas(false);

  // const handleOffcanvasToggle = () => setShowOffcanvas(!showOffcanvas);
  const handleCartLoginCanvas = () => {
    setIsOpen(false);
    setShowCartCanvas(true);
  };

  const handleCloseCartCanvas = () => setShowCartCanvas(false);

  return (
    <>
      <header className="sticky-top" style={{ backgroundColor: "#F3F3F3" }}>
        {/* Header for Large Screens */}
        <div className="d-none d-lg-block">
          <Row className="align-items-center py-2 ms-4 me-4">
            {/* Logo Section */}
            <Col xl={3} xxl={3} lg={3} className="d-flex align-items-center">
              <Link to="/">
                <img
                  src="/assets/images/header-logo.png"
                  alt="header-logo"
                  className="img-fluid"
                  style={{ maxWidth: "200px" }}
                />
              </Link>
            </Col>

            {/* Search Bar */}
            <Col xxl={6} xl={6} lg={6} className="flex-grow-1 my-2">
              <div
                className="d-flex align-items-center bg-opacity-10 px-3"
                style={{
                  border: "2px solid #D3D1D1",
                  borderRadius: "25px",
                  width: "100%",
                  backgroundColor: "#fff", // Set the background for the container as well
                }}
              >
                <SearchIcon className="text-dark" />
                <input
                  type="search"
                  placeholder="Search for products..."
                  className="form-control border-0 search-hover search-input"
                  value={searchTerm}
                  onKeyDown={handleKeyUp}
                  onChange={handleChange}
                  style={{
                    outline: "none",
                    boxShadow: "none",
                    backgroundColor: "#fff",
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
            <Col xxl={3} xl={3} lg={3} className="d-flex justify-content-end gap-3">
              <div className=" text-dark d-flex align-items-center gap-1">
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
                    {/* Account div */}
                    <div
                      className="text-dark d-flex align-items-center gap-1"
                      onClick={toggleDropdown}
                      style={{ cursor: "pointer" }}
                    >
                      <AccountIcon />
                      <span className="d-none d-xl-inline-block">Account</span>
                      <Dropdown />
                    </div>

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
                          <div
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
                            onClick={handleShowLoginCanvas}
                          >
                            <LoginIcon />
                            Login/Signup
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div
                className=" text-dark d-flex align-items-center gap-1"
                onClick={handleNavigateToWishlist}
                style={{ cursor: "pointer" }}
              >
                <WishlistIcon />
                {wishlistCount > 0 && (
                  <span className="badge bg-danger">{wishlistCount}</span>
                )}
                <span className="d-none d-xl-inline-block">Wishlist</span>
              </div>


              <div className=" text-dark d-flex align-items-center gap-1" style={{ cursor: "pointer" }} onClick={handleCartLoginCanvas}>
                <LgBagIcon />
                {wishlistCount > 0 && (
                  <span className="badge bg-danger">{wishlistCount}</span>
                )}
                <span className="d-none d-xl-inline-block">Cart</span>
              </div>
            </Col>
          </Row>

          {/* Menu Section */}
          <div className="container py-2">
            <div className="d-flex justify-content-center">
              {headerButtons?.map((item, index) => (
                <div
                  key={index}
                  className="btn btn-link text-decoration-none text-dark"
                >
                  {item.category_name}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile and Tab View Component */}
        <MainHeaderMobi />
        <CategoryMenuMobi />
        {/* Category Menu */}
        <Menu />


      </header >


      {/* Login Canvas */}
      < LoginOffCanvas
        show={showLoginCanvas}
        handleClose={handleCloseLoginCanvas}
      />

      {/* Cart Canvas */}
      < CartOffCanvas
        show={showCartCanvas}
        handleClose={handleCloseCartCanvas}
      />
    </>
  );
};

export default MainHeader;

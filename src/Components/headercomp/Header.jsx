import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container, Button, Navbar } from "react-bootstrap";
import { AccountIcon, WishlistIcon, SearchIcon, LoginIcon, DropdownDown, LgBagIcon, DropdownUp } from "../../assets/SvgIcons";
import LoginOffCanvas from "./LoginCanva";
import CartOffCanvas from "./CartOffCanvas";
import CategoryMenuMobi from "../../pages/MobilePages/CategoryMenuMobi";
import CategoryMenu from "./CategoryMenu";
import MobileHeader from "../mobileheadercomp/MobileHeader";
import TopBar from "./TopBar";
import { signOut } from "firebase/auth";
import "../../styles/Header.css"
import { auth } from "../firebase";
import MobileFooter from "../mobileheadercomp/MobileFooter";

const Header = ({
  isLoggedIn,
  userDetails,
  userProfile,
  wishlistCount,
  handleNavigateToWishlist,
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

  const handleShowLoginCanvas = () => {
    setIsOpen(false);
    setShowLoginCanvas(true);
  };
  const handleCloseLoginCanvas = () => setShowLoginCanvas(false);

  const handleCartLoginCanvas = () => {
    setIsOpen(false);
    setShowCartCanvas(true);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth); // Sign out the user
      console.log("User logged out");
    } catch (error) {
      console.error("Error logging out: ", error.message);
    }
  };

  const handleCloseCartCanvas = () => setShowCartCanvas(false);

  return (
    <>
      <TopBar />

      <Container fluid className="sticky-top" style={{ backgroundColor: "#F3F3F3" }}>
        <Container fluid className="px-lg-5 px-xl-5 px-xxl-5 pt-1">
          <div className="d-none d-lg-block">
            <Row className="align-items-center pt-3">
              <Col xl={3} xxl={3} lg={3} className="d-flex align-items-center">
                <Link to="/">
                  <img
                    src={require("../../assets/images/header-logo.png")}
                    alt="header-logo"
                    className="img-fluid"
                    style={{ maxWidth: "200px" }}
                  />
                </Link>
              </Col>

              {/* Search Bar */}
              <Col xxl={6} xl={6} lg={6} className="flex-grow-1 my-1">
                <div className="d-flex align-items-center bg-opacity-10 px-3 search-bar">
                  <SearchIcon className="text-dark p-0" />
                  <input
                    type="search"
                    placeholder="Search for products..."
                    className="form-control border-0 search-hover search-input text custom-placeholder align-self-center"
                    value={searchTerm}
                    onKeyDown={handleKeyUp}
                    onChange={handleChange}
                  />
                </div>
                {showSuggestions && suggestions.length > 0 && (
                  <div className="position-absolute w-100 bg-white shadow mt-1" style={{ maxHeight: "300px", overflowY: "auto", zIndex: 1050 }}>
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
                <div className="text-dark d-flex align-items-center gap-1 text-size">
                  {isLoggedIn ? (
                    <>
                      <img
                        className="rounded-circle"
                        src={userDetails?.user_profile}
                        alt="User"
                        style={{ width: "30px", height: "30px", objectFit: "cover" }}
                      />
                      <span className="d-none d-xl-inline-block">
                        {userProfile?.user_type === "btoc" ? "Account" : "Wholesale Account"}
                      </span>
                      {/* Logout button */}
                      <Button variant="link" onClick={handleLogout}>
                        Logout
                      </Button>
                    </>
                  ) : (
                    <div style={{ position: "relative", display: "inline-block" }}>
                      <div
                        className="text-dark d-flex align-items-center gap-1"
                        onClick={toggleDropdown}
                        style={{ cursor: "pointer", fontSize: "0.9rem" }}
                      >
                        <AccountIcon />
                        <span className="d-none d-xl-inline-block">Account</span>
                        {isOpen ? <DropdownUp /> : <DropdownDown />}
                      </div>

                      {/* Dropdown */}
                      {isOpen && (
                        <div className="dropdown-paper">
                          <div className="flex flex-col px-3.5 login-con">
                            <div
                              className="login-container py-3.5 flex items-center gap-3.5 text-base font-medium text-font"
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

                <div className="text-dark d-flex align-items-center gap-1" onClick={handleNavigateToWishlist} style={{ cursor: "pointer" }}>
                  <WishlistIcon />
                  {wishlistCount > 0 && (
                    <span className="badge bg-danger">{wishlistCount}</span>
                  )}
                  <span className="d-none d-xl-inline-block" style={{ fontSize: "0.9rem" }}>Wishlist</span>
                </div>

                <div className="text-dark d-flex align-items-center gap-1" style={{ cursor: "pointer" }} onClick={handleCartLoginCanvas}>
                  <LgBagIcon />
                  {wishlistCount > 0 && (
                    <span className="badge bg-danger">{wishlistCount}</span>
                  )}
                  <span className="d-none d-xl-inline-block text-size">Cart</span>
                </div>
              </Col>
            </Row>
          </div>

          <MobileHeader />
        </Container>
        <CategoryMenu />
      </Container >
      <CategoryMenuMobi />
      <LoginOffCanvas show={showLoginCanvas} handleClose={handleCloseLoginCanvas} />
      <CartOffCanvas show={showCartCanvas} handleClose={handleCloseCartCanvas} />
      <MobileFooter />

    </>
  );
};

export default Header;

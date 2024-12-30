import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import { AccountIcon, WishlistIcon, SearchIcon, LoginIcon, DropdownDown, LgBagIcon, DropdownUp, ProfileIcon, NotificationIcon, MyOrderIcon } from "../../assets/SvgIcons";
import LoginOffCanvas from "../Canvas/LoginCanva";
import CartOffCanvas from "./CartOffCanvas";
import CategoryMenuMobi from "../../pages/MobilePages/CategoryMenuMobi";
import CategoryMenu from "./CategoryMenu";
import MobileHeader from "../mobileheadercomp/MobileHeader";
import TopBar from "./TopBar";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import MobileFooter from "../mobileheadercomp/MobileFooter";
import toast from "react-hot-toast";
import { IoLogOutOutline } from "react-icons/io5";
import ProfileModal from "../Canvas/ProfileModal";
import Notification from "../Canvas/Notification";
import "../../styles/Header.css"

const Header = ({
  searchTerm,
  handleKeyUp,
  handleChange,
  suggestions,
  handleSuggestionClick,
  showSuggestions,
}) => {

  const [showLoginCanvas, setShowLoginCanvas] = useState(false); // Login Offcanvas
  const [showCartCanvas, setShowCartCanvas] = useState(false); // Cart Offcanvas
  const [showProfileModals, setShowProfileModals] = useState(false); // Profile Modal
  const [showNotificationModal, setShowNotificationModal] = useState(false); // Notification Modal
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Monitor authentication state
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe(); // Cleanup subscription
  }, []);

  // Logout handler
  const handleLogout = () => {
    setUser(null);
    signOut(auth).then(() => {
      toast.success("Logged out successfully");
      navigate("/");
    }).catch((error) => {
      console.error("Logout Error: ", error.message);
    });
  };
  const handleUserUpdate = (userData) => {
    console.log("User data updated:", userData);
    setUser(userData);
  };
  const toggleDropdown = () => setIsOpen(!isOpen);

  //login
  const handleShowLoginCanvas = () => {
    document.body.classList.add("body-lock");
    setIsOpen(false);
    setShowLoginCanvas(true);
  };
  const handleCloseLoginCanvas = () => {
    document.body.classList.remove("body-lock");
    setShowLoginCanvas(false);
  };

  //WishList
  const handleNavigateToWishlist = () => {
    navigate('/wishlist');
  };

  // Cart
  const handleOpenCartCanvas = () => {
    document.body.classList.add("body-lock");
    setIsOpen(false);
    setShowCartCanvas(true);
  };
  const handleCloseCartCanvas = () => {
    document.body.classList.add("body-lock");
    setShowCartCanvas(false);
  }

  // Profile
  const handleProfileModals = () => {
    document.body.classList.add("body-lock");
    setIsOpen(false);
    setShowProfileModals(true);
  };

  const handleCloseProfileModals = () => setShowProfileModals(false);
  // Notification
  const handleNotificationModals = () => {
    document.body.classList.add("body-lock");
    setIsOpen(false);
    setShowNotificationModal(true);
  };

  //My-Order
  const handleMyOrder = () => {
    navigate("/my-order");
    setIsOpen(false);
  };

  const handleCloseNotificationModals = () => setShowNotificationModal(false);
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
                  {user ? (
                    <>
                      {/* Logout button */}
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
                          <div className="dropdown-paper box-shadow">
                            <div className="flex flex-col px-3.5 m-2 fw-medium" style={{ color: "black" }}>
                              <div
                                className="login-container  py-3.5 flex items-center gap-3.5 text-base font-medium text-font border-bottom"
                                onClick={handleProfileModals}
                              >
                                <ProfileIcon />
                                My Profile
                              </div>
                              <div
                                className="login-container py-3.5 flex items-center gap-3.5 text-base font-medium text-font border-bottom"
                                onClick={handleNotificationModals}
                              >
                                <NotificationIcon />
                                Notification
                              </div>
                              <div
                                className="login-container py-3.5 flex items-center gap-3.5 text-base font-medium text-font border-bottom"
                                onClick={handleMyOrder}
                              >
                                <MyOrderIcon className="fs-4" />
                                My Order
                              </div>
                              <div
                                className="login-container py-3.5 flex items-center gap-3.5 text-base font-medium text-font"
                                onClick={handleLogout}
                              >
                                <IoLogOutOutline className="fs-4" />
                                Logout
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
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
                  <span className="header-badge badge position-absolute d-inline-block bg-danger rounded-pill badge-position "
                  >3</span>
                  <span className="d-none d-xl-inline-block ms-1" style={{ fontSize: "0.9rem" }}>Wishlist</span>
                </div>

                <div
                  className="text-dark d-flex align-items-center gap-1 position-relative"
                  style={{ cursor: "pointer" }}
                  onClick={handleOpenCartCanvas}
                >
                  <LgBagIcon />
                  <span
                    className="cart badge bg-danger rounded-pill"
                    style={{
                      fontSize: '0.7rem',
                      width: '18px',
                      height: '18px',
                      position: 'absolute',
                      top: '13px',
                      right: '32px',
                      textAlign: 'center',
                      display: 'grid',
                      placeItems: 'center',
                    }}
                  >
                    5
                  </span>
                  <span className="d-none d-xl-inline-block text-size ms-1 pt-1">Cart</span>
                </div>

              </Col>
            </Row>
          </div>

          <MobileHeader />
        </Container>
        <CategoryMenu />
      </Container >
      <CategoryMenuMobi />
      <LoginOffCanvas show={showLoginCanvas} handleClose={handleCloseLoginCanvas} setUser={handleUserUpdate} />
      <CartOffCanvas show={showCartCanvas} handleClose={handleCloseCartCanvas} />
      <ProfileModal show={showProfileModals} handleClose={handleCloseProfileModals} />
      <Notification show={showNotificationModal} handleClose={handleCloseNotificationModals} />
      <MobileFooter />

    </>
  );
};

export default Header;

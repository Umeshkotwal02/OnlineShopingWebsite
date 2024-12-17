import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container, Button, Navbar } from "react-bootstrap";
import { AccountIcon, WishlistIcon, SearchIcon, LoginIcon, DropdownDown, LgBagIcon, DropdownUp } from "../../assets/SvgIcons";
import LoginOffCanvas from "./LoginCanva";
import CartOffCanvas from "./CartOffCanvas";
import CategoryMenuMobi from "../mobileheadercomp/CategoryMenuMobi";
import CategoryMenu from "./CategoryMenu";
import MobileHeader from "../mobileheadercomp/MobileHeader";
import TopBar from "./TopBar";
import { signOut } from "firebase/auth";
import "../../styles/Header.css";
import { auth } from "../firebase";

const Header = ({ setIsLoggedIn, userDetails, userProfile, wishlistCount, handleNavigateToWishlist, searchTerm, handleKeyUp, handleChange, suggestions, handleSuggestionClick, showSuggestions }) => {

  const [showLoginCanvas, setShowLoginCanvas] = useState(false); // Login Offcanvas
  const [showCartCanvas, setShowCartCanvas] = useState(false); // Cart Offcanvas
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track login state

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
      setIsAuthenticated(false); // Update the login state
      setIsLoggedIn(false); // Update the global login state
      console.log("User logged out");
    } catch (error) {
      console.error("Error logging out: ", error.message);
    }
  };

  const handleCloseCartCanvas = () => setShowCartCanvas(false);

  useEffect(() => {
    // Check if the user is logged in by inspecting the auth state
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setIsAuthenticated(true);
        setIsLoggedIn(true);
      } else {
        setIsAuthenticated(false);
        setIsLoggedIn(false);
      }
    });

    return () => unsubscribe();
  }, [setIsLoggedIn]);

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
                    className="form-control border-0"
                  />
                </div>
              </Col>

              {/* Display Logout Button if Logged In */}
              <Col xl={3} xxl={3} lg={3} className="d-flex justify-content-end">
                {isAuthenticated ? (
                  <Button onClick={handleLogout} className="btn-logout">Logout</Button>
                ) : (
                  <Button onClick={handleShowLoginCanvas} className="btn-login">
                    <LoginIcon className="text-dark" /> Login
                  </Button>
                )}
              </Col>
            </Row>
          </div>
        </Container>
      </Container>

      {/* Offcanvas for Login */}
      <LoginOffCanvas 
        show={showLoginCanvas} 
        handleClose={handleCloseLoginCanvas} 
        setIsLoggedIn={setIsLoggedIn}
      />

      {/* Offcanvas for Cart */}
      <CartOffCanvas show={showCartCanvas} handleClose={handleCloseCartCanvas} />
    </>
  );
};

export default Header;

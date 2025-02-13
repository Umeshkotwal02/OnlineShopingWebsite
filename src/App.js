import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Toaster } from "react-hot-toast";
import "bootstrap/dist/css/bootstrap.min.css";
import LoaderComp from "./Components/LoaderComp";
import Header from "./Components/headercomp/Header"
import MobileFooter from "./Components/mobileheadercomp/MobileFooter";
import { publicRoutes } from "./Routes/allRoutes";
import HomePage from "./pages/HomePage";
import Footer from "./Components/Footer";
import ScrollUp from "./Components/ScrollUp";
import AutoScrollToTop from "./Components/AutoScrollToTop";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2205);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <LoaderComp />
      ) : (
        <Router>
          <Toaster
            position="top-right"
            reverseOrder={false}
            toastOptions={{
              duration: 2000,
            }}
          />
          <AutoScrollToTop />
          <Header />
          <MobileFooter />
          <Routes>
            {publicRoutes.map(({ path, component: Component, redirect }, idx) =>
              redirect ? (
                <Route key={idx} path={path} element={<Navigate to={redirect} />} />
              ) : (
                <Route key={idx} path={path} element={<HomePage />} />
              )
            )}
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
          <Footer />
          <ScrollUp />
        </Router>
      )}
    </>
  );
}

export default App;

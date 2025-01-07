import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import AutoScrollToTop from "./components/AutoScrollToTop";
import Header from "./components/headercomp/Header";
import ScrollUp from "./components/ScrollUp";
import Footer from "./components/Footer";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Toaster } from "react-hot-toast";
import Loader from "./components/Loader";
import "bootstrap/dist/css/bootstrap.min.css";
import MobileFooter from "./components/mobileheadercomp/MobileFooter";
import { publicRoutes } from "./routes/allRoutes";
import SearchBar from "./components/SearchBar";

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
        <Loader />
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
                <Route key={idx} path={path} element={<Component />} />
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

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import AutoScrollToTop from './Components/AutoScrollToTop';
import Header from './Components/headercomp/Header';
import ScrollUp from './Components/ScrollUp';
import { publicRoutes } from './Routes/allRoutes';
import Footer from "./Components/Footer";
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Toaster } from 'react-hot-toast';
import Loader from './Components/Loader';

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
          {/* <AutoScrollToTop /> */}
          <Toaster
            position="top-right"
            reverseOrder={false}
            toastOptions={{
              duration: 2000,
            }}
          />
          <AutoScrollToTop />
          <Header />
          <Routes>
            {publicRoutes.map((route, idx) => (
              <Route key={idx} path={route.path} element={<route.component />} />
            ))}
            <Route path="/" element={<Navigate to="/home" />} />
          </Routes>
          <Footer />
          <ScrollUp />
        </Router>
      )}
    </>
  );
}

export default App;

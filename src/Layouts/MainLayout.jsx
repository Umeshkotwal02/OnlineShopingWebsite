import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { publicRoutes } from '../Routes/allRoutes';
import Footer from '../Components/Footer';
import MainHeader from '../Components/HeaderComponents/MainHeader';
import HomePage from '../pages/HomePage';
import TopBar from '../Components/HeaderComponents/TopBar';
import { Container } from 'react-bootstrap';
import AutoScrollToTop from '../Components/AutoScrollToTop';
import ScrollUp from '../Components/ScrollUp';

const MainLayout = () => {
  return (
    <Router>
      <AutoScrollToTop />
      <TopBar />
      <MainHeader />
      <HomePage />
      <Routes>
        {publicRoutes.map((route, idx) => (
          <Route key={idx} path={route.path} element={<route.component />} />
        ))}
        <Route path="/" element={<Navigate to="/shopping" replace />} />
      </Routes>
      <Footer />
      <ScrollUp />
    </Router>
  );
};

export default MainLayout;

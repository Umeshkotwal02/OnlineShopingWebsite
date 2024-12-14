import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import AutoScrollToTop from './Components/AutoScrollToTop';
import TopBar from './Components/headercomp/TopBar';
import Header from './Components/headercomp/Header';
import Footer from './Components/Footer';
import ScrollUp from './Components/ScrollUp';
import { publicRoutes } from './Routes/allRoutes';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <>
      <Router>
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
    </>
  );
}

export default App;

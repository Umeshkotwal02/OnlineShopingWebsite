import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import AutoScrollToTop from './Components/AutoScrollToTop';
import TopBar from './Components/HeaderComponents/TopBar';
import MainHeader from './Components/HeaderComponents/MainHeader';
import Footer from './Components/Footer';
import ScrollUp from './Components/ScrollUp';
import { publicRoutes } from './Routes/allRoutes';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <AutoScrollToTop />
        <TopBar />
        <MainHeader />
        {/* <CategoryMenuMobi /> */}
        <Routes>
          {publicRoutes.map((route, idx) => (
            <Route key={idx} path={route.path} element={<route.component />} />
          ))}
          <Route path="/" element={<Navigate to="/home" replace />} />
        </Routes>
        <Footer />
        <ScrollUp />
      </Router>
    </>
  );
}

export default App;

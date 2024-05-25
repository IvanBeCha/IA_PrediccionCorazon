import React from 'react';
import Navbar from './components/Navbar/Navbar';
import LandingPage from './pages/LandingPage/LandingPage';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './assets/styles/index.css';

function App() {
  const navigateToHome = () => {
    window.location.href = '/';
  };

  return (
    <Router>
      <div>
        <Navbar navigateToHome={navigateToHome} />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
        </Routes>
        <About />
      </div>
    </Router>
  );
}

export default App;

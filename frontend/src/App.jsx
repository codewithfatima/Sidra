import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './pages/Home';
import Footer from './Component/Footer';
import ContactForm from './pages/Contact';
import OurSchool from './pages/OurVision';
import AboutSidra from './pages/AboutSidra';
import HappyLand from './pages/Nurseries/HappyLand';
import MyNursery from './pages/Nurseries/MyNursery';
import Prep from './pages/Nurseries/Prep'
import AdminLogin from './pages/Login/AdminLogin';
import AdminNewsPage from './pages/AdminNewsPage';
import OurPartners from './pages/OurPartners';
import OurMission from './pages/OurMission';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<ContactForm />} />
        <Route path="/about/vision" element={<OurSchool />} />
        <Route path="/about/mission" element={<OurMission />} />
        <Route path="/company" element={<AboutSidra />} />
        <Route path="/company/our-partner" element={<OurPartners />} />
        <Route path="/mynursery" element={<MyNursery />} />
        <Route path="/happyland" element={<HappyLand />} />
        <Route path="/admin-login" element={<AdminLogin />} />\
        <Route path="/admin-news" element={<AdminNewsPage />} />
        <Route path="/prep" element={<Prep />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

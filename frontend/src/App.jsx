import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './pages/Home';
import Footer from './Component/Footer';
import ContactForm from './pages/Contact';
import OurSchool from './pages/OurVision';
import Owners from './pages/Company/Owners'
import AboutSidra from './pages/AboutSidra';
import HappyLand from './pages/Nurseries/HappyLand';
import MyNursery from './pages/Nurseries/MyNursery';
import Prep from './pages/Nurseries/Prep'
import AdminLogin from './pages/Login/AdminLogin';
import AdminNewsPage from './pages/AdminNewsPage';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/our-school' element={<OurSchool />} />
        <Route path='/contact' element={<ContactForm />} />
        <Route path="/about/vision" element={<OurSchool />} />
        <Route path="/company" element={<AboutSidra />} />
        <Route path="/company/owners" element={<Owners />} />
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

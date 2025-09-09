import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EventGalleryPage from './pages/EventGalleryPage';
import HappyLand from './pages/Nurseries/HappyLand';
import MyNursery from './pages/Nurseries/MyNursery';
import AdminLogin from './pages/Login/AdminLogin';
import AdminNewsPage from './pages/AdminNewsPage';
import ScrollToTop from './Component/ScroltoTop';
import ImageGallery from './pages/ImageGallery';
import OurMission from './pages/OurMission';
import NewsCard from './Component/NewsCard';
import ContactForm from './pages/Contact';
import OurValues from './pages/OurValues';
import OurVision from './pages/OurVision';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import Home from './pages/Home';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/news" element={<NewsCard />} />
        <Route path="/mynursery" element={<MyNursery />} />
        <Route path="/happyland" element={<HappyLand />} />
        <Route path='/contact' element={<ContactForm />} />
        <Route path="/gallery" element={<ImageGallery />} />
        <Route path="/about/vision" element={<OurVision />} />
        <Route path='/about/values' element={<OurValues />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/about/mission" element={<OurMission />} />
        <Route path="/admin-news" element={<AdminNewsPage />} />
        <Route path="/events/:subcategory" element={<EventGalleryPage />} />
      </Routes>
      <ScrollToTop />
      <Footer />
    </Router>
  );
};

export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EventGalleryPage from './pages/EventGalleryPage';
import HappyLand from './pages/Nurseries/HappyLand';
import MyNursery from './pages/Nurseries/MyNursery';
import AdminLogin from './pages/Login/AdminLogin';
import ScrollToTop from './Component/ScroltoTop';
import ImageGallery from './pages/ImageGallery';
import OurMission from './pages/OurMission';
import ContactForm from './pages/Contact';
import OurValues from './pages/OurValues';
import OurVision from './pages/OurVision';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import NewsList from './pages/NewsList';
import Addnews from './pages/Addnews'
import NewsDetail from './pages/NewsDetail';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/mynursery" element={<MyNursery />} />
        <Route path="/happyland" element={<HappyLand />} />
        <Route path='/contact' element={<ContactForm />} />
        <Route path="/gallery" element={<ImageGallery />} />
        <Route path="/about/vision" element={<OurVision />} />
        <Route path='/about/values' element={<OurValues />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/about/mission" element={<OurMission />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/news" element={<NewsList />} />
        <Route path="/add-news" element={<Addnews />} />
         <Route path="/news-detail/:id" element={<NewsDetail />} />
        <Route path="/events/:subcategory" element={<EventGalleryPage />} />
      </Routes>

      <ScrollToTop />
      <Footer />
    </Router>
  );
};

export default App;


import React from 'react'
import Slider from '../Component/HeroBanner'
import ContactForm from './Contact'
import NewsCard from '../Component/NewsCard'
import ScroltoTop from '../Component/ScroltoTop'
import Locations from './Company/Locations'
import ImageGallery from './ImageGallery'

const Home = () => {
  return (
    <div >
      <Slider />
      <NewsCard />
      <ImageGallery />
      <Locations />
      <ContactForm />
      <ScroltoTop />
    </div>
  )
}

export default Home
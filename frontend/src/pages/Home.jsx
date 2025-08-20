import React from 'react'
import Slider from '../Component/HeroBanner'
import ContactForm from './Contact'
import QuickInfo from '../Component/QuickInfo'
import NewsCard from '../Component/NewsCard'
import GalleryGrid from '../Component/GalleryGrid'
import ScroltoTop from '../Component/ScroltoTop'
import OurPartners from './OurPartners'

const Home = () => {
  return (
    <div className=''>
    

      <Slider />
      <QuickInfo />
      <NewsCard />
      <GalleryGrid />
      <OurPartners />
      <ContactForm />
      <ScroltoTop />
    </div>
  )
}

export default Home
import React from 'react'
import Slider from '../Component/HeroBanner'
// import WhySidra from './WhySidra'
import ContactForm from './Contact'
import QuickInfo from '../Component/QuickInfo'
import NewsCard from '../Component/NewsCard'
import GalleryGrid from '../Component/GalleryGrid'
import ScroltoTop from '../Component/ScroltoTop'

const Home = () => {
  return (
    <div>
      <Slider />
      <QuickInfo />
      {/* <WhySidra /> */}
      <NewsCard />
      <GalleryGrid />
      <ContactForm />
      <ScroltoTop />
    </div>
  )
}

export default Home
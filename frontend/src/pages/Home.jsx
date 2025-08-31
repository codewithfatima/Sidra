import React from 'react'
import Slider from '../Component/HeroBanner'
import ContactForm from './Contact'
import NewsCard from '../Component/NewsCard'
import ScroltoTop from '../Component/ScroltoTop'
import Locations from './Company/Locations'

const Home = () => {
  return (
    <div >
      <Slider />
      <NewsCard />
      <Locations />
      <ContactForm />
      <ScroltoTop />
    </div>
  )
}

export default Home
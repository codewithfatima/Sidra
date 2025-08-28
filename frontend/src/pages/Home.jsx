import React from 'react'
import Slider from '../Component/HeroBanner'
import ContactForm from './Contact'
import NewsCard from '../Component/NewsCard'
import ScroltoTop from '../Component/ScroltoTop'

const Home = () => {
  return (
    <div >
      <Slider />
      <NewsCard />
      <ContactForm />
      <ScroltoTop />
    </div>
  )
}

export default Home
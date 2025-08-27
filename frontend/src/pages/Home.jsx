import React from 'react'
import Slider from '../Component/HeroBanner'
import ContactForm from './Contact'
import NewsCard from '../Component/NewsCard'
import ScroltoTop from '../Component/ScroltoTop'
// import OurPartners from './OurPartners'

const Home = () => {
  return (
    <div >
      <Slider />
      <NewsCard />
      {/* <OurPartners /> */}
      <ContactForm />
      <ScroltoTop />
    </div>
  )
}

export default Home
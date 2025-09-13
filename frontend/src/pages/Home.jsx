import React from 'react'
import Slider from '../Component/HeroBanner'
import ContactForm from './Contact'
// import ScroltoTop from '../Component/ScroltoTop'
import Locations from './Company/Locations'
import ImageGallery from './ImageGallery'
import NewsList from './NewsList'

const Home = () => {
  return (
    <div >
      <Slider />
      <NewsList />
      <ImageGallery />
      <Locations />
      <ContactForm />
      {/* <ScroltoTop /> */}
    </div>
  )
}

export default Home
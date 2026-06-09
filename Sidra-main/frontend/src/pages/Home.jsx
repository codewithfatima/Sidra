import React from 'react'
import Slider from '../Component/HeroBanner'
import ContactForm from './Contact'
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
    </div>
  )
}

export default Home
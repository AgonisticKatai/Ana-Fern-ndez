import React from 'react'

import NavbarHeader from '../NavbarHeader/NavbarHeader.jsx'
import Welcome from '../Welcome/Welcome.jsx'
import Gallery from '../Gallery/Gallery.jsx'
import Footer from '../Footer/Footer.jsx'
import Collections from '../Collections/Collections.jsx'

import './HomePage.css'

const HomePage = () => {
  return (
    <div className='home-page-content'>
      <NavbarHeader />
      <Welcome />
      <Gallery />
      <Collections />
      <NavbarHeader />
    </div>
  )
}

export default HomePage

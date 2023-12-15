import React from 'react'
import Navbar from '../components/Navbar'
import Contact2 from '../components/Contact2'
import Footer from '../components/Footer'
import { Pattern2 } from '../components/patterns/Pattern1'

const ContactUs = () => {
  return (
    <div className='contact-us'>
      <Pattern2 />
      <div className="container"> <Navbar /> </div>
      <Contact2  />
      <Footer appear={false} />
    </div>
  )
}

export default ContactUs
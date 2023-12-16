import React from 'react'
import Navbar from '../components/Navbar'
import Contact2 from '../components/Contact2'
import Footer from '../components/Footer'
import Pattern1, { Pattern2, Pattern3, Pattern4 } from '../components/patterns/Pattern1'

const ContactUs = () => {
  return (
    <div className='contact-us'>
      {/* <Pattern4 /> */}
      <div className="container"> <Navbar /> </div>
      <Contact2  />
      <Footer appear={false} />
    </div>
  )
}

export default ContactUs
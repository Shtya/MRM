import React from 'react'
import Navbar from '../components/Navbar'
import Contact2 from '../components/Contact2'
import Footer from '../components/Footer'
import Animation from '../components/helpers/Animation'
import MetaTag from './MetaTag'
import IMG1 from "../assets/bg/b1.jpg"

const ContactUs = () => {
  return (
    <div className='contact-us'>
      <MetaTag title=" Get in Touch with MRM Advertising  Your Marketing Partner in Dubai" desc="Connect with MRM Advertising Agency in Dubai for best digital marketing and advertising services. Specializing in SEO, media buying and creative solutions. " />
      <div className="bgCover"  >  <img  src={IMG1} alt="contact-us" loading="lazy" /> </div>
      
      <Animation />
      <div className="container"> <Navbar /> </div>
      <Contact2  />
      <Footer />
    </div>
  )
}

export default ContactUs
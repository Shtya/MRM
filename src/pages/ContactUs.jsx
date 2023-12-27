import React from 'react'
import Navbar from '../components/Navbar'
import Contact2 from '../components/Contact2'
import Footer from '../components/Footer'
import Animation from '../components/helpers/Animation'
import MetaTag from './MetaTag'
import IMG1 from "../assets/bg/b1.jpg"
import { Helmet } from 'react-helmet'

const ContactUs = () => {
  return (
    <div className='contact-us'>
      <MetaTag canonical="contact-us" title=" Get in Touch with MRM Advertising  Your Marketing Partner in Dubai" desc="Connect with MRM Advertising Agency in Dubai for best digital marketing and advertising services. Specializing in SEO, media buying and creative solutions. " />
      <Helmet > <script type="application/ld+json">{`  "@context": "https://schema.org",  "@type": "AboutPage",  "name": "mrm advertising",  "url": "https://mrmadvertisingdubai.com/contact-us",  "description": "Connect with MRM Advertising Agency in Dubai for best digital marketing and advertising services. Specializing in SEO, media buying and creative solutions.",  "address": {    "@type": "PostalAddress",    "addressRegion": "State",    "postalCode": "0000",    "addressCountry": "dubai"  },  "contactPoint": {    "@type": "ContactPoint",    "telephone": "+971561384496",    "contactType": "customer service",    "areaServed": "US" }`}</script> </Helmet>
      <Animation />
      <div className="bgCover"  >  <img  src={IMG1} alt="contact-us" loading="lazy" /> </div>
      <div className="container"> <Navbar /> </div>
      <Contact2  />
      <Footer />
    </div>
  )
}

export default ContactUs
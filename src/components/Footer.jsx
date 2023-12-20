import React from 'react'
import Logo from "../assets/Logo1.png"
import { Link } from 'react-router-dom'
import { Divider, Pattern9 } from './patterns/Pattern1'
import QuickContact from './QuickContact'
import IMG3 from "../assets/bg/bg5.jpg"

const Footer = ({appear}) => {
  return (
    <>
   
    {appear != false && <Pattern9 />}
    {appear != false &&<QuickContact  />} 
    {appear == false ? <Divider classn='divider2' /> : <Pattern9  />}

    <footer>
    <div className="bgCover" style={{zIndex:"1"}}  >  <img  src={IMG3} alt="" /> </div>
      <div className="container" >

      <div className="top">
        <img src={Logo} alt="" data-aos="fade-up" data-aos-delay="100" />
        <div className="phead" data-aos="fade-up" data-aos-delay="150">We Don't Create Ads ,We Build Successful Campaigns</div>
        <ul className='social last-social'>
          <li data-aos="fade-up" data-aos-delay="200"> <a className="Iicon"> <div className="style"> <i className="fa-brands fa-facebook-f"></i>    </div> </a></li>
          <li data-aos="fade-up" data-aos-delay="300"> <a className="Iicon"> <div className="style"> <i className="fa-brands fa-instagram"></i></div> </a></li>
          <li data-aos="fade-up" data-aos-delay="400"> <a className="Iicon"> <div className="style"><i className="fa-brands fa-whatsapp"></i>        </div> </a></li>
          <li data-aos="fade-up" data-aos-delay="500"> <a className="Iicon"> <div className="style"> <i className="fa-brands fa-linkedin-in"></i></div> </a></li>
        </ul>
      </div>

      <div className="center">
        <ul className='ul-1' data-aos="fade-up" data-aos-delay="600">
          <h2 className='h2 clip'>Contact INFO</h2>
          <li><i className="fa-solid fa-phone"></i>  +971561384496 </li>
          <li><i className="fa-solid fa-envelope"></i>  info@mrmadvertisingdubai.com </li>
          <li><i className="fa-solid fa-map-location-dot"></i>  Business Bay - Dubai </li>
        </ul>

        <ul className='ul-2' data-aos="fade-up" data-aos-delay="600">
          <h2 className='h2 clip'>Quick Links</h2>
          <li > <Link className='p' to="/about-us"> about us </Link></li>
          <li > <Link className='p' to="/landing"> services </Link></li>
          <li > <Link className='p' to="/contact-us"> contact us </Link></li>
          <li > <Link className='p' to="/blog"> blog </Link></li>
        </ul>

        <ul className='ul-3' data-aos="fade-up" data-aos-delay="600" >
          <h2 className='h2 clip'>SUBSCRIBE TO OUR NEWSLETTER</h2>
          <li className='newsletter'>Stay Informed and Inspired Subscribe to Our Newsletter for Exclusive Updates, Insights, and Offers</li>
          <div className="group">
            <input type="text" placeholder='Email Address' />
            <i className="fa-regular fa-envelope"></i>
          </div>
        </ul>


      </div>

        <div className="bottom" data-aos="fade-up" data-aos-delay="700" data-aos-offset="0">
          <p className='p' >All rights reserved 2023 ©MRM Adevertising Agency</p>
          <div className="last" >
            <Link className='p' to="/terms">  terms </Link>
            <Link className='p' to="/privacy">  privacy </Link>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer
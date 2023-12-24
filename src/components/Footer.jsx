import Logo from "../assets/Logo1.png"
import { Link } from 'react-router-dom'
import { Pattern9 } from './patterns/Pattern1'
import IMG3 from "../assets/bg/b1.jpg"

const Footer = ({appear}) => {
  return (
    <>
    <Pattern9  />
    <footer>
    <div className="bgCover" style={{zIndex:"1"}}  >  <img  src={IMG3} alt="" loading="lazy" /> </div>
      <div className="container" >

      <div className="top">
        <img src={Logo} alt="" loading="lazy" data-aos="fade-up" data-aos-delay="50" />
        <div className="phead" data-aos="fade-up" data-aos-delay="100">We Don't Create Ads ,We Build Successful Campaigns</div>
        <ul className='social last-social'>
          <li data-aos="fade-up" data-aos-delay="50"> <a className="Iicon"> <div className="style"> <i className="fa-brands fa-facebook-f"></i>    </div> </a></li>
          <li data-aos="fade-up" data-aos-delay="150"> <a className="Iicon"> <div className="style"> <i className="fa-brands fa-instagram"></i></div> </a></li>
          <li data-aos="fade-up" data-aos-delay="200"> <a className="Iicon"> <div className="style"><i className="fa-brands fa-whatsapp"></i>        </div> </a></li>
          <li data-aos="fade-up" data-aos-delay="250"> <a className="Iicon"> <div className="style"> <i className="fa-brands fa-linkedin-in"></i></div> </a></li>
        </ul>
      </div>

      <div className="center">
        <ul className='ul-1' data-aos="fade-up" data-aos-delay="300">
          <h2 className='h2 clip'>Contact INFO</h2>
          <li ><i className="fa-solid fa-envelope"></i>  info@mrmadvertisingdubai.com </li>
          <li ><i className="fa-solid fa-map-location-dot"></i>  Business Bay - Dubai </li>
          <li ><i className="fa-solid fa-phone"></i>  +971561384496 </li>
        </ul>

        <ul className='ul-2' data-aos="fade-up" data-aos-delay="350">
          <h2 className='h2 clip'>Quick Links</h2>
          <li > <Link to="/contact-us"> contact us </Link></li>
          <li > <Link to="/about-us"> about us </Link></li>
          <li > <Link to="/landing"> services </Link></li>
          <li > <Link to="/blog"> blog </Link></li>
        </ul>

        <ul className='ul-3' data-aos="fade-up" data-aos-delay="400" >
          <h2 className='h2 clip'>SUBSCRIBE TO OUR NEWSLETTER</h2>
          <li className='newsletter'>Stay Informed and Inspired Subscribe to Our Newsletter for Exclusive Updates, Insights, and Offers</li>
          <div className="group">
            <input type="text" placeholder='Email Address' />
            <i className="fa-regular fa-envelope"></i>
          </div>
        </ul>


      </div>

        <div className="bottom" data-aos="fade-up" data-aos-delay="400" data-aos-offset="0">
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
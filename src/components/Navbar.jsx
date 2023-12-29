import React, { memo, useEffect, useState } from 'react'
import Logo from "../assets/Logo1.png"
import { Link, useNavigate } from 'react-router-dom';
import Animation from './helpers/Animation';

const Navbar1 = memo(() => {
  const Navigate = useNavigate()

  const [top , settop] = useState(false)
  useEffect(_=>{
    const handelScroll =  _=> window.scrollY > 50 ? settop("up-anything") : settop("")
    window.addEventListener("scroll" , handelScroll)
    return _=> window.removeEventListener("scroll" , handelScroll)} ,[ window])
  useEffect(_=>{


let navLinks = document.querySelector(" .Navbar1 .nav-links");
let menuOpenBtn = document.querySelector(" .Navbar1 .navbar .bx-menu");
let menuCloseBtn = document.querySelector(" .Navbar1 .nav-links .bx-x");
menuOpenBtn.onclick = function() {
navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
navLinks.style.left = "-100%";
}


let htmlcssArrow = document.querySelector(".Navbar1 .htmlcss-arrow");
htmlcssArrow.onclick = function() {
 navLinks.classList.toggle("show1");
}
  } ,[])
  return (
  <div className="Navbar1" >
    <Animation />
    <nav>
      <div className={`navbar ${top}`} >
        <i className='bx bx-menu'></i>
        <div data-aos="fade-down" data-aos-delay="100" className="logo"><Link to="/"> <img src={Logo} alt="Navbar" loading="lazy" /></Link></div>
        <div className="nav-links">
          <div className="sidebar-logo">   <span className="logo-name"><img src={Logo} alt="Navbar" loading="lazy" /></span>   <i className='bx bx-x' ></i> </div>
          
          <ul className="links">
            <li data-aos="fade-down" data-aos-delay="200" onClick={_=> Navigate("/")}><Link to="/">Home</Link></li>
            <li data-aos="fade-down" data-aos-delay="300" ><Link  >Services</Link>
              <i className='bx bxs-chevron-down htmlcss-arrow arrow  '></i>
              <ul className="htmlCss-sub-menu sub-menu">
                <li onClick={_=> Navigate("/web-development-company-in-dubai")}><Link to="/web-development-company-in-dubai"> web design & Development </Link></li>
                <li onClick={_=> Navigate("/Photography-In-Dubai")}><Link to="/Photography-In-Dubai"> photography & videography </Link></li>
                <li onClick={_=> Navigate("/exhibition-and-display-stand-agency-in-dubai")}><Link to="/exhibition-and-display-stand-agency-in-dubai"> exhibition & display stands</Link></li>
                <li onClick={_=> Navigate("/indoor-and-outdoor-signages-agency-in-dubai")}><Link to="/indoor-and-outdoor-signages-agency-in-dubai"> indoor & outdoor signages </Link></li>
                <li onClick={_=> Navigate("/social-media-marketing-agency-in-dubai")}><Link to="/social-media-marketing-agency-in-dubai"> social media marketing</Link></li>
                <li onClick={_=> Navigate("/gifts-agency-in-dubai")}><Link to="/gifts-agency-in-dubai">cooperated gifts </Link></li>
                <li onClick={_=> Navigate("/advertising-ppc-agency-in-dubai")}><Link to="/advertising-ppc-agency-in-dubai">media buying </Link></li>
                <li onClick={_=> Navigate("/branding-agency-in-dubai")}><Link to="/branding-agency-in-dubai">Branding </Link></li>
                <li onClick={_=> Navigate("/seo-agency-in-dubai")}><Link to="/seo-agency-in-dubai">SEO </Link></li>
              </ul>
            </li>

            <li data-aos="fade-down" data-aos-delay="400" onClick={_=> Navigate("/blog")}><Link to="/blog">Blog</Link></li>
            <li data-aos="fade-down" data-aos-delay="500" onClick={_=> Navigate("/about-us")}><Link to="/about-us">About Us</Link></li>
            <li data-aos="fade-down" data-aos-delay="600" onClick={_=> Navigate("/contact-us")}><Link to="/contact-us"> Contact Us</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  )
})

export default Navbar1
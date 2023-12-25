import React, { useEffect, useState } from 'react'
import Logo from "../assets/Logo1.png"
import { Link, useNavigate } from 'react-router-dom';
import Animation from './helpers/Animation';

const Navbar1 = () => {
  const Navigate = useNavigate()

  const [top , settop] = useState(false)
  useEffect(_=>{
    const handelScroll =  _=> window.scrollY > 50 ? settop("up-anything") : settop("")
    window.addEventListener("scroll" , handelScroll)
    return _=> window.removeEventListener("scroll" , handelScroll)} ,[ window])
  useEffect(_=>{
let navbar = document.querySelector(".Navbar1 .navbar");
let searchBox = document.querySelector(".Navbar1 .search-box .bx-search");

searchBox.addEventListener("click", ()=>{
  navbar.classList.toggle("showInput");
  if(navbar.classList.contains("showInput")){
    searchBox.classList.replace("bx-search" ,"bx-x");
  }else {
    searchBox.classList.replace("bx-x" ,"bx-search");
  }
});

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
                <li onClick={_=> Navigate("/web-design")}><Link to="/web-design"> web design & Development </Link></li>
                <li onClick={_=> Navigate("/photography-and-videography")}><Link to="/photography-and-videography"> photography & videography </Link></li>
                <li onClick={_=> Navigate("/Exhibition-and-display-stand")}><Link to="/Exhibition-and-display-stand"> exhibition & display stands</Link></li>
                <li onClick={_=> Navigate("/indoor-and-outdoor-signages")}><Link to="/indoor-and-outdoor-signages"> indoor & outdoor signages </Link></li>
                <li onClick={_=> Navigate("/social-media-marketing")}><Link to="/social-media-marketing"> social media marketing</Link></li>
                <li onClick={_=> Navigate("/gifts")}><Link to="/gifts">cooperated gifts </Link></li>
                <li onClick={_=> Navigate("/media-buying")}><Link to="/media-buying">media buying </Link></li>
                <li onClick={_=> Navigate("/branding")}><Link to="/branding">Branding </Link></li>
                <li onClick={_=> Navigate("/seo")}><Link to="/seo">SEO </Link></li>
              </ul>
            </li>

            <li data-aos="fade-down" data-aos-delay="400" onClick={_=> Navigate("/blog")}><Link to="/blog">Blog</Link></li>
            <li data-aos="fade-down" data-aos-delay="500" onClick={_=> Navigate("/about-us")}><Link to="/about-us">About Us</Link></li>
            <li data-aos="fade-down" data-aos-delay="600" onClick={_=> Navigate("/contact-us")}><Link to="/contact-us"> Contact Us</Link></li>
          </ul>
        </div>
        <div className="search-box" data-aos="fade-down" data-aos-delay="700">
          <i className='bx bx-search'></i>
          <div className="input-box"> <input type="text" placeholder="Search..."/>  </div>
        </div>
      </div>
    </nav>
  </div>
  )
}

export default Navbar1
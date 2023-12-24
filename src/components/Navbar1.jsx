import React, { useEffect, useState } from 'react'
import Logo from "../assets/Logo1.png"
import { Link, useNavigate } from 'react-router-dom';

const Alt_Navbar = () => {
  const Navigate = useNavigate()
  const [top , settop] = useState(false)
  useEffect(_=>{
    const handelScroll =  _=> window.scrollY > 50 ? settop("black") : settop("")
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

  } ,[])


  return (
  <div className="Navbar1" >
    <nav>
      <div className="navbar" style={{background:top}}>
        <i className='bx bx-menu'></i>
        <div className="logo"><Link to="/"> <img src={Logo} alt="" loading="lazy" /></Link></div>
        <div className="nav-links">
          <div className="sidebar-logo">   <span className="logo-name"><img src={Logo} alt="" loading="lazy" /></span>   <i className='bx bx-x' ></i> </div>
          
          <ul className="links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/MRM" >Blogs</Link></li>
            <li><Link to="/dashboard">Create</Link></li>
          </ul>
        </div>
        <div className="search-box">
          <i className='bx bx-search'></i>
          <div className="input-box"> <input type="text" placeholder="Search..."/>  </div>
        </div>
      </div>
    </nav>
  </div>
  )
}

export default Alt_Navbar
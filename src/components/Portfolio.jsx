import React, { useEffect, useState } from 'react'

import { ImgsPortfolio } from './Images';
import Slider_2_Imgs from './Slide/Slider_2_Imgs';
import { Pattern2, Pattern3, Pattern4 } from './patterns/Pattern1';
import { useLocation } from 'react-router-dom';
import IMG1 from "../assets/bg/b1.jpg"
import IMG2 from "../assets/bg/bg3.jpg"
import IMG3 from "../assets/bg/bg5.jpg"

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1 , 
  // autoplay:true ,
  responsive: [
    {
      breakpoint: 1050,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
      }
    },
  ]
};



const Portfolio = ({header  , typeGallery , nameofgallery  }) => {
  const headers = [ "all" , "Signages", "Stands", "Exhibition", "branding", "photography", "Web design",]
  const {pathname} = useLocation()

  const Imgs = ImgsPortfolio()
  const [data , setdata ] = useState(Imgs)
  const [type , settype ] =useState("all") ;
  useEffect(_=>{ setdata(Imgs.filter(e => e.type.includes(typeGallery))) } ,[pathname])

  const handleHeaders = (ele)=>{
    setdata( Imgs.filter(e =>{
      settype(ele)
      return e.type.includes(ele.split(" ")[0])
    }) ) 
  }


  return (
    <section className='portfolio' id="Portfolio">
      <div className="bgCover"  >  <img  src={IMG3} alt="" /> </div>

      <h2 className='h1' data-aos="fade-up" >{ nameofgallery || "OUR WORKS"}</h2>
      {!header == false && <div className="header1"data-aos="fade-up"  >{
          headers.map((e,index)=> (
          <li className={type == e ? "active p" : "p"} key={index} onClick={_=> handleHeaders(e)} > {e} </li>
        ))}</div>}


      <Slider_2_Imgs data={data } settings={settings} />
    </section>
  )
}

export default Portfolio
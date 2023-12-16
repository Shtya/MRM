import React, { useEffect, useState } from 'react'

import { ImgsPortfolio } from './Images';
import Slider_2_Imgs from './Slide/Slider_2_Imgs';
import { Pattern2, Pattern3, Pattern4 } from './patterns/Pattern1';
import { useLocation } from 'react-router-dom';

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1 , 
  autoplay:true ,
  responsive: [
    {
      breakpoint: 1050,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
  ]
};



const Portfolio = ({header  , typeGallery , nameofgallery , bg  }) => {
  const headers = [ "all" , "Signages", "Stands", "Exhibition", "branding", "photography", "Web design",]
  const {pathname} = useLocation()

  const Imgs = ImgsPortfolio(headers)
  const [data , setdata ] = useState(Imgs)
  const [type , settype ] =useState("all") ;
  useEffect(_=>{ setdata(Imgs.filter(e => e.type.includes(typeGallery))) } ,[pathname])

  const handleHeaders = (ele)=>{
    setdata( Imgs.filter(e =>{
      settype(ele)
      return e.type.includes(ele)
    }) ) 
  }


  return (
    <section className='portfolio' id="Portfolio">
      {bg ? bg : <Pattern3 />}
      <h2 className='h1 clip' >{ nameofgallery || "OUR WORKS"}</h2>
      {!header == false && <div className="header1">{
          headers.map((e,index)=> (
          <li className={type == e ? "active p" : "p"} key={index} onClick={_=> handleHeaders(e)} > {e} </li>
        ))}</div>}


      <Slider_2_Imgs data={data } settings={settings} />
    </section>
  )
}

export default Portfolio
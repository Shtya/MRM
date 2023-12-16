import React, { useEffect, useRef, useState } from 'react'
import Slider_1_Img from './Slide/Slider_1_Img';
import { Pattern2, Pattern3 } from './patterns/Pattern1';

import IMG1 from "../assets/bg/b1.jpg"
import IMG2 from "../assets/bg/bg3.jpg"
import IMG3 from "../assets/bg/bg5.jpg"

import baseURL from '../API/API';

var settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1 , 
  autoplay:true ,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 1 ,
        dots: false,
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1 ,
        dots: false,
      }
    }
  ]
};


const Blog = () => {
  const [blogs , setdata] = useState()
  useEffect(_=> { baseURL.get("" ).then(e => setdata(e.data.data)) } ,[])
  return (
    <section className='blog' id='Blog'>
      <div className="bgCover"  >  <img  src={IMG3} alt="" /> </div>
      <div className="container"> <div className="h1 clip hidden-text">BLOG</div> </div>
      <p className="phead hidden-text" >Latest Insights and News to Keep Your Strategies Alive </p>

      {/* <BLOG_SLIDER data={blogs} /> */}
      <Slider_1_Img  data={blogs} settings={settings} />

    </section>
  )
}

export default Blog

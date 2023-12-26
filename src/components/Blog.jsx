import { memo, useEffect, useState } from 'react'
import Slider_1_Img from './Slide/Slider_1_Img';
import IMG3 from "../assets/bg/b3.jpg"
import baseURL from '../API/API';
import { useLocation } from 'react-router-dom';

var settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1 , 
  autoplay:true ,
  responsive: [
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


const Blog = memo(() => {
  const [blogs , setdata] = useState()
  const {pathname} = useLocation() ;
  useEffect(_=> { baseURL.get("").then(e => setdata(e.data.data)) } ,[pathname])

  return (
    <section className='blog' id='Blog'>
      <div className="bgCover"  >  <img  src={IMG3} alt="blog" loading="lazy" /> </div>
      <div className="container"> <div className="h1 clip" data-aos="fade-up" >BLOG</div> </div>
      <p className="phead" data-aos="fade-up"  >Latest Insights and News to Keep Your Strategies Alive </p>

      <Slider_1_Img  data={blogs} settings={settings} />

    </section>
  )
})

export default Blog

import { memo, useEffect, useState } from 'react'
import Slider_1_Img from './Slide/Slider_1_Img';
import IMG3 from "../assets/bg/b3.webp"
import baseURL from '../API/API';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

var settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1 , 
  // autoplay:true ,
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
  const {t} = useTranslation() ;

  const navigate = useNavigate();
  const [blogs , setdata] = useState([])
  const {pathname} = useLocation() ;
  useEffect(_=> { 
    blogs.length < 1 
    ?  baseURL.get("").then(e => setdata(e.data.data))
    :  baseURL.get("").then(e => setdata(e.data.data))
   } ,[pathname])

  useEffect(_=> { 
    blogs.length < 1 
    ?  baseURL.get("").then(e => setdata(e.data.data))
    :  baseURL.get("").then(e => setdata(e.data.data))
   } ,[])



  return (
    <section className='blog' id='Blog'>
      
      <div className="bgCover"  >  <img  width={30} height={30}   src={IMG3} alt="blog"  /> </div>
      <div className="container"> 
        <div className="h1"onClick={_=> navigate("/blog")} style={{cursor:'pointer'}} data-aos="zoom-in" >{t("home.blog.h1")}</div> 
        <p className="phead" data-aos="zoom-in">{t("home.blog.phead")}</p>
      </div>
      <Slider_1_Img  data={blogs} settings={settings} />

    </section>
  )
})

export default Blog

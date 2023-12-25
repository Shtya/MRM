import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import IntroImg from "../assets/about-us/introBlog.jpg"
import OneBlog from '../components/helpers/OneBlog';
import Footer from '../components/Footer';
import Pattern1, { Divider } from '../components/patterns/Pattern1';

import IMG1 from "../assets/bg/b1.jpg"



import Animation from '../components/helpers/Animation';
import baseURL, { baseImg } from '../API/API';
import { useLocation } from 'react-router-dom';
import MetaTag from './MetaTag';

const Blogs = () => {
  const {pathname} = useLocation()

  const [blogs , setblogs] = useState([])
  useEffect(_=>{ baseURL.get("").then(res => { setblogs(res.data.data) } )} ,[pathname])
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
  return (
    <div className='blog-page'>
      <MetaTag title="Digital Marketing Updates and Tips for Business Growth " desc="Stay ahead with the latest digital marketing updates, Insights and expert tips for your Digital business growth with MRM`s informative blogs " />

      <Animation />
      <div className="container"> <Navbar /></div>
        <div className="coverIntro"> <img src={IntroImg} alt="blogs" loading="lazy" /></div>
        <Divider classn="divider divider-top" />
        <div className="quotation">
        <div className="bgCover"  >  <img  src={IMG1} alt="blogs" loading="lazy" /> </div>
        
          <div className="container">
                <p className="h3 " data-aos="fade-up">Stay updated with our latest news, strategies, and tactics to succeed in your business.</p>
          </div>
          </div>
        <Divider classn="divider " />
        <OneBlog onHere={true} classn="blog-1" name="Digital Marketing News" settings={settings}  blogs={blogs} />
        <Divider classn="divider-left" />
        <OneBlog onHere={false} classn="blog-2" name="Latest Updates & Insights" settings={settings}  blogs={blogs} />
        <Divider classn="divider" />
        <OneBlog onHere={true} classn="blog-3" name="Tips & Strategies" settings={settings}  blogs={blogs} />

      <Footer />
    </div>
  )
}

export default Blogs
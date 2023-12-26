import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {  useNavigate } from 'react-router-dom';
import Moment from 'react-moment';

import IMG1 from "../../assets/bg/b1.jpg"
import IMG3 from "../../assets/bg/b3.jpg"
import { Helmet } from 'react-helmet';

const OneBlog = ({classn ,blogs , settings , name , onHere }) => {
  const navigate = useNavigate() 

  return (
    <div className={`Slider_1_Img ${classn}`}>
      <Helmet> <script type="application/ld+json">{`{ "@context": "https://schema.org", "@type": "BlogPosting", "mainEntityOfPage": {   "@type": "WebPage",   "@id": "https://mrmadvertisingdubai.com/" }, "headline": ${blogs?.title}, "description": ${blogs?.desc}, "image": ${blogs?.thumbnail}, "datePublished": ${blogs?.createdAt}, "dateModified": dateModified }`}</script> </Helmet>
      
      {onHere ? <div className="bgCover"  >  <img  src={IMG3} alt="blog" loading="lazy" /> </div> : <div className="bgCover"  >  <img  src={IMG1} alt="blog" loading="lazy" /> </div>}
      <div className="h1 clip"> {name} </div>
          <Slider {...settings} className='container' >

            {blogs.map((e,index)=>(
                  <div  key={index} className="coverImg">
                      <img src={e.thumbnail} alt={e.title}  />
                      <div className="date" onClick={_=> navigate(`/blog/${e._id}`)} > <Moment format="dddd - YYYY/MM/DD" date={e.createdAt} /> </div>
                      <p className='h2' onClick={_=> navigate(`/blog/${e._id}`)} >{e?.title?.length > 60 ? e?.title?.slice(0,60) + ".." : e?.title }</p>
                      <button className='bt' onClick={_=> navigate(`/blog/${e._id}`)}> <i className="fa-solid fa-angle-right"></i> </button>
                  </div>
              ))}

          </Slider>
        </div>
  )
}

export default OneBlog
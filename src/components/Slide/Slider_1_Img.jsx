import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useNavigate } from 'react-router-dom';
import { baseImg, baseWEB } from '../../API/API';
import Moment from 'react-moment';
import { Helmet } from 'react-helmet';


const Slider_1_Img = ({data , settings }) => {
  const navigate = useNavigate()
  const schema =  data.map((e,index)=> (
      {"@context": "https://schema.org",
      "@type": "ImageObject",
      "contentUrl": e.thumbnail,
      "description": e.title,
      "datePublished": e.createdAt}
    ))
  return (
    <div className="Slider_1_Img">
      <Helmet>
      <script type="application/ld+json">
        {`{
    "@context": ${baseWEB},
    "@type": "Blog",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": ${baseWEB}
    },
    "blogPost": {
      "@type": "BlogPosting",
      "headline": "Your Blog Headline",
      "datePublished": "2023-12-26",
      "dateModified": "2023-12-26",
      "articleBody": "Your blog content goes here"
    },
    "commentCount": count
  }`}
      </script>
      </Helmet>
          <Slider {...settings} className='container' >
            {data?.slice(0,5).map((e,index)=>(
                  <div  key={index} className="coverImg " data-aos="fade-up" data-aso-delay={`${index}00`}>
                      <img src={e.thumbnail} alt="blog" loading="lazy"  />
                      <div className="date" style={{cursor:"pointer"}} onClick={_=> navigate(`/blog/${e._id}`)} > <Moment format="dddd - YYYY/MM/DD" date={e.createdAt} /></div>
                      <p className='h2' style={{cursor:"pointer"}} onClick={_=> navigate(`/blog/${e._id}`)}     >{e?.title?.length > 60 ? e?.title?.slice(0,60) + ".." : e?.title }</p>
                      <button className='bt' onClick={_=> navigate(`/blog/${e._id}`)}> <i className="fa-solid fa-angle-right"></i> </button>
                  </div>
              ))}
          </Slider>
        </div>
  )
}

export default Slider_1_Img
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useNavigate } from 'react-router-dom';
import Moment from 'react-moment';
import Skeleton from '../Skeleton';


const Slider_1_Img = ({data , settings }) => {
  const navigate = useNavigate()

  return (
    <div className="Slider_1_Img">

          <Slider {...settings} className='container' >
            
            {data?.length > 1 
            ? 
            data?.slice(0,5).map((e,index)=>(
                  <div  key={index} className="coverImg " data-aos="fade-up" data-aso-delay={`${index}00`}>
                      <img src={e.thumbnail}  width={30} height={30}  alt="blog"   />
                      <div className="date" style={{cursor:"pointer"}} onClick={_=> navigate(`/blog/${e._id}`)} > <Moment format="dddd - YYYY/MM/DD" date={e.createdAt} /></div>
                      <p className='h2' style={{cursor:"pointer"}} onClick={_=> navigate(`/blog/${e._id}`)}     >{e?.title?.length > 60 ? e?.title?.slice(0,60) + ".." : e?.title }</p>
                      <button className='bt' onClick={_=> navigate(`/blog/${e._id}`)}> <i className="fa-solid fa-angle-right"></i> </button>
                  </div>
              ))
            : ( Array(3).fill(1).map((e,index)=> (<Skeleton key={index} />)))
            }
          </Slider>
        </div>
  )
}

export default Slider_1_Img
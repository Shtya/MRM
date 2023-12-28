
import React, { useEffect, useState , memo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import IMG1 from "../../assets/bg/b1.jpg"
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import {AnimatePresence, motion} from "framer-motion"
import { ImageGalleryBranding } from '../Images2';
import Configration from './Configration';



export default memo(function SliderBRAND () {
  const [media , settings ] = Configration()

  const taps = [ 
    {name:"all"  , type:"all" },
    {name:"Logo Design" , type:"Logo"},
    {name:"Web Design" , type:"Web"},
    {name:"Social Media Design" , type:"Socialmedia"},
    {name:"Packaging" , type:"packaging"},
    {name:"Graphic Design" , type:"Graphic"},
    {name:"Vehicle Branding" , type:"vehicles"},
    {name:"Staff Uniform" , type:"uniform"},
    {name:"Stationery" , type:"stationery"},
  ]
  const [data , setdata] = useState([])
  const [type , settype] = useState("all")
  useEffect(_=>{setdata(ImageGalleryBranding)},[])
  
  const handleFilter = (ele) => {
    const filter  = ImageGalleryBranding.filter((e)=> e.type.includes(ele))
    setdata(filter)
    settype(ele)
  }


  return (
    <div className="GALLERY">
        <div className="bgCover"  >  <img  src={IMG1} alt="branding" loading="lazy" /> </div>
        <div className="h1">OUR WORKS</div>
        <ul className='header1 header4' > {taps.map((e,index)=> (<li className={type == e.type ? "active p" : "p"} onClick={_=>handleFilter(e.type)} key={index}>{e.name}</li>))} </ul>

        <AnimatePresence>
          <div className="container">
            <Swiper {...settings}   className="mySwiper"  >
              
              {data?.map((e,index)=>( <SwiperSlide key={index}> 
              <motion.div layout animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opactiy: 0 }} transition={{duration:.2}} className='coverImg' >  <img src={e.img} loading='lazy' alt={e?.alt || e?.type}  /></motion.div> </SwiperSlide> )) }

            </Swiper>
          </div>
          </AnimatePresence>

    </div>
  );
})

import React, { useEffect, useState , memo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import {AnimatePresence, motion} from "framer-motion"
import { ImageGalleryHome } from '../Images2';
import IMG1 from "../../assets/bg/b1.jpg"
import Configration from './Configration';



export default memo(function SliderWEB() {
  const [media , settings ] = Configration()

  const [data , setdata] = useState([])
  useEffect(_=>{setdata(ImageGalleryHome.filter(e=> e.type.includes("Web")))},[])
  
  return (
    <div className="GALLERY">
        <div className="bgCover"  >  <img  src={IMG1} alt="web-design" loading="lazy" /> </div>
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

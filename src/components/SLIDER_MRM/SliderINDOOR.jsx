import React, { useEffect, useState , memo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import IMG1 from "../../assets/bg/b3.jpg"
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import {AnimatePresence, motion} from "framer-motion"
import { ImageGalleryOutdoor } from '../Images2';
import Configration from './Configration';



export default memo(function SliderINDOOR() {
  const [media , settings ] = Configration()
  const settings2 = {
    onSlideChange:() =>{
      document.querySelector(".swiper-slide-active img")
      settype(document?.querySelector(".swiper-slide-active img")?.dataset?.type.split(" ")[0])
    },
  }
  const taps = [
    {name:"Health-Safety" , type:"health"} ,
    {name:"Menu Boards" , type:"menu"} ,
    {name:"Reception Signage" , type:"reception"} ,
    {name:"Office Signs" , type:"office"} ,
  ]
  const [data , setdata] = useState([])
  const [type , settype] = useState("all")
  useEffect(_=>{setdata(ImageGalleryOutdoor.filter(e=> e.type.includes("all")))},[])
  
  const handleFilter = (ele) => {
    const filter  = ImageGalleryOutdoor.filter((e)=> e.type.includes(ele))
    setdata(filter)
    settype(ele)
  }

  return (
    <div className="GALLERY">
        <div className="bgCover"  >  <img  src={IMG1} alt="indoor" loading="lazy" /> </div>
        <div className="h1"> Indoor Signages gallery </div>
        <ul className='header1 header3' > {taps.map((e,index)=> (<li className={type == e.type ? "active p" : "p"} onClick={_=>handleFilter(e.type)} key={index}>{e.name}</li>))} </ul>

        <AnimatePresence>
          <div className="container">
            <Swiper {...settings2} {...settings}   className="mySwiper"  >
              
              {data?.map((e,index)=>(<SwiperSlide key={index} >
            <motion.img 
              layout animate={{ opacity: 1  }} initial={{ opacity: 0 }} 
              exit={{ opactiy: 0 }} transition={{duration:.6}} 
              className="coverImg"  data-type={`${e.type}`}  
              src={e.img} loading='lazy'  alt={e?.alt || e?.type}   />
            </SwiperSlide>)) }
            </Swiper>
          </div>
          </AnimatePresence>

    </div>
  );
})

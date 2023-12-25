
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay , Grid, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import {AnimatePresence, motion} from "framer-motion"
import { ImageGalleryHome } from '../Images2';
import Img1 from "../../assets/bg/b2.jpg"


export default function SliderPHOTO() {
  const [media , setmedia ] = useState(2)
  const settings = {
    autoplay:{ delay: 2500 , disableOnInteraction:false  } ,
    slidesPerView : media , 
    grid : { fill: "row", rows:2 } ,
    spaceBetween : 20,
    pagination :{   clickable: true } , 
    modules : [Autoplay , Grid, Pagination] , 
    breakpoints : {100: { slidesPerView: 1 ,grid:{ rows:2 , fill:"row"} } , 700: { slidesPerView: 2 ,grid:{ rows:2 , fill:"row"} }  }
  }

  useEffect(() => {
    const handleResize = () => {  window.innerWidth > 700 ? setmedia(2) : setmedia(1) };
    window.addEventListener('resize', handleResize);
    return () => { window.removeEventListener('resize', handleResize); };
  }, [window]);


  const taps = [ {name :"Videography", type:"Videograph"}, {name :"Events",      type:"Events"}, {name :"Fashion " , type:"Fashion "}, {name :"Food",    type:"Food"}, {name :"Product", type:"Product"}, {name :"Automotive", type:"Automotive"}, {name :"Real Estate", type:"Real Estate"},]

  const [data , setdata] = useState([])
  const [type , settype] = useState("all")
  useEffect(_=>{setdata(ImageGalleryHome)},[])
  
  const handleFilter = (ele) => {
    const filter  = ImageGalleryHome.filter((e)=> e.type.includes("all"))
    setdata(filter)
    settype(ele)
  }


  return (
    <div className="GALLERY">
        <div className="bgCover"  >  <img  src={Img1} alt="photography" loading="lazy" /> </div>
        <div className="h1">OUR WORKS</div>
        <ul className='header1' > {taps.map((e,index)=> (<li className={type == e.type ? "active p" : "p"} onClick={_=>handleFilter(e.type)} key={index}>{e.name}</li>))} </ul>

        <AnimatePresence>
          <div className="container">
            <Swiper {...settings}   className="mySwiper"  >
              
              {data?.map((e,index)=>( <SwiperSlide key={index}> 
              <motion.div layout animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opactiy: 0 }} transition={{duration:.2}} className='coverImg' >  <img src={e.img} loading='lazy' alt="slider" /></motion.div> </SwiperSlide> )) }

            </Swiper>
          </div>
          </AnimatePresence>

    </div>
  );
}
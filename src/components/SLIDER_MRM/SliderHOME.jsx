
import React, { useEffect, useState , memo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {AnimatePresence, motion} from "framer-motion"
import IMG3 from "../../assets/bg/b3.jpg"
import { ImageGalleryHome } from '../Images2';
import Configration from './Configration';
import { Animate } from '../../App';


 const SliderHOME =  memo(() => {
  const [media , settings ] = Configration()

  const header =[ {name :"all"  , type:"all"}, {name :"Signages" , type:"Signages"}, {name :"Stands" , type:"Displaystands"}, {name :"Exhibition" , type:"Exhibition"}, {name :"branding" , type:"branding"}, {name :"photography" , type:"photography"}, {name :"Web design" , type:"Web"},]

  const [data , setdata] = useState([])
  const [type , settype] = useState("all")
  useEffect(_=>{setdata(ImageGalleryHome)},[])
  
  const handleFilter = (ele) => {
    const filter  = ImageGalleryHome.filter((e)=> e.type.includes(ele))
    setdata(filter)
    settype(ele)
  }

  return (
    <div className="GALLERY">
        <div className="bgCover"  >  <img  src={IMG3} alt="home" loading="lazy" /> </div>
        <div className="h1">OUR WORKS</div>
        <ul className='header1 header2' data-aos={Animate} > {header?.map((e,index)=> (<li className={type == e.type ? "active p" : "p"} onClick={_=>handleFilter(e.type)} key={index}>{e.name}</li>))} </ul>

        <AnimatePresence>
          <div className="container">
            <Swiper {...settings}   className="mySwiper" data-aos={Animate } >
              
              {data?.map((e,index)=>( <SwiperSlide key={index}> 
              <motion.div layout animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opactiy: 0 }} transition={{duration:.2}} className='coverImg' >  <img src={e.img} loading='lazy'  alt={e?.alt || e?.type}   /></motion.div> </SwiperSlide> )) }

            </Swiper>
          </div>
          </AnimatePresence>

    </div>
  );
})


export default SliderHOME
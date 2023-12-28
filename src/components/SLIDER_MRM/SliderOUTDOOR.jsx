
import React, { useEffect, useState , memo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay , Grid, Pagination } from 'swiper/modules';
import IMG1 from "../../assets/bg/b1.jpg"
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import {AnimatePresence, motion} from "framer-motion"
import { ImageGalleryIndoor } from '../Images2';



export default memo(function SliderOUTDOOR() {
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


  const taps = [
    {name:"LED Signages" , type:"Led-signage"} ,  
    {name:"Building Wrap" , type:"Building-Wrap"} ,  
    {name:"Lamp Post Signs" , type:"Lamp-Post"} ,  
    {name:"Unipole Signs " , type:"unipole"} ,  
  ]
  const [data , setdata] = useState([])
  const [type , settype] = useState("Led-signage")
  useEffect(_=>{setdata(ImageGalleryIndoor.filter(e=> e.type.includes("Led-signage")))},[])
  
  const handleFilter = (ele) => {
    const filter  = ImageGalleryIndoor.filter((e)=> e.type.includes(ele))
    setdata(filter)
    settype(ele)
  }


  return (
    <div className="GALLERY">
        <div className="bgCover"  >  <img  src={IMG1} alt="outdoor" loading="lazy" /> </div>
        <div className="h1">Outdoor Signages gallery</div>
        <ul className='header1 header3' > {taps.map((e,index)=> (<li className={type == e.type ? "active p" : "p"} onClick={_=>handleFilter(e.type)} key={index}>{e.name}</li>))} </ul>

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

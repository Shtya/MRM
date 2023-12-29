
import React, { useEffect, useState , memo, useRef } from 'react';
import {AnimatePresence, motion} from "framer-motion"
import IMG3 from "../../assets/bg/b3.jpg"
import { ImageGalleryHome } from '../Images2';
import { Animate } from '../../App';
import { Swiper, SwiperSlide  } from 'swiper/react';
import { Autoplay , Grid, Pagination  } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

    const SliderHOME =  memo(() => {
    const [media , setmedia ] = useState(2)
    const header =[
    {name :"Signages" , type:"Signages"}, 
    {name :"Stands" , type:"Displaystands"}, 
    {name :"Exhibition" , type:"Exhibition"}, 
    {name :"branding" , type:"branding"}, 
    {name :"photography" , type:"photography"}, 
    {name :"Web design" , type:"Web"},]


  const settings = {
    autoplay:{ delay: 2500 , disableOnInteraction:false  } ,
    slidesPerView : media , 
    grid : { fill: "row", rows:2 } ,
    spaceBetween : 20,
    pagination :{   clickable: true } , 
    modules : [Autoplay , Grid, Pagination] , 
    breakpoints : {100: { slidesPerView: 1 ,grid:{ rows:2 , fill:"row"} } , 700: { slidesPerView: 2 ,grid:{ rows:2 , fill:"row"} }  },
    onSlideChange:() =>{
      document.querySelector(".swiper-slide-active img")
      settype(document.querySelector(".swiper-slide-active img")?.dataset?.type.split(" ")[0])
    },
  }

  useEffect(() => {
    const handleResize = () => {  window.innerWidth > 700 ? setmedia(2) : setmedia(1) };
    window.addEventListener('resize', handleResize);
    return () => { window.removeEventListener('resize', handleResize); };
  }, [window]);

  const [data , setdata] = useState([])
  const [type , settype] = useState("Signages")
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
              <Swiper  {...settings}    className="mySwiper" data-aos={Animate } >
                {data?.map((e,index)=>( 
                    <SwiperSlide key={index} >
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


export default SliderHOME

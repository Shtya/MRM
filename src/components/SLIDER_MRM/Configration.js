

import React, { useEffect, useState } from 'react'
import { Autoplay , Grid, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';


const Configration = () => {
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

  

  return [media , settings ]
}

export default Configration

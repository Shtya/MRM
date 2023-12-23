import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import {ImgsClients} from "../components/Images"

const GALLERY = () => {
  const data = ImgsClients() ;
  return (
    <div className='GALLERY'>

    </div>
  )
}

export default GALLERY
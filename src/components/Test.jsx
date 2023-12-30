

import React, { useEffect, useState , memo } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay , Grid, Pagination  } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/grid';
// import 'swiper/css/pagination';


const Test =  memo(({header1 , typeOf , DATA}) => {




  return (
    <div className=" GALLERY2">

            <div class="swiper-container">
              <div className="swiper-wrapper">
              <div class="swiper-slide">Slide 1</div>
              <div class="swiper-slide">Slide 2</div>
              <div class="swiper-slide">Slide 3</div>
              <div class="swiper-slide">Slide 4</div>
              <div class="swiper-slide">Slide 5</div>
              <div class="swiper-slide">Slide 6</div>
              <div class="swiper-slide">Slide 7</div>
              <div class="swiper-slide">Slide 8</div>
              <div class="swiper-slide">Slide 9</div>
              
              {/* <Swiper    
                slidesPerView={3}
                slidesPerColumn= {2}
             //slidesPerColumnFill: "row",
             slidesPerGroup={ 6}
                spaceBetween= {30}
             >
                
     
                    <SwiperSlide  >
                           1
                    </SwiperSlide>
                    <SwiperSlide  >
                           2
                    </SwiperSlide>
                    <SwiperSlide  >
                           3
                    </SwiperSlide>
                    <SwiperSlide  >
                           4
                    </SwiperSlide>
                    <SwiperSlide  >
                           5
                    </SwiperSlide>
                    <SwiperSlide  >
                           6
                    </SwiperSlide>
                    <SwiperSlide  >
                           7
                    </SwiperSlide>
                    <SwiperSlide  >
                           8
                    </SwiperSlide>
                    <SwiperSlide  >
                           9
                    </SwiperSlide>

                    

              </Swiper> */}
              </div>
          </div>

{/* <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">Slide 1</div>
      <div class="swiper-slide">Slide 2</div>
      <div class="swiper-slide">Slide 3</div>
      <div class="swiper-slide">Slide 4</div>
      <div class="swiper-slide">Slide 5</div>
      <div class="swiper-slide">Slide 6</div>
      <div class="swiper-slide">Slide 7</div>
      <div class="swiper-slide">Slide 8</div>
      <div class="swiper-slide">Slide 9</div>
      <div class="swiper-slide">Slide 10</div>
    </div>
    <div class="swiper-pagination"></div>
  </div> */}

    </div>
  );
})


export default Test

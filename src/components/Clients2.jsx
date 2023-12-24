import Slider_3_Img from "./Slide/Slider_3_Img"
import {useState } from "react";

import clients18 from "../assets/clients/(1).png"
import clients20 from "../assets/clients/(2).png"
import clients22 from "../assets/clients/(3).png"
import clients23 from "../assets/clients/(4).png"
import clients24 from "../assets/clients/(5).png"
import clients25 from "../assets/clients/(6).png"
import clients26 from "../assets/clients/(7).png"
import clients27 from "../assets/clients/(8).png"
import clients28 from "../assets/clients/(9).png"
import clients29 from "../assets/clients/(10).png"
import clients30 from "../assets/clients/(11).png"
import clients31 from "../assets/clients/(12).png"
import clients32 from "../assets/clients/(13).png"
import clients33 from "../assets/clients/(14).png"
import clients34 from "../assets/clients/(15).png"
import clients35 from "../assets/clients/(16).png"
import clients36 from "../assets/clients/(17).png"
import clients38 from "../assets/clients/(32).png"
import clients39 from "../assets/clients/(19).png"
import clients40 from "../assets/clients/(20).png"
import clients41 from "../assets/clients/(21).png"
import clients42 from "../assets/clients/(22).png"
import clients43 from "../assets/clients/(23).png"
import clients44 from "../assets/clients/(24).png"
import clients45 from "../assets/clients/(25).png"
import clients46 from "../assets/clients/(26).png"
import clients47 from "../assets/clients/(27).png"
import clients48 from "../assets/clients/(28).png"
import clients49 from "../assets/clients/(29).png"
import clients50 from "../assets/clients/(30).png"
import clients51 from "../assets/clients/(31).png"
import clients52 from "../assets/clients/(33).png"
import clients53 from "../assets/clients/(34).png"


var settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  autoplaySpeed: 2000 ,
  slidesToShow: 6,
  slidesToScroll: 2 , 
  autoplay:true ,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide: 1 ,
        dots: false,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1 ,
        dots: false,
      }
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1 ,
        dots: false,
      }
    }
  ]
};



const Clients2 = () => {
  const ClientsImg = [ clients18 ,clients20 ,clients22 ,clients23 ,clients24 ,clients25 ,clients26 ,clients27 ,clients28 ,clients29 ,clients30 ,clients31 ,clients32 ,clients33 ,clients34 ,clients35 ,clients36  ,clients38 ,clients39 ,clients40 ,clients41 ,clients42 ,clients43 ,clients44 ,clients45 ,clients46 ,clients47 ,clients48 ,clients49 ,clients50 ,clients51 ,clients52 ,clients53  ];
    return (
    <section className='Clients2' id='Clients'>
      <div className="container">
      <div className="h1 " data-aos="fade-up" >OUR CLIENTS</div>
      </div>
      <Slider_3_Img data={ClientsImg} settings={settings} />

    </section>
  )
}

export default Clients2
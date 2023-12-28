import Slider_3_Img from "./Slide/Slider_3_Img"
import IMG3 from "../assets/bg/b1.jpg"
import { memo } from "react";


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



const Clients2 = memo(() => {
    return (
    <section className='Clients2' id='Clients'>
      <div className="bgCover"  >  <img  src={IMG3} alt="services" loading="lazy" /> </div>
      <div className="container">
      <div className="h1 " data-aos="fade-up" >OUR CLIENTS</div>
      </div>
      <Slider_3_Img  settings={settings} />

    </section>
  )
})

export default Clients2
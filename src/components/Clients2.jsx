import Slider_3_Img from "./Slide/Slider_3_Img"
import { ImgsClients } from "./Images";
import { useEffect, useState } from "react";
import { Pattern2, Pattern3, Pattern5} from "./patterns/Pattern1";


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
  const ClientsImg = ImgsClients() ;
  const [data , setdata] = useState(ClientsImg)


    return (
    <section className='Clients2' id='Clients'>
      {/* <Pattern2 /> */}
      <div className="container">
      <div className="h1 " data-aos="fade-up" >OUR CLIENTS</div>

      {/* <div className="box-shape"> <span/> <img src={data[0]} alt="" /> </div> */}
      </div>
      <Slider_3_Img data={data} settings={settings} />

    </section>
  )
}

export default Clients2
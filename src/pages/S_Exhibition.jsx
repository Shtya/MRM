import React, {  useState } from "react";
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ImgIntro from "../assets/bg/b9.jpg"
import ImgSection from "../assets/Intro&Cover/cover-exhibition.jpg"



import Icon_1 from "../assets/Icon/Impact (3).png" ;
import Icon_2 from "../assets/Icon/Impact (4).png" ;
import Icon_3 from "../assets/Icon/Impact (2).png" ;
import Icon_4 from "../assets/Icon/Impact (6).png" ;
import Icon_5 from "../assets/Icon/Impact (1).png" ;
import Icon_6 from "../assets/Icon/Impact (5).png" ;

import DisplayStand1  from "../assets/gallery/displayStand/display-stands1.jpg" ;
import DisplayStand2  from "../assets/gallery/displayStand/display-stands2.jpg" ;
import DisplayStand3  from "../assets/gallery/displayStand/display-stands3.jpg" ;
import DisplayStand4  from "../assets/gallery/displayStand/display-stands4.jpg" ;
import DisplayStand6  from "../assets/gallery/displayStand/display-stands6.jpg" ;
import DisplayStand7  from "../assets/gallery/displayStand/display-stands7.jpg" ;

import Exhibition1 from "../assets/gallery/exhibitionStand/Exhibition1.jpg" ;
import Exhibition2 from "../assets/gallery/exhibitionStand/Exhibition2.jpg" ;
import Exhibition3 from "../assets/gallery/exhibitionStand/Exhibition3.jpg" ;
import Exhibition4 from "../assets/gallery/exhibitionStand/Exhibition4.jpg" ;
import Exhibition5 from "../assets/gallery/exhibitionStand/Exhibition5.jpg" ;
import Exhibition6 from "../assets/gallery/exhibitionStand/Exhibition6.jpg" ;
import Exhibition7 from "../assets/gallery/exhibitionStand/Exhibition7.jpg" ;
import Exhibition8 from "../assets/gallery/exhibitionStand/Exhibition8.jpg" ;
import Exhibition9 from "../assets/gallery/exhibitionStand/Exhibition9.jpg" ;


import Animation from "../components/helpers/Animation";
import { Pattern9 } from "../components/patterns/Pattern1";
import IMG1 from "../assets/bg/b1.jpg"
import IMG2 from "../assets/bg/b3.jpg"
import IMG3 from "../assets/bg/b2.jpg"
import Contact from "../components/Contact";
import MetaTag from "./MetaTag";


const BRANDING_SERVICES = [
  { img:Icon_1 , title:"Customized Designs" , desc:"We create unique stands that reflect your brand identity and marketing goals. Our stands can have a modern or traditional design to meet your preferences."},
  { img:Icon_2 , title:"Quality Craftsmanship" , desc:"We take pride in delivering exhibition stands of the highest quality. Our stands are not just visually appealing but also durable and sturdy, ensuring they serve you for multiple exhibitions and events."},
  { img:Icon_3 , title:"Innovative Concepts" , desc:"Our designers are known for their creativity. They will work closely with you to develop innovative concepts that make your stand a focal point of any exhibition. We integrate the latest trends and technologies to ensure your order is on the cutting edge."},
  { img:Icon_4 , title:"Turnkey Solutions" , desc:"We provide end-to-end solutions, managing design, production, and installation so you can focus on your exhibition goals. Our expert team ensures a stress-free experience."},
  { img:Icon_5 , title:"On-Time Delivery" , desc:"We understand the importance of deadlines. You can count on us to deliver your exhibition stand on time, allowing you to plan and prepare effectively for your upcoming event."},
  { img:Icon_6 , title:"Cost-Effective Options" , desc:"We offer a range of options to suit your budget. We aim to provide cost-effective solutions without compromising on quality."},
  ]


const S_Exhibition = () => {
  const DisplayStands = [
    {img:DisplayStand1, animate:"fade-up" } ,
    {img:DisplayStand2, animate:"fade-up" } ,
    {img:DisplayStand3, animate:"fade-up" } ,
    {img:DisplayStand4, animate:"fade-up" } ,
    {img:DisplayStand6, animate:"fade-up" } ,
    {img:DisplayStand7, animate:"fade-up" } ,
  ]
  const Exhibition = [
    {img:Exhibition1, animate:"fade-up" } ,
    {img:Exhibition2, animate:"fade-up" } ,
    {img:Exhibition3, animate:"fade-up" } ,
    {img:Exhibition4, animate:"fade-up" } ,
    {img:Exhibition5, animate:"fade-up" } ,
    {img:Exhibition6, animate:"fade-up" } ,
    {img:Exhibition7, animate:"fade-up" } ,
    {img:Exhibition8, animate:"fade-up" } ,
    {img:Exhibition9 , animate:"fade-up" } ,
  ]


  const [Img , setImg] = useState()

  return (
    <div className="S_Exhibition landing">
      <div className="container"> <Navbar /> </div>
      <MetaTag title="Best Exhibition & display stand designing services in Dubai " desc="Discover our customized exhibition stands and display stands in Dubai for a powerful and lasting impression on your audience." />
      <Animation />
      <div className="coverIntro" data-aos="zoom-in-left"><img src={ImgIntro} alt="exhibition & display stands services" loading="lazy" /> </div>

      <div className="home">
          <div className="container">
              <div className="boxImg" data-aos="zoom-in-left" data-aos-delay="400"> <img src={ImgSection} alt="exhibition & display stands services" loading="lazy" />  </div>
              <div className="boxs" data-aos="zoom-in-right" data-aos-delay="600" >
                  <h2 className='h1 '> The Best Exhibition stands & display stand designing services in Dubai</h2>
                  <h2 className='h2 '> Our exhibition and display stands are masterpieces that create lasting impressions</h2>
                  <p className='p '> With our exclusive exhibition stands in Dubai, we can help you stand out from the crowd at trade shows and events. We customize our exhibition stands according to our customers' specifications to ensure they excel at their intended purpose. Our team can design your order from scratch, maximizing the available space in any given environment.</p>
            </div>

        </div>
      </div>

      <Pattern9 />
      <div className="quotation">
        <div className="bgCover" data-aos="zoom-in"  >   <img  src={IMG1} alt="exhibition & display stands services" loading="lazy" />  </div>
            <div className="container">
                 <div className="h3" data-aos="zoom-in-up" >We offer high-quality stands for businesses in Dubai to appear more professional and convey their brand's message.  You can customize your free-standing display with options that align perfectly with your brand identity and marketing objectives.  Add your logo, informative panels, and eye-catching graphics to leave a powerful impression on your target audience.</div>
            </div>
        </div>
        

        <Pattern9 />
      <div className="exhibition-stands sec-1">
        <div className="bgCover"  >   <img  src={IMG3} alt="exhibition & display stands services" loading="lazy" />  </div>
        <div className="container" data-aos="zoom-in-up"> <div className="h1" style={{marginBottom:"30px"}}>Take a look at our designs for exhibition stands gallery</div></div>
        <div className="container">
          <div className="boxs">
            {Exhibition.map((e,index)=> ( <div key={index}  className="coverImg" data-aos="fade-up"> <i onClick={_=> setImg(e.img)} className="fa-solid fa-compress"></i> <img src={e.img} alt="slider" /> </div> ))}
            {Img && <div className="show-img"> 
              <img src={Img} alt="exhibition & display stands services" loading="lazy" data-aos="zoom-in" /> 
              <i onClick={_=>setImg("")} className="fa-regular fa-circle-xmark"></i>
            </div>}
          </div>
        </div>
      </div>
      
        <Pattern9 />
      <div className="exhibition-stands ">
        <div className="bgCover"  >   <img  src={IMG2} alt="exhibition & display stands services" loading="lazy" />  </div>
        <div className="container"> <div className="h1" style={{marginBottom:"30px"}}>Take a look at our designs for Display stands gallery</div></div>
        <div className="container">
          <div className="boxs">
            {DisplayStands.map((e,index)=> ( <div key={index} data-aos="zoom-in-up"  className="coverImg"> <i onClick={_=> setImg(e.img)} className="fa-solid fa-compress"></i> <img src={e.img} alt="slider" /> </div> ))}
            {Img && <div className="show-img"> 
              <img src={Img} alt="exhibition & display stands services" loading="lazy" data-aos="zoom-in-up" /> 
              <i onClick={_=>setImg("")} className="fa-regular fa-circle-xmark"></i>
            </div>}
          </div>
        </div>
      </div>
      
      <Pattern9 />
      <div className="impact">
        <div className="bgCover"  >   <img  src={IMG2} alt="exhibition & display stands services" loading="lazy" />  </div>
            <div className="container">
            <div className="container"><div className="h1" data-aos="fade-up">Why Choose Us for Your Exhibition & Display Stands Needs?</div></div>
                <div className="boxs">
                  {
                    BRANDING_SERVICES.map((e,index)=> (
                      <div className="box"  key={index} data-aos="zoom-in-up">
                          <div className="coverImg hidden-img"> <img src={e.img} alt="exhibition & display stands services" loading="lazy" /> </div>
                          <div className="text" >
                              <div className="h2 clip ">{e.title} </div>
                              <div className="p ">{e.desc} </div>
                          </div>
                      </div>
                    ))
                  }
                </div>
            </div>
        </div>
        <Contact />
        <Footer />
      </div>
  )
}

export default S_Exhibition






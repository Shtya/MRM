import React, { useEffect, useState } from "react";


import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ImgIntro from "../assets/Exhibition/intro.jpg"
import ImgSection from "../assets/Exhibition/cover.jpg"



import Icon_1 from "../assets/S_gifts/offer1.png" ;
import Icon_2 from "../assets/S_gifts/offer4.png" ;
import Icon_3 from "../assets/S_gifts/(4).png" ;
import Icon_4 from "../assets/S_gifts/(6).png" ;
import Icon_5 from "../assets/S_gifts/(7).png" ;
import Icon_6 from "../assets/S_gifts/offer3.png" ;

import Exhibition1 from "../assets/gallery/exhibition stand/(1).jpg" ;
import Exhibition2 from "../assets/gallery/exhibition stand/(2).jpg" ;
import Exhibition3 from "../assets/gallery/exhibition stand/(3).jpg" ;
import Exhibition4 from "../assets/gallery/exhibition stand/(4).jpg" ;
import Exhibition5 from "../assets/gallery/exhibition stand/(5).jpg" ;
import Exhibition6 from "../assets/gallery/exhibition stand/(6).jpg" ;
import Exhibition7 from "../assets/gallery/exhibition stand/(7).jpg" ;
import Exhibition8 from "../assets/gallery/exhibition stand/(8).jpg" ;
import Exhibition9 from "../assets/gallery/exhibition stand/(9).jpg" ;

import DisplayStand1  from "../assets/gallery/display stand/display-stands (1).jpg" ;
import DisplayStand2  from "../assets/gallery/display stand/display-stands (2).jpg" ;
import DisplayStand3  from "../assets/gallery/display stand/display-stands (3).jpg" ;
import DisplayStand4  from "../assets/gallery/display stand/display-stands (4).jpg" ;
import DisplayStand5  from "../assets/gallery/display stand/display-stands (5).jpg" ;
import DisplayStand6  from "../assets/gallery/display stand/display-stands (6).jpg" ;
import DisplayStand7  from "../assets/gallery/display stand/display-stands (7).jpg" ;

import Animation from "../components/helpers/Animation";
import { Pattern9 } from "../components/patterns/Pattern1";
import {Fade , Zoom , Rotate , Bounce} from 'react-reveal';

import IMG1 from "../assets/bg/b1.jpg"
import IMG2 from "../assets/bg/bg5.jpg"
import IMG3 from "../assets/bg/bg3.jpg"


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
    {img:DisplayStand5, animate:"fade-up" } ,
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
      <Animation />
      <div className="coverIntro"> <Zoom> <img src={ImgIntro} alt="" /> </Zoom> </div>

      <div className="home">
          <div className="container">
              <div className="boxImg hidden-img" > <Bounce> <img src={ImgSection} alt="" /> </Bounce> </div>
              <div className="boxs"  >
                <Fade right >
                  <h2 className='h1 hidden-text'> The Best Exhibition stands & display stand designing services in Dubai</h2>
                  <h2 className='h2 hidden-text'> Our exhibition and display stands are masterpieces that create lasting impressions</h2>
                  <p className='p hidden-text'> With our exclusive exhibition stands in Dubai, we can help you stand out from the crowd at trade shows and events. We customize our exhibition stands according to our customers' specifications to ensure they excel at their intended purpose. Our team can design your order from scratch, maximizing the available space in any given environment.</p>
                  </Fade>
            </div>

        </div>
      </div>

      <Pattern9 />
      <div className="quotation">
        <div className="bgCover"  >    <img  src={IMG1} alt="" />  </div>
            <div className="container">
                <Zoom> <div className="h3" >We offer high-quality stands for businesses in Dubai to appear more professional and convey their brand's message.  You can customize your free-standing display with options that align perfectly with your brand identity and marketing objectives.  Add your logo, informative panels, and eye-catching graphics to leave a powerful impression on your target audience.</div></Zoom>
            </div>
        </div>
        

        <Pattern9 />
      <div className="exhibition-stands">
        <div className="bgCover"  >    <img  src={IMG3} alt="" />  </div>
        <div className="container">  <Fade top> <div className="h1" style={{marginBottom:"30px"}}>Take a look at our designs for exhibition stands gallery</div> </Fade></div>
        <div className="container">
          <div className="boxs">
            {Exhibition.map((e,index)=> ( <div key={index}  className="coverImg"> <i onClick={_=> setImg(e.img)} className="fa-solid fa-compress"></i> <Zoom> <img src={e.img} /> </Zoom> </div> ))}
            {Img && <div className="show-img"> 
              <Zoom> <img src={Img} alt="" />  </Zoom>
              <i onClick={_=>setImg("")} className="fa-regular fa-circle-xmark"></i>
            </div>}
          </div>
        </div>
      </div>
      
        <Pattern9 />
      <div className="exhibition-stands ">
        <div className="bgCover"  >    <img  src={IMG2} alt="" />  </div>
        <div className="container">  <Fade top> <div className="h1" style={{marginBottom:"30px"}}>Take a look at our designs for Display stands gallery</div> </Fade></div>
        <div className="container">
          <div className="boxs">
            {DisplayStands.map((e,index)=> ( <div key={index}   className="coverImg"> <i onClick={_=> setImg(e.img)} className="fa-solid fa-compress"></i> <Zoom> <img src={e.img} /> </Zoom> </div> ))}
            {Img && <div className="show-img"> 
              <Zoom> <img src={Img} alt="" />  </Zoom>
              <i onClick={_=>setImg("")} className="fa-regular fa-circle-xmark"></i>
            </div>}
          </div>
        </div>
      </div>
      
      <Pattern9 />
      <div className="impact">
        <div className="bgCover"  >    <img  src={IMG2} alt="" />  </div>
            <div className="container">
            <div className="container"> <Fade top> <div className="h1 clip">Why Choose Us for Your Exhibition & Display Stands Needs?</div> </Fade></div>
                <div className="boxs">
                  {
                    BRANDING_SERVICES.map((e,index)=> (
                      <div className="box"  key={index}>
                        <Fade top>
                          <div className="coverImg hidden-img"> <img src={e.img} alt="" /> </div>
                          <div className="text" >
                              <div className="h2 clip hidden-text">{e.title} </div>
                              <div className="p hidden-text">{e.desc} </div>
                          </div>
                          </Fade>
                      </div>
                    ))
                  }
                </div>
            </div>
        </div>
      {/* <Contact title="Ready to Boost Your Gifting Experience? " desc="Contact us to create unforgettable memories together!" /> */}
      <Footer />
      </div>
  )
}

export default S_Exhibition






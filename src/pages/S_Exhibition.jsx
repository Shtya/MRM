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
import Hero from "../components/helpers/Hero";
import Qutation from "../components/helpers/Qutation";
import ExhibitionGallery  from "../components/helpers/Exhibition";
import Impact from "../components/helpers/Impact";

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
  const schema = {
    "@context": "http://schema.org",
    "@type": "Exhibition-and-display-stand",
    "url": "https://mrmadvertisingdubai.com/exhibition-and-display-stand-agency-in-dubai",
    "publisher": {
      "@type": "Organization",
      "name": "MRM Advertising",
      "logo": {
        "@type": "ImageObject",
        "url": "https://mrmadvertisingdubai.com/Logo1.png"
      }
    }
  };
  return (
    <div className="S_Exhibition landing">
      <MetaTag canonical="exhibition-and-display-stand-agency-in-dubai" schema={schema} title="Leading Display stand and Exhibition stands Company in Dubai" desc="Discover our Unique Exhibition and Display Stands for a Powerful and Lasting Impression on your Audience. Contact MRM, the Best Exhibition Stands Company in Dubai" />
      <Animation />
      
      <Hero
        H1="The Best Exhibition stands & display stand designing services in Dubai" 
        H2="Our exhibition and display stands are masterpieces that create lasting impressions" 
        H3="With our exclusive exhibition stands in Dubai, we can help you stand out from the crowd at trade shows and events. We customize our exhibition stands according to our customer's specifications to ensure they meet their intended purpose.  Our team can design your order from scratch, maximizing the available space in any given environment. " 
        Img={ImgSection} 
        nameServices="Luxurious event exhibition space" 
        titleServices="Elegant -Exhibit -Design"
        Imgintro={ImgIntro} />
      
      <Qutation 
        Img={IMG1} 
        title1="We provide premium Display and Exhibition Stands for businesses in Dubai to enhance their brand image and convey their message " 
        desc1="You can customize your free-standing display with options that align perfectly with your brand identity and marketing objectives. Add your logo, informative panels, and eye-catching graphics to leave a powerful impression on your target audience. " />

      <Pattern9 />
      <ExhibitionGallery classn="exhibition-stands sec-1" title="Have a Look at Our Designs For Exhibition Stands" Img={IMG3}  nameServices="exhibition & display stands services"  data={Exhibition}  />

      <Pattern9 />
      <ExhibitionGallery classn="exhibition-stands" title="Have a Look at Our Designs for Display Stands" Img={IMG1}  nameServices="exhibition & display stands services"  data={DisplayStands}  />
      
      <Pattern9 /> 
      <Impact classn="impact" Img={IMG2} data ={BRANDING_SERVICES} title ="Why Choose MRM for Exhibition Stands Services" nameServices ="exhibition & display stands services" />


        <Contact number={1} title="Crafting Exhibit Perfection " desc="Connect with Us for Remarkable Stands" />
        <Footer />
      </div>
  )
}

export default S_Exhibition






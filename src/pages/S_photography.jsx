import Grid1 from "../assets/Intro&Cover/Why-photo.jpg" ;
import ImgIntro from "../assets/bg/b9.jpg"
import ImgSection from "../assets/Intro&Cover/cover-photo.jpg"

import IMG1 from "../assets/bg/b1.jpg"
import IMG2 from "../assets/bg/b2.jpg"
import IMG3 from "../assets/bg/b1.jpg"

import Photography_1 from "../assets/gallery/photography/photo1.jpg" ;
import Photography_2 from "../assets/gallery/photography/photo2.jpg" ;
import Photography_3 from "../assets/gallery/photography/photo3.jpg" ;
import Photography_4 from "../assets/gallery/photography/photo4.jpg" ;
import Photography_5 from "../assets/gallery/photography/photo5.jpg" ;
import Photography_6 from "../assets/gallery/photography/photo6.jpg" ;
import Photography_7 from "../assets/gallery/photography/photo7.jpg" ;
import Photography_8 from "../assets/gallery/photography/photo8.jpg" ;
import Photography_9 from "../assets/gallery/photography/photo9.jpg" ;

import Videography2 from "../assets/gallery/videography/(2).jpg" ;
import Videography3 from "../assets/gallery/videography/(3).jpg" ;
import Videography4 from "../assets/gallery/videography/(4).jpg" ;
import Videography5 from "../assets/gallery/videography/(5).jpg" ;
import Videography6 from "../assets/gallery/videography/(6).jpg" ;
import Videography7 from "../assets/gallery/videography/(7).jpg" ;
import Videography8 from "../assets/gallery/videography/(8).jpg" ;
import Videography9 from "../assets/gallery/videography/(9).jpg" ;

import Animation from "../components/helpers/Animation";
import  { Pattern9 } from "../components/patterns/Pattern1";
import MetaTag from "./MetaTag";


import Qutation   from "../components/helpers/Qutation"
import Footer  from "../components/Footer"
import Hero from "../components/helpers/Hero"
import PHOTOgraphy from "../components/helpers/PHOTOgraphy"
import Serach2  from "../components/helpers/Serach2"
import Contact  from "../components/Contact"

import React , { memo } from "react"
import SliderHOME from "../components/SLIDER_MRM/SliderHOME";
import { ImageGalleryPotography } from "../components/Images2";

const SERVICES = [
  { img:Photography_2 , title:"Events photography" , desc:"From corporate gatherings to unique celebrations, we capture the essence of your events, ensuring that every moment is preserved."},
  { img:Photography_5 , title:"Fashion photography" , desc:"Our fashion photography services offer high-quality images that showcase your products or the latest trends. We use advanced techniques to emphasize the style and elegance of your clothing, accessories, or lifestyle shots."},
  { img:Photography_6 , title:"Business Portraits & Headshots" , desc:"Make a lasting impression with professional headshots and portraits that reflect the essence of your business."},
  { img:Photography_7 , title:"Food photography" , desc:"Showcase your culinary creations with mouthwatering food photography that entices your audience."},
  { img:Photography_8 , title:"Product photography" , desc:"Highlight the details and features of your products with our product photography services."},
  { img:Photography_9 , title:"Automotive photography" , desc:"From sleek cars to rugged vehicles, our automotive photography captures the beauty and power of automobiles."},
  { img:Photography_1 , title:"Hospitality photography" , desc:"Create an inviting atmosphere with hospitality photography that showcases your venue's charm."},
  { img:Photography_3 , title:"Real Estate photography" , desc:"Document the progress of construction projects, showcase real estate listings, and capture the essence of the lifestyle your brand represents."},
  { img:Photography_4 , title:"Trade Shows photography" , desc:"Our photography services are tailored to showcase your presence at exhibitions, conferences, and trade shows, highlighting your brand's participation."},
]
const SERVICES2 = [
  { img:Videography5 , title:"Exhibitions, Conference & Trade Show Filming" , desc:"Showcase your participation in industry events with professionally filmed videos."},
  { img:Videography3 , title:"Corporate Films" , desc:"Tell your brand's story with compelling corporate videos that resonate with your audience."},
  { img:Videography6 , title:"Event Filming" , desc:"Preserve the memories of your events with event filming that captures every significant moment."},
  { img:Videography2 , title:"Behind-the-Scene Videos" , desc:"Offer your audience an exclusive look at your brand's inner workings with behind-the-scenes videos."},
  { img:Videography9 , title:"Fashion Videography" , desc:" Our high-quality videos capture the essence of your clothing, accessories, or lifestyle shots with advanced cinematic techniques. Let us create a visual story that sets your brand apart."},
  { img:Videography8 , title:"Promotional Videos for Product & Brand" , desc:"Promote your products and brand with videos that leave a lasting impact."},
  { img:Videography7 , title:"YouTube/Facebook/Instagram Short Ads" , desc:"Create short, impactful social media ads that engage your audience."},
  { img:Videography4 , title:"Real Estate Product Demo" , desc:"Showcase real estate properties with product demonstration videos that provide a virtual tour."} ,
  // { animate:"fade-up", img:Videography1 , title:"Real Estate Product Demo" , desc:"Showcase real estate properties with product demonstration videos that provide a virtual tour."}
]

const WHY = [
  {  title:"Brilliant, Powerful, Creative Images and Professional Photographers" , desc:"We are committed to delivering stunning and creative visuals through the expertise of our professional photographers."},
  {  title:"Master Photographers for Personal & Corporate Events in the UAE" , desc:"Our photographers excel in capturing the essence of both personal and corporate events across the UAE."},
  {  title:"Bespoke Fashion Photography and Videography in the UAE" , desc:"Our services are tailored for fashion brands to meet your unique needs and capture the essence of your designs."},
  {  title:"Fantastic Photoshoot Consultation & Preparation" , desc:"We believe in meticulous preparation to ensure every photoshoot succeeds."},
  {  title:"Comprehensive Services, from Headshots to Commercial" , desc:"Whether you need headshots for your team or commercial photography and videography, we offer a full range of services to meet your needs."},
]

const S_photography = () => {
  const schema = {
    "@context": "http://schema.org",
    "@type": "photography-and-videography",
    "url": "https://mrmadvertisingdubai.com/Photography-In-Dubai",
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
    <div className="S_photography landing">
      <MetaTag canonical="Photography-In-Dubai" schema={schema} title="Top Photography & Videography services in Dubai, UAE" desc="Discover MRM's Wide Range of videography and Photography Services in Dubai: Events, Fashion, Food and Automotive, all Telling your Brand's Story." />
      <Animation />

      <Hero H1="Capture your brand's Story with our Professional Photography Services In Dubai  " H2="Our Photographers Create Lasting Memories and Showcase your Brand through Captivating Stories " H3="We specialize in capturing moments that tell a compelling story and creating visually engaging content. At MRM, we offer a wide range of high-quality photography and videography services to enhance your brand and narrative. Whether you need product photography, event coverage, or promotional videos, we have the expertise to deliver content that captivates and communicates." Img={ImgSection} nameServices="Photography&videography" Imgintro={ImgIntro} />

      <Qutation Img={IMG1}  desc1="Our core belief is that every brand, product, and event has a unique story that deserves to be told. We use a delicate balance of light and shadow, the subtleties of expression, and the seamless integration of creativity and technology to bring to life the enchanting essence of your narrative." />

      <Pattern9 />
      <PHOTOgraphy classn="photography-services"  Img ={IMG2} nameServices ="photography&videography" title ="Our Photography Services " data ={SERVICES} />
      
      <Pattern9 />
      <PHOTOgraphy classn="Videography-services"  Img ={IMG3} nameServices ="photography&videography" title ="Our Videography Services " data ={SERVICES2} />

      <Pattern9 />  
      <SliderHOME DATA={ImageGalleryPotography} typeOf="Videograph"   header1={[ {name :"Videography", type:"Videograph"}, {name :"Events",      type:"Events"}, {name :"Fashion " , type:"Fashion "}, {name :"Food",    type:"Food"}, {name :"Product", type:"Product"}, {name :"Automotive", type:"Automotive"}, {name :"Real Estate", type:"Real-Estate"}]} />
    

      <Pattern9 />
      <Serach2 Img ={IMG1} Imgsection ={Grid1} title ="Why Choose Us?" data={WHY} />

      <Contact number={3} title="Let's Craft the Perfect Ending to your Brand's Story Together" desc=" " />

      <Footer />
      </div>
  )
}

export default memo(S_photography)






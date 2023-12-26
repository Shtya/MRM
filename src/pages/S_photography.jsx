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
import SliderPHOTO from "../components/SLIDER_MRM/SliderPHOTO"
import Hero from "../components/helpers/Hero"
import PHOTOgraphy from "../components/helpers/PHOTOgraphy"
import Serach2  from "../components/helpers/Serach2"
import Contact  from "../components/Contact"



const SERVICES = [
  { animate:"fade-up", img:Photography_2 , title:"Events" , desc:"From corporate gatherings to unique celebrations, we capture the essence of your events, ensuring that every moment is preserved."},
  { animate:"fade-up", img:Photography_6 , title:"Business Portraits & Headshots" , desc:"Make a lasting impression with professional headshots and portraits that reflect the essence of your business."},
  { animate:"fade-up", img:Photography_3 , title:"Real Estate" , desc:"Document the progress of construction projects, showcase real estate listings, and capture the essence of the lifestyle your brand represents."},
  { animate:"fade-up", img:Photography_4 , title:"Exhibitions and Trade Shows" , desc:"Our photography services are tailored to showcase your presence at exhibitions, conferences, and trade shows, highlighting your brand's participation."},
  { animate:"fade-up", img:Photography_7 , title:"Food" , desc:"Showcase your culinary creations with mouthwatering food photography that entices your audience."},
  { animate:"fade-up", img:Photography_8 , title:"Product" , desc:"Highlight the details and features of your products with our product photography services."},
  { animate:"fade-up", img:Photography_9 , title:"Automotive" , desc:"From sleek cars to rugged vehicles, our automotive photography captures the beauty and power of automobiles."},
  { animate:"fade-up", img:Photography_1 , title:"Hospitality" , desc:"Create an inviting atmosphere with hospitality photography that showcases your venue's charm."},
  { animate:"fade-up", img:Photography_5 , title:"Fashion" , desc:"Our fashion photography services offer high-quality images that showcase your products or the latest trends. We use advanced techniques to emphasize the style and elegance of your clothing, accessories, or lifestyle shots."},
]
const SERVICES2 = [
  { animate:"fade-up", img:Videography5 , title:"Exhibitions, Conference & Trade Show Filming" , desc:"Showcase your participation in industry events with professionally filmed videos."},
  { animate:"fade-up", img:Videography3 , title:"Corporate Films" , desc:"Tell your brand's story with compelling corporate videos that resonate with your audience."},
  { animate:"fade-up", img:Videography6 , title:"Event Filming" , desc:"Preserve the memories of your events with event filming that captures every significant moment."},
  { animate:"fade-up", img:Videography2 , title:"Behind-the-Scene Videos" , desc:"Offer your audience an exclusive look at your brand's inner workings with behind-the-scenes videos."},
  { animate:"fade-up", img:Videography9 , title:"Fashion Videography" , desc:" Our high-quality videos capture the essence of your clothing, accessories, or lifestyle shots with advanced cinematic techniques. Let us create a visual story that sets your brand apart."},
  { animate:"fade-up", img:Videography8 , title:"Promotional Videos for Product & Brand" , desc:"Promote your products and brand with videos that leave a lasting impact."},
  { animate:"fade-up", img:Videography7 , title:"YouTube/Facebook/Instagram Short Ads" , desc:"Create short, impactful social media ads that engage your audience."},
  { animate:"fade-up", img:Videography4 , title:"Real Estate Product Demo" , desc:"Showcase real estate properties with product demonstration videos that provide a virtual tour."} ,
  // { animate:"fade-up", img:Videography1 , title:"Real Estate Product Demo" , desc:"Showcase real estate properties with product demonstration videos that provide a virtual tour."}
]

const WHY = [
  { animate:"fade-up" , title:"Brilliant, Powerful, Creative Images and Professional Photographers" , desc:"We are committed to delivering stunning and creative visuals through the expertise of our professional photographers."},
  { animate:"fade-up" , title:"Master Photographers for Personal & Corporate Events in the UAE" , desc:"Our photographers excel in capturing the essence of both personal and corporate events across the UAE."},
  { animate:"fade-up" , title:"Bespoke Fashion Photography and Videography in the UAE" , desc:"Our services are tailored for fashion brands to meet your unique needs and capture the essence of your designs."},
  { animate:"fade-up" , title:"Fantastic Photoshoot Consultation & Preparation" , desc:"We believe in meticulous preparation to ensure every photoshoot succeeds."},
  { animate:"fade-up" , title:"Comprehensive Services, from Headshots to Commercial" , desc:"Whether you need headshots for your team or commercial photography and videography, we offer a full range of services to meet your needs."},
]

const S_photography = () => {

  return (
    <div className="S_photography landing">
      <MetaTag title="Top Photography & Videography services in Dubai " desc="Discover our photography and videography services in Dubai, from event photography to product videography. MRM provides optimal solutions." />
      <Animation />
      {/* <Hero H1="" H2="" H3="" Img={ImgSection} nameServices="" Imgintro={ImgIntro} /> */}
      {/* <Qutation Img={IMG1}  desc1="" /> */}

      <Hero H1="Capture your brand's story with our professional visual storytelling." H2="We turn moments into memories and transform your brand's essence into a compelling narrative. " H3="We specialize in capturing moments that tell a compelling story and creating visually engaging content. At MRM, we offer a wide range of high-quality photography and videography services to enhance your brand and narrative. Whether you need product photography, event coverage, or promotional videos, we have the expertise to deliver content that captivates and communicates." Img={ImgSection} nameServices="Photography&videography" Imgintro={ImgIntro} />

      <Qutation Img={IMG1}  desc1="Our core belief is that every brand, product, and event has a unique story that deserves to be told. We use a delicate balance of light and shadow, the subtleties of expression, and the seamless integration of creativity and technology to bring to life the enchanting essence of your narrative." />

      <Pattern9 />
      <PHOTOgraphy classn="photography-services"  Img ={IMG2} nameServices ="photography&videography" title ="Our Photo gallery" data ={SERVICES} />
      
      <Pattern9 />
      <PHOTOgraphy classn="Videography-services"  Img ={IMG3} nameServices ="photography&videography" title ="Types of Videography gallery" data ={SERVICES2} />

      <Pattern9 />  
      <SliderPHOTO />
    

      <Pattern9 />
      <Serach2 Img ={IMG1} Imgsection ={Grid1} title ="Why Choose Us?" data={WHY} />

      <Contact />

      <Footer />
      </div>
  )
}

export default S_photography






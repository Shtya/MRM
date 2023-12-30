import Footer from '../components/Footer'
import ImgIntro from "../assets/bg/b9.jpg"
import ImgSection from "../assets/Intro&Cover/cover-branding.jpg"
import Grid1 from "../assets/S_branding/why.jpg" ;

import Icon_1 from "../assets/S_branding/1.png" ;
import Icon_2 from "../assets/S_branding/2.png" ;
import Icon_3 from "../assets/S_branding/3.png" ;
import Icon_4 from "../assets/S_branding/4.png" ;
import Icon_5 from "../assets/S_branding/5.png" ;
import Icon_6 from "../assets/S_branding/6.png" ;
import Icon_7 from "../assets/S_branding/7.png" ;
import Icon_8 from "../assets/S_branding/8.png" ;

import approach_1 from "../assets/S_branding/approach1.png" ;
import approach_2 from "../assets/S_branding/approach2.png" ;
import approach_3 from "../assets/S_branding/approach3.png" ;
import approach_4 from "../assets/S_branding/approach4.png" ;

import Animation from '../components/helpers/Animation'
import { Divider} from '../components/patterns/Pattern1'
import IMG1 from "../assets/bg/b1.jpg"
import IMG2 from "../assets/bg/b2.jpg"
import Contact from '../components/Contact'
import MetaTag from './MetaTag'
import Hero from '../components/helpers/Hero';
import Qutation from '../components/helpers/Qutation';
import Plateforms from '../components/helpers/Plateforms';
import Serach2 from '../components/helpers/Serach2';

import React , {  memo } from "react"
import SliderHOME from '../components/SLIDER_MRM/SliderHOME';
import { ImageGalleryBranding } from '../components/Images2';


const Approach = [
  { img:approach_1 , title:"Comprehensive Solutions" , desc:"We offer a complete branding solution to ensure consistent messaging across all touchpoints. Trust us to elevate your brand and achieve your business goals."},
  { img:approach_2 , title:"Experienced Designers" , desc:"With our team of seasoned designers, you can be confident that every project will receive the perfect blend of creativity and strategic thinking. We guarantee that your brand will stand out from the rest."},
  { img:approach_3 , title:"Tailored to Your Brand" , desc:"No two brands are the same. We tailor our designs to reflect the unique identity and values of your business."},
  { img:approach_4 , title:"Result-Driven Approach" , desc:"Our focus is on delivering results. Whether it's increased brand recognition or customer engagement, we measure success by your achievements."},
  ]


const BRANDING_SERVICES = [
  { img:Icon_1 , title:"Logo Design"   , desc:"Capture the essence of your brand with a unique and memorable logo. Our expert designers blend creativity with strategy to create a symbol that embodies your brand identity."},
  { img:Icon_2 , title:"Web Design"   , desc:"Your digital presence is the face of your brand. Our web design services ensure a visually stunning and user-friendly online experience that captivates your audience."},
  { img:Icon_3 , title:"Social Media Design"   , desc:"Navigate the dynamic world of social media with eye-catching designs. From engaging posts to cohesive brand aesthetics, we ensure your brand shines across digital platforms."},
  { img:Icon_4 , title:"Packaging"   , desc:"Our packaging designs not only protect but also enhance your product's visual appeal, leaving a lasting impression on your customers."},
  { img:Icon_5 , title:"Graphic Design"   , desc:"Beyond aesthetics, our graphic designs communicate your brand's message effectively. From brochures to banners, we create visuals that leave a lasting impact."},
  { img:Icon_6 , title:"Vehicle Branding"   , desc:"Take your brand on the move with eye-catching vehicle designs. Turn every commute into a promotional opportunity with our impactful vehicle branding services."},
  { img:Icon_7 , title:"Staff Uniform"   , desc:"Foster brand representation and unity with custom staff uniforms, turning your team into brand ambassadors who embody your business."},
  { img:Icon_8 , title:"Digital & Offset Printing "   , desc:"From business cards to letterheads, our stationery designs convey professionalism and consistency, leaving a lasting impression on every interaction."},
  ]


const S_Branding = () => {
  const schema = {
    "@context": "http://schema.org",
    "@type": "branding",
    "url": "https://mrmadvertisingdubai.com/branding-agency-in-dubai",
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
    <div className="S_Branding landing">
      <Animation />
      <MetaTag canonical="branding-agency-in-dubai" schema={schema} title="Unleash Your Brand's Power with the Top Branding Agency in Dubai" desc="Stand out with Unique Logo Design, Backaging & Impactful Social media Designs Contact MRM, The Top Branding Agency in Dubai for All Your Branding Needs" />
      <Hero H1="Unleash Your Brand's Full Potential with the Top Branding Agency in Dubai " H2="Partner With Us to Bring your Brand Identity to Life, Both Online and Offline with Our Expert Branding Services in Dubai " H3="Your brand goes way beyond a simple logo or your visual identity. Your brand is your voice, your story and how every aspect of your business makes your customers feel. We don't just create your brand identity; we work with you to implement and grow it digitally and in real life. " Img={ImgSection} nameServices="Elegant branding materials set" titleServices="Brand-Identity-Suite " Imgintro={ImgIntro} />
      <Qutation Img={IMG1} title1="Enhance Your Brand with Our Comprehensive Branding Services "  desc1="MRM is your partner in crafting compelling brand narratives. Our diverse range of branding services ensures that your brand stands out and tells a story that resonates with your audience." />
     
      <Divider classn="divider-left" />
      <Plateforms Img={IMG2} title="Our Branding Services" data={BRANDING_SERVICES} nameServices="branding services" />
      
      <Divider classn="divider" />
       {/* <SliderBRAND /> */}
       <SliderHOME DATA={ImageGalleryBranding} typeOf="Logo" classHeader="header4"   header1={[{name:"Logo Design" , type:"Logo"},{name:"Web Design" , type:"Web"},{name:"Social Media Design" , type:"Socialmedia"},{name:"Packaging" , type:"packaging"},{name:"Graphic Design" , type:"Graphic"},{name:"Vehicle Branding" , type:"vehicles"},{name:"Staff Uniform" , type:"uniform"},{name:"Stationery" , type:"stationery"}]} />


      <Divider classn="divider-left" />
      <Serach2 Img={IMG2} Imgsection={Grid1} title="Why Choose MRM for Your Branding Needs?" altImg="Luminous 'M' branding display" titleImg="Branding-Spotlight-Feature" data={Approach} />

      <Contact number={8} title="Are You Ready to Add Some Magic to Your Brand?" desc="Contact Us to Start Your Journey to Success" />
      <Footer />
      </div>
  )
}

export default memo(S_Branding)






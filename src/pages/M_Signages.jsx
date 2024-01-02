import Footer from '../components/Footer'
import ImgIntro from "../assets/bg/b9.jpg"
import ImgSection from "../assets/Intro&Cover/cover-signages.jpg"

import Icon_1 from "../assets/Icon/process (2).png" ;
import Icon_2 from "../assets/Icon/process (3).png" ;
import Icon_3 from "../assets/Icon/process (4).png" ;
import Icon_4 from "../assets/Icon/process (5).png" ;
import Icon_5 from "../assets/Icon/process (6).png" ;


import Animation from '../components/helpers/Animation'
import{  Pattern9 } from '../components/patterns/Pattern1'
import IMG2 from "../assets/bg/b3.jpg"
import IMG1 from "../assets/bg/b1.jpg"
import Contact from '../components/Contact'
import MetaTag from './MetaTag'
import Hero from '../components/helpers/Hero'
import Qutation from '../components/helpers/Qutation'
import Process from '../components/helpers/Process'



import React , { memo } from "react"
import { ImageGalleryIndoor, ImageGalleryIndoorSchema, ImageGalleryOutdoor, ImageGalleryOutdoorSchema } from '../components/Images2';
import SliderHOME from '../components/SLIDER_MRM/SliderHOME';
import SliderGalleryIndoor from '../components/SLIDER_MRM/SliderGalleryIndoor';


const process = [
  {img: Icon_1, title:"Planning" ,desc:"During planning, we consider every detail to create signage that resonates with your brand and clients.Effective planning saves time and resources."},
  {img: Icon_2, title:"Designing" ,desc:"Our designers craft strategies to guide your visitors, and customers within your space. We assess colors, themes, and more for the perfect indoor and outdoor signage."},
  {img: Icon_3, title:"Permits" ,desc:"Our team navigate city codes, ensuring your signage complies with regulations. We handle approvals, so your brand shines in every area."},
  {img: Icon_4, title:"Fabrication" ,desc:"Our state-of-the-art facility uses cutting-edge technology to craft high-quality signage for your project."},
  {img: Icon_5, title:"Installation" ,desc:"Proper installation ensures your signage is set up correctly and safely, allowing your brand to shine."},
]


const M_Signages = memo(() => {
  const schema = {
    "@context": "http://schema.org",
    "@type": "indoor-and-outdoor-signages",
    "url": "https://mrmadvertisingdubai.com/indoor-and-outdoor-signages-agency-in-dubai",
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
    <div className="M_Signages landing">
      <MetaTag canonical="indoor-and-outdoor-signages-agency-in-dubai" schema={schema} title="Custom Designs with one of The Best Signage Companies in Dubai" desc="Discover How Our Signage Expertise Can Transform Your Space.MRM One of The Best Signage Companies in Dubai Contact. Us for Creative Signage Solutions" />
      <Animation />
      <Hero H1="Craft Your Vision, Achieve Your Goals With One of Best The Signage Companies in Dubai " H2="We Offers a Wide Range of Custom signage services in Dubai " H3="MRM produces high-quality custom signs in the UAE using premium materials and state-of-the-art equipment to ensure your signage is truly outstanding." Img={ImgSection} nameServices="signages services" Imgintro={ImgIntro} />
      <Qutation Img={IMG1} title1="We Promise Excellent Signage Services by Combining your Vision with our Expertise "  desc1="MRM's team of experts specializes in developing custom sign designs based on clients' requirements. we take care of every project aspect, from the concept and design phase to production and installation. MRM is committed to delivering quality service and ensuring customer satisfaction. Clients can trust MRM to handle everything related to their custom signage installation." />

      <Pattern9 />
      {/* <SliderOUTDOOR /> */}
      <SliderHOME schema={ImageGalleryOutdoorSchema} DATA={ImageGalleryOutdoor} typeOf="Led-signage"   header1={[{name:"LED Signages" , type:"Led-signage"} ,  {name:"Building Wrap" , type:"Building-Wrap"} ,  {name:"Lamp Post " , type:"Lamp-Post"} ,  {name:"Unipole Signs " , type:"unipole"} ,  ]} />


      <Pattern9 />
      <SliderGalleryIndoor schema={ImageGalleryIndoorSchema} classGallery="Gallery2" DATA={ImageGalleryIndoor} typeOf="Health-safety"   header1={[{name:"Health Safety" , type:"Health-safety"} ,{name:"Menu Boards" , type:"Menu-boards"} ,{name:"Reception " , type:"reception"} ,{name:"Office Signs" , type:"Office-signs"} ]} />
      {/* <SliderINDOOR /> */}


      <Pattern9 />
      <Process Img={IMG2} title="Signage creation process" desc="Our custom signages captures attention and gives every project  an elegant and professional finish" data={process} />



      <Contact title="Customize Your Signage Now" desc="Transform Your Space with Creative Signage" number={2} />
      <Footer />
      </div>
  )
})

export default M_Signages






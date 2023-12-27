import IMG1 from "../assets/bg/b1.jpg"
import ImgIntro from "../assets/bg/b9.jpg"
import ImgSection from "../assets/Intro&Cover/cover-webdesign.jpg"


import Social_1 from "../assets/Icon/_1.png"
import Social_2 from "../assets/Icon/_2.png"
import Social_3 from "../assets/Icon/_3.png"
import Social_4 from "../assets/Icon/_4.png"

import Icon_1 from "../assets/Icon/icon-1.png" ;
import Icon_2 from "../assets/Icon/icon-2.png" ;
import Icon_3 from "../assets/Icon/icon-3.png" ;
import Icon_4 from "../assets/Icon/icon-4.png" ;
import Icon_5 from "../assets/Icon/icon-5.png" ;
import Icon_6 from "../assets/Icon/icon-6.png" ;
import Icon_7 from "../assets/Icon/icon-7.png" ;
import Icon_8 from "../assets/Icon/icon-8.png" ;
import MetaTage from "../pages/MetaTag"

import Animation from '../components/helpers/Animation'
import {Pattern9 } from '../components/patterns/Pattern1'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
import SliderWEB from '../components/SLIDER_MRM/SliderWEB'

import Qutation  from "../components/helpers/Qutation"
import Social_media from "../components/helpers/Social_media"

const SocialMedia = [
  {classn :"hidden hidden-left" , img:Social_4 , title:"E-commerce Development Services   " , desc:"In today's fast-paced digital landscape, having a user-friendly and robust online store is an advantage and a necessity for e-commerce businesses. At MRM Agency, we offer top-notch E-commerce Development Services that can transform your online business and enhance your brand's presence. Whether you're starting a new e-commerce venture or want to improve an existing one, our team is here to turn your e-commerce aspirations into reality."},
  {classn :"hidden hidden-left" , img:Social_1 , title:"UI & UX Design"                     , desc:"Our team is highly proficient in delivering exceptional User Experience (UX) and User Interface (UI) designs. We take pride in crafting captivating and user-centric digital experiences that set us apart in web design and development. Whether you need an engaging website, a user-friendly app, or a seamless digital platform, we are confident in our ability to turn your vision into a reality. Trust us to create a digital experience that exceeds your expectations."},
  {classn :"hidden hidden-left" , img:Social_2 , title:"PHP Development"                    , desc:"Our team of skilled PHP developers harnesses the versatility of this scripting language to craft dynamic and interactive websites. Whether it involves customizing existing PHP frameworks or developing bespoke solutions, we ensure optimal performance and scalability."},
  {classn :"hidden hidden-left" , img:Social_3 , title:"WordPress Development"              , desc:"As experts in WordPress, we leverage this popular content management system to create intuitive, user-friendly, and visually appealing websites. From theme customization to plugin development, we have the expertise to make your WordPress site stand out."},
  ]

const Approach = [
    { img:Icon_1 , title:"Understanding Your Business" , desc:"We begin by getting to know your business, industry, and target audience. This knowledge forms the foundation of our web development strategy."},
    { img:Icon_2 , title:"Custom Design"               , desc:"Every business is unique, and your website should reflect that. Our design team creates custom website layouts tailored to your brand identity and goals."},
    { img:Icon_3 , title:"Responsive Design"           , desc:"With the increasing use of mobile devices, having a responsive website is non-negotiable. We ensure your site looks and functions flawlessly on all screen sizes."},
    { img:Icon_4 , title:"SEO Integration"             , desc:"Our web development team collaborates closely with our SEO specialists to ensure your site is optimized for search engines from the ground up. This includes keyword research, on-page SEO, and technical SEO enhancements."},
    { img:Icon_5 , title:"Content Management"          , desc:"We empower you to manage your website easily. Our content management systems (CMS) make it simple to update content, add new pages, and keep your site fresh."},
    { img:Icon_6 , title:"E-commerce Solutions"        , desc:"If you're in the business of selling products online, we can create a secure and efficient e-commerce platform tailored to your needs."},
    { img:Icon_7 , title:"Testing and Quality Assurance", desc:"Before launch, we rigorously test your website to ensure  it functions flawlessly and is free of any bugs or issues."},
    { img:Icon_8 , title:"Launch and Beyond"            , desc:" Once your website is live, our support doesn't end. We provide ongoing maintenance, updates, and support to ensure your site continues to perform optimally."},
]


const S_WebDesign = () => {
  const schema = {
    "@context": "http://schema.org",
    "@type": "web-design",
    "url": "https://mrmadvertisingdubai.com/web-design",
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

<div className="WEB_DESIGN landing" >
      <Animation />
      <MetaTage canonical="web-design" schema={schema} title="Expert Web Development and Design Services in Dubai, UAE" desc="Capture your audience with our web design and development services for exceptional results for startups and businesses." />
      
      <div className="container"> <Navbar /> </div>

      <div className="coverIntro"> <img data-aos="zoom-in"  src={ImgIntro} alt="web design services" loading="lazy" /></div>
      <div className="home">
        <div className="container">
          <div  data-aos="fade-right" data-aos-delay="400" className="boxImg " >  <img  src={ImgSection} alt="web design services" loading="lazy" /> </div>
          <div className="boxs" data-aos="fade-left" data-aos-delay="600" >
            <h1 className='h1 ' >Boost the Effectiveness of Your Website's Online Presence. </h1>
            <h2 className='h2 ' > Transforming Visions into Seamless Experiences with Our Cutting-Edge Web Design and Development. </h2>
            <div className="inner-boxs" >

              <ul className="box">
                <li className='li ' >UI & UX Design </li>
                <li className='li ' >PHP Development </li>
              </ul>

              <ul className="box box-2">
                <li className='li ' >WordPress Development </li>
                <li className='li ' >E-commerce Development </li>
              </ul>

            </div>
          </div>
        </div>
      </div>

      
        <Qutation Img={IMG1} title1="MRM is Your Partner in Web Development and Design in Dubai, UAE" desc1="MRM Agency is committed to delivering outstanding web design and development services in Dubai, UAE. Our services are carefully customized to meet the specific requirements of businesses. Whether you're a startup seeking to make a strong online impression or an established business looking to revitalize your digital presence, we're here to turn your vision into a captivating reality." />
        

        <Pattern9 />
        
        <Social_media data={SocialMedia} Img={IMG1} title="Our Specializations" desc="We specialize in the following web design and development services" />


        <Pattern9 classn="Abrotch" />
        <div className="our_Approach">
        <div className="bgCover" > <img  src={IMG1} alt="web design services" loading="lazy" /> </div>
            <div className="container">
                <div className="circle">
                    <div className='text'>
                        <div className="container1">
                            <div className="h1 clip">Our Approach </div>
                            <div className="p">Our web development and design process is rooted in creativity, functionality, and strategic thinking </div>
                        </div>
                    </div>
                    {
                    Approach.map((e,index)=>(
                        <span key={index} data-aos="fade-right"  className={`span-${index+1}`}>
                            <div className="coverImg"> <img src={e.img} alt="web design services" loading="lazy" /> </div>
                            <div className={`content content-${index+1}`}>
                                <div className="h2 clip"> {e.title} </div>
                                <div className="p"> {e.desc} </div>
                            </div>
                        </span>
                    ))
                    }
                </div>
            </div>
        </div>
      
        <Pattern9 />
        
        <SliderWEB    />

      
        <Contact />

      
        <Footer />
      </div>
  )
}

export default S_WebDesign
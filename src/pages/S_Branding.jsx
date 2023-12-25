import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ImgIntro from "../assets/bg/b9.jpg"
import ImgSection from "../assets/S_branding/cover.jpg"
import Grid1 from "../assets/S_branding/why.jpg" ;
import  SliderBRAND from "../components/SLIDER_MRM/SliderBRAND"



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
import OnePlatform from '../components/OnePlatform'

import Animation from '../components/helpers/Animation'
import { Divider} from '../components/patterns/Pattern1'
import IMG1 from "../assets/bg/b1.jpg"
import IMG2 from "../assets/bg/b2.jpg"
import Contact from '../components/Contact'
import MetaTag from './MetaTag'

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
  { img:Icon_8 , title:"Stationery"   , desc:"From business cards to letterheads, our stationery designs convey professionalism and consistency, leaving a lasting impression on every interaction."},
  ]


const S_Branding = ({header =true}) => {
 
  return (
    <div className="S_Branding landing">
      <div className="container"> <Navbar /> </div>
      <Animation />
      <MetaTag title=" Unleash Your Brand's Power with the Top Branding Agency in Dubai" desc="Stand out with unique logos, captivating web experiences & impactful social media designs! Contact us for comprehensive branding solutions ." />
      <div className="coverIntro" data-aos="zoom-in-right" > <img src={ImgIntro} alt="branding services" loading="lazy" /></div>

      <div className="home">
          <div className="container">
              <div className="boxImg n-border" data-aos="zoom-in-right" data-aos-delay="400"  >  <img src={ImgSection} alt="branding services" loading="lazy" /> </div>
              <div className="boxs"  data-aos="zoom-in-left" data-aos-delay="600"  >
                  <h2 className='h1 '> Unleash the Full Power and Potential of Your Brand! </h2>
                  <h2 className='h2 '> Partner with us to bring your brand identity to life, both online and offline </h2>
                  <p className='p '> 
                   Your brand is your voice, your story – and it's how every aspect of your business makes your customers feel.
                   we work with you to implement and grow it digitally and in real life. </p>
                  Your brand goes way beyond a simple logo, or your visual identity.
                   We don't just create your brand identity
            </div>
        </div>
      </div>
      <Divider classn="divider" />
      <div className="quotation">
         <div className="bgCover"  >  <img  src={IMG1} alt="branding services" loading="lazy" /> </div>
          <div className="container">
              <div className="h2 "  data-aos="fade-up"  > Elevate Your Brand with Our Comprehensive Branding Services  </div>
              <div className="h3 " data-aos="fade-up"  data-aos-delay="200" >  MRM, your partner in crafting compelling brand narratives. Our diverse range of branding services ensures that your brand stands out and tells a story that resonates with your audience. </div>
          </div>
        </div>

        <Divider classn="divider-left" />
        <div className="platforms">
         <div className="bgCover"  >  <img  src={IMG2} alt="branding services" loading="lazy" /> </div>
          <div className="container">
              <h3 className='h1'data-aos="fade-up">Our Branding Services</h3>
              <div className="boxs" data-aos="fade-up">
                  {
                    BRANDING_SERVICES.map((e,index)=> (
                      <OnePlatform key={index} classn={`box-${index+1}`} img={e.img} title={e.title}   paragraph={e.desc} />
                    ))
                  }
              </div>
          </div>
      </div>

      <Divider classn="divider" />
      <SliderBRAND />

      <Divider classn="divider-left" />
        <div className="searching2">
         <div className="bgCover"  >  <img  src={IMG2} alt="branding services" loading="lazy" /> </div>
            <div className="container">
              <div className="coverImg " data-aos="fade-right"> <img src={Grid1} alt="branding services" loading="lazy" /> </div>

              <div className="boxs" data-aos="fade-up">
                <h1 className='h1' data-aos="fade-left">Why Choose Us</h1>
              {Approach.map((e,index)=>(
                <div key={index}>
                  <h3 className='h2 ' data-aos="fade-left">{e.title}</h3>
                  <h2 className='p ' data-aos="fade-left">{e.desc}</h2>
                </div>
                  ))}
              </div>
          </div>
      </div>

      <Contact />
      <Footer />
      </div>
  )
}

export default S_Branding






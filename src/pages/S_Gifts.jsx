import Footer from '../components/Footer'
import ImgIntro from "../assets/bg/b9.jpg"
import ImgSection from "../assets/Intro&Cover/cover-gifts.jpg"

import Icon_1 from "../assets/S_gifts/offer1.png" ;
import Icon_2 from "../assets/S_gifts/offer2.png" ;
import Icon_3 from "../assets/S_gifts/offer3.png" ;
import Icon_4 from "../assets/S_gifts/offer4.png" ;


import gifts_1 from "../assets/S_gifts/gifts1.png" ;
import gifts_2 from "../assets/S_gifts/gifts2.png" ;
import gifts_3 from "../assets/S_gifts/gifts3.png" ;
import Animation from '../components/helpers/Animation'
import { Divider} from '../components/patterns/Pattern1'

import IMG1 from "../assets/bg/b1.jpg"
import IMG2 from "../assets/bg/b2.jpg"
import IMG3 from "../assets/bg/b3.jpg"
import Contact from '../components/Contact'
import MetaTag from './MetaTag'
import Hero from '../components/helpers/Hero'
import Qutation from '../components/helpers/Qutation'
import Impact from '../components/helpers/Impact'
import React , { Suspense, memo } from "react"
import LoadingMemo from "../components/SLIDER_MRM/LoadingMemo"
const SliderGIFTS = React.lazy(() => import("../components/SLIDER_MRM/SliderGIFTS"));


const Approach = [
  { img:gifts_1 , title:"Corporate Gifts" , desc:"Where Thoughtful Gestures Meet Elegance The right gift can make a big impact in corporate relationships. Our Corporate Gifts collection offers timeless and sophisticated items that show genuine appreciation. "},
  { img:gifts_2 , title:"Customized Gift Items"   , desc:"Adding a touch of personalization to a gift brings a sense of sincerity and thoughtfulness. With our Customized Gift Items service, you can add your unique touch to every present. We collaborate closely with you to design gifts that embody your brand identity and leave a memorable impression on the recipient."},
  { img:gifts_3 , title:"Trophies"             , desc:"Acknowledge achievements with grace and distinction. Our Trophies are crafted to symbolize not just accomplishment but the dedication and hard work behind every milestone.  Whether you're recognizing outstanding employees or commemorating corporate milestones, our trophies are a testament to excellence."},
  ]

const BRANDING_SERVICES = [
  { img:Icon_1 , title:"Full Customization",                     desc:"Unique, on-brand gifts that stand out. Our complimentary in-house design services will help bring your vision to life."},
  { img:Icon_2 , title:"We consider every budget", desc:"We understand that every client has different needs. We offer multiple gifting options to fit any budget and deadline."},
  { img:Icon_3 , title:"Satisfaction Guaranteed"               , desc:"You're our top priority! We guarantee a smooth and enjoyable experience, no matter the size of your order. If you're not happy, we'll make it right!"},
  { img:Icon_4 , title:"Quality Craftsmanship"                , desc:"Our gifts and trophies are created with great care, using only top-quality materials and paying close attention to every detail. We take pride in meeting the highest standards to ensure that each piece is of the utmost quality."},
  ]

const S_Gifts = memo(() => {
  const schema = {
    "@context": "http://schema.org",
    "@type": "gifts",
    "url": "https://mrmadvertisingdubai.com/gifts-agency-in-dubai",
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
    <div className="S_Gifts landing">
      <MetaTag canonical="gifts-agency-in-dubai" schema={schema} title=" Best Corporate Gifts Designing Services in Dubai " desc="Looking for impressive corporate gifts, gift items, and trophies? Our curated selection is customized for any occasion and denotes exceptional quality." />
      <Animation />

      <Hero H1="Transform Professional Relationships with Timeless Elegance" H2="Unleash the potential of your business connections with our expertly curated collection of corporate gifts" H3="At MRM, we understand the impact of meaningful gestures in the corporate world. Our passion lies in transforming ordinary moments into extraordinary memories through our premium services: Corporate Gifts, Customized Items, and Trophies." Img={ImgSection} nameServices="gifts services" Imgintro={ImgIntro} />
      <Qutation Img={IMG1} title1="Strengthen Your Professional Ties  with Our Meticulously Curated Collection of Corporate Gifts"  desc1="Explore our meticulously curated collection of corporate gifts, tailor-made for every occasion, and elevate your business relationships to new heights.  Our handpicked selection of gifts is designed to leave a lasting impression on your clients, employees, and partners, and convey your appreciation for their business. With a focus on quality, elegance, and functionality, our gifts are sure to impress and strengthen your professional ties" />
        
      <Divider classn="divider-left" />
      <div className="boxs-tails">
          <div className="bgCover"  >  <img  src={IMG2} alt="gifts services" loading="lazy" /> </div>
          <div className="h1" data-aos="fade-up" >We offer</div> 
            <div className="container" data-aos="fade-up">
                  {Approach.map((e,index)=>(
                    <div className='box' key={index} data-aos="fade-up" >
                      <div className="coverImg hidden-img" > <img src={e.img} alt="gifts services" loading="lazy" /> </div>
                      <h3 className="h2 clip hidden-text" >{e.title}</h3>
                      <h2 className=" p hidden-text" >{e.desc}</h2>
                    </div>
                  ))}
            </div>
      </div>

      <Divider classn="divider" />
      <Suspense fallback={<LoadingMemo />}>   <SliderGIFTS />  </Suspense>

      <Divider classn="divider-left" />
      <Impact classn="impact" Img={IMG3}  data={BRANDING_SERVICES}  title="Why Choose Us for Your Corporate Gifting Needs?"  nameServices="gifts services"  />

      <Contact />
      <Footer />
      </div>
  )
})

export default S_Gifts






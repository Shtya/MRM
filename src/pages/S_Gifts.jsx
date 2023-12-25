import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ImgIntro from "../assets/bg/b9.jpg"
import ImgSection from "../assets/Intro&Cover/cover-gifts.jpg"
import SliderGIFTS from "../components/SLIDER_MRM/SliderGIFTS"

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

const S_Gifts = () => {

  return (
    <div className="S_Gifts landing">
      <div className="container"> <Navbar /> </div>
      <MetaTag title=" Best Corporate Gifts Designing Services in Dubai " desc="Looking for impressive corporate gifts, gift items, and trophies? Our curated selection is customized for any occasion and denotes exceptional quality." />
      <Animation />
      <div className="coverIntro " data-aos="zoom-in-left"  > <img src={ImgIntro} alt="gifts services" loading="lazy" /></div>

      <div className="home">
          <div className="container">
              <div className="boxImg hidden-img" data-aos="zoom-in-left" data-aos-delay="400"   >  <img src={ImgSection} alt="gifts services" loading="lazy" /> </div>
              <div className="boxs"data-aos="zoom-in-left" data-aos-delay="600"  >
                  <h2 className='h1 hidden-text'> Transform Professional Relationships with Timeless Elegance</h2>
                  <h2 className='h2 hidden-text'> Unleash the potential of your business connections with our expertly curated collection of corporate gifts</h2>
                  <p className='p hidden-text'> At MRM, we understand the impact of meaningful gestures in the corporate world. Our passion lies in transforming ordinary moments into extraordinary memories through our premium services: Corporate Gifts, Customized Items, and Trophies. </p>
            </div>

        </div>
      </div>

      <Divider classn="divider-left" />
      <div className="quotation">
        <div className="bgCover"  >  <img  src={IMG1} alt="gifts services" loading="lazy" /> </div>
            <div className="container" >
                <div className="h2" data-aos="zoom-in-up" data-aos-delay="100" >Strengthen Your Professional Ties  with Our Meticulously Curated Collection of Corporate Gifts</div>
                <div className="h3" data-aos="zoom-in-up" data-aos-delay="400" >Explore our meticulously curated collection of corporate gifts, tailor-made for every occasion, and elevate your business relationships to new heights. <br/> Our handpicked selection of gifts is designed to leave a lasting impression on your clients, employees, and partners, and convey your appreciation for their business.<br/> With a focus on quality, elegance, and functionality, our gifts are sure to impress and strengthen your professional ties</div>
            </div>
        </div>
        
        <Divider classn="divider-left" />
        <div className="boxs-tails">
          <div className="bgCover"  >  <img  src={IMG2} alt="gifts services" loading="lazy" /> </div>
          <div className="h1" data-aos="fade-up" >We Offer</div> 
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
      <SliderGIFTS />

      <Divider classn="divider-left" />
      <div className="impact">
        <div className="bgCover"  >  <img  src={IMG3} alt="gifts services" loading="lazy" /> </div>
            <div className="container">
                <div className="h1 clip hidden-text" data-aos="fade-up">Why Choose Us for Your Corporate Gifting Needs?</div>
                <div className="boxs">
                  {
                    BRANDING_SERVICES.map((e,index)=> (
                      <div className="box" key={index} data-aos="fade-up" >
                          <div className="coverImg"> <img src={e.img} alt="gifts services" loading="lazy" /> </div>
                          <div className="text">
                              <div className="h2 clip hidden-text" data-aos="fade-up">{e.title} </div>
                              <div className="p hidden-text" data-aos="fade-up">{e.desc} </div>
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

export default S_Gifts






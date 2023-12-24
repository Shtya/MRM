import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ImgIntro from "../assets/bg/b9.jpg"
import ImgSection from "../assets/signages/cover.jpg"
import SliderOUTDOOR from "../components/SLIDER_MRM/SliderOUTDOOR"
import SliderINDOOR from "../components/SLIDER_MRM/SliderINDOOR"

import Icon_1 from "../assets/S_media/1.png" ;
import Icon_2 from "../assets/S_media/2.png" ;
import Icon_3 from "../assets/S_media/3.png" ;
import Icon_4 from "../assets/S_media/4.png" ;
import Icon_5 from "../assets/S_media/5.png" ;


import Outdoor_1 from "../assets/gallery/outdoor/1.jpg" ;
import Outdoor_2 from "../assets/gallery/outdoor/2.jpg" ;
import Outdoor_3 from "../assets/gallery/outdoor/3.jpg" ;
import Outdoor_4 from "../assets/gallery/outdoor/4.jpg" ;
import Outdoor_5 from "../assets/gallery/outdoor/5.jpg" ;
import Outdoor_6 from "../assets/gallery/outdoor/6.jpg" ;
import Outdoor_7 from "../assets/gallery/outdoor/7.jpg" ;
import Outdoor_8 from "../assets/gallery/outdoor/8.jpg" ;
import Animation from '../components/helpers/Animation'
import{  Pattern9 } from '../components/patterns/Pattern1'
import IMG1 from "../assets/bg/b1.jpg"
import IMG2 from "../assets/bg/b3.jpg"
import IMG3 from "../assets/bg/b2.jpg"
import Contact from '../components/Contact'
import MetaTag from './MetaTag'

const process = [
  {img: Icon_1, title:" Planning" ,desc:"During planning, we consider every detail to create signage that resonates with your brand and clients.Effective planning saves time and resources."},
  {img: Icon_2, title:"Designing" ,desc:"Our designers craft strategies to guide your visitors, and customers within your space. We assess colors, themes, and more for the perfect indoor and outdoor signage."},
  {img: Icon_3, title:"Permits" ,desc:" Our team navigate city codes, ensuring your signage complies with regulations. We handle approvals, so your brand shines in every area."},
  {img: Icon_4, title:"Fabrication" ,desc:"Our state-of-the-art facility uses cutting-edge technology to craft high-quality signage for your project."},
  {img: Icon_5, title:"Installation" ,desc:"Proper installation ensures your signage is set up correctly and safely, allowing your brand to shine."},
]


const M_Signages = () => {
  
  return (
    <div className="M_Signages landing">
      <div className="container"> <Navbar /> </div>
      <MetaTag title=" Top Signage Companies in Dubai for Custom Designs" desc="From LED to indoor and outdoor options, MRM provides professional signage solutions in Dubai. Contact us to start your journey to success." />
      <Animation />
      <div className="coverIntro" data-aos="zoom-in-left"> <img src={ImgIntro} alt="" loading="lazy" /></div>

      <div className="home">
          <div className="container">
              <div className="boxImg" data-aos="zoom-in-left" data-aos-delay="400" >  <img src={ImgSection} alt="" loading="lazy" /> </div>
              <div className="boxs" data-aos="zoom-in-right" data-aos-delay="600">
                  <h2 className='h1  '> Craft Your Vision, Achieve Your Goals </h2>
                  <h2 className='h2  '>MRM's End-to-End Custom Signage Solutions, from Concept to Installation in the UAE</h2>
                  <p className='p '>MRM produces high-quality custom signs in the UAE using premium materials and state-of-the-art equipment to ensure your signage is truly outstanding.</p>

            </div>
        </div>
      </div>
      
      <Pattern9 />
      <div className="quotation">
        <div className="bgCover"  >  <img  src={IMG2} alt="" loading="lazy" /> </div>
            <div className="container">
                <div className="h2 " data-aos="fade-up">MRM promises excellence in signage installation, blending your vision with our expertise</div>
                <div className="h3" data-aos="fade-up" data-aos-delay="200">MRM's team of experts specializes in developing custom sign designs based on clients' requirements.<br/> we take care of every project aspect, from the concept and design phase to production and installation.<br/> MRM is committed to delivering quality service and ensuring customer satisfaction.<br/> Clients can trust MRM to handle everything related to their custom signage installation.</div>
            </div>
        </div>

        <Pattern9 />
        <SliderOUTDOOR />
        <Pattern9 />
        <SliderINDOOR />

      <Pattern9 />
      <div className="process2">
        <div className="bgCover"  >  <img  src={IMG2} alt="" loading="lazy" /> </div>
            <div className="container">
                <div className="h1  clip" data-aos="fade-up">Signage creation process</div>
                <div className="phead " data-aos="fade-up"> Our custom signages captures attention and gives every project  an elegant and professional finish</div>
                <div className="timeline">
                  {
                    process.map((e,index)=>(
                      <div className="check-point " data-aos="fade-left" key={index}  >
                        <div className="number " data-aos="fade-left"> 0{index +1} </div>
                        <div className='inner-box'>
                          <span className='hidden-img' ><img src={e.img} alt="" loading="lazy" /></span>
                          <h2 className="h2 clip  " data-aos="fade-left">{e.title}</h2>
                          <p className="p  " data-aos="fade-left"> {e.desc}</p>
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

export default M_Signages






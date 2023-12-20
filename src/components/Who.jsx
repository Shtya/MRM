import React , {useEffect} from 'react'
import About_us from "../assets/about-us/aboutus.png"
import Animation  from './helpers/Animation'
import Pattern1, { Pattern2 } from './patterns/Pattern1'
import IMG1 from "../assets/bg/b1.jpg"
import IMG2 from "../assets/bg/bg3.jpg"
import IMG3 from "../assets/bg/bg5.jpg"
const Who = () => {
  
  
  return(
    <section className="Who search-edite " id='who' >
      <Animation />
      <div className="bgCover"  >  <img  src={IMG1} alt="" /> </div>
      <div className="container">

      <div className="Img hidden-img "  >
        <img data-aos="fade-right" src={About_us} alt="" />
      </div>

      <div className="box" data-aos="fade-left"  >
        <h2 className='h2 ' data-aos="fade-left" data-aos-delay="100">Your Partner for Advertising & Digital Marketing Success in Dubai</h2>
        <span className='p ' data-aos="fade-left" data-aos-delay="200" >We are a Dubai-based agency specialized in advertising, and digital marketing with years of experience. Our team delivers the highest level of service, combining creativity and strategic thinking for effective campaigns. Our values are dedication, excellence, and transparency. </span>
        <div className="info">
            <div className="box-child"  >
              <h3 className='h2 clip ' data-aos="fade-left" data-aos-delay="300"><i className="fa-solid fa-check"></i>Our mission</h3>
              <span className='p ' data-aos="fade-left" data-aos-delay="400">Our goal is to enable businesses and brands to succeed in marketing and digital solutions, using our expertise in advertising, branding, and innovative strategies to deliver outstanding results.</span>
            </div>
            <div className="box-child"  >
              <h3 className='h2 clip ' data-aos="fade-left" data-aos-delay="500"><i className="fa-solid fa-check"></i>Our vision</h3>
              <span className='p ' data-aos="fade-left" data-aos-delay="600">We aim to be a leading figure in the industry, dedicated to elevating work to the highest standards. Our goal is to inspire creativity and achieve remarkable results through innovative ideas.</span>
            </div>
        </div>

        <button className='bt ' data-aos="fade-left" data-aos-delay="700">Find out more </button>



      </div>

      </div>
    </section>
  )
}

export default Who
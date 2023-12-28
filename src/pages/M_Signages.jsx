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



import React , { Suspense } from "react"
import LoadingMemo from "../components/SLIDER_MRM/LoadingMemo"
const SliderOUTDOOR = React.lazy(() => import( "../components/SLIDER_MRM/SliderOUTDOOR"));
const SliderINDOOR  = React.lazy(() => import("../components/SLIDER_MRM/SliderINDOOR"));


const process = [
  {img: Icon_1, title:" Planning" ,desc:"During planning, we consider every detail to create signage that resonates with your brand and clients.Effective planning saves time and resources."},
  {img: Icon_2, title:"Designing" ,desc:"Our designers craft strategies to guide your visitors, and customers within your space. We assess colors, themes, and more for the perfect indoor and outdoor signage."},
  {img: Icon_3, title:"Permits" ,desc:" Our team navigate city codes, ensuring your signage complies with regulations. We handle approvals, so your brand shines in every area."},
  {img: Icon_4, title:"Fabrication" ,desc:"Our state-of-the-art facility uses cutting-edge technology to craft high-quality signage for your project."},
  {img: Icon_5, title:"Installation" ,desc:"Proper installation ensures your signage is set up correctly and safely, allowing your brand to shine."},
]


const M_Signages = () => {
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
      <MetaTag canonical="indoor-and-outdoor-signages" schema={schema} title=" Top Signage Companies in Dubai for Custom Designs" desc="From LED to indoor and outdoor options, MRM provides professional signage solutions in Dubai. Contact us to start your journey to success." />
      <Animation />
      <Hero H1="Craft Your Vision, Achieve Your Goals " H2="MRM's End-to-End Custom Signage Solutions, from Concept to Installation in the UAE" H3="MRM produces high-quality custom signs in the UAE using premium materials and state-of-the-art equipment to ensure your signage is truly outstanding" Img={ImgSection} nameServices="signages services" Imgintro={ImgIntro} />
      <Qutation Img={IMG1} title1="MRM promises excellence in signage installation, blending your vision with our expertise"  desc1="MRM's team of experts specializes in developing custom sign designs based on clients' requirements. we take care of every project aspect, from the concept and design phase to production and installation. MRM is committed to delivering quality service and ensuring customer satisfaction. Clients can trust MRM to handle everything related to their custom signage installation." />

      <Pattern9 />
      <Suspense fallback={<LoadingMemo />}>   <SliderOUTDOOR />  </Suspense>

      <Pattern9 />
      <Suspense fallback={<LoadingMemo />}>   <SliderINDOOR />  </Suspense>

      <Pattern9 />
      <Process Img={IMG2} title="Signage creation process" desc="Our custom signages captures attention and gives every project  an elegant and professional finish" data={process} />



        <Contact />
      <Footer />
      </div>
  )
}

export default M_Signages






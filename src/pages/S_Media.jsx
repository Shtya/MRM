
import ImgIntro from "../assets/bg/b9.jpg"
import ImgSection from "../assets/Intro&Cover/cover-social.jpg"

import   F from "../assets/Icons/facebook.png"
  import X from "../assets/Icons/x.png"
  import I from "../assets/Icons/instagram.png"
  import L from "../assets/Icons/linkedin.png"
  import S from "../assets/Icons/snapchat.png"
  import T from "../assets/Icons/tiktok.png"
  import G from "../assets/Icons/google.png"


import Icon_1 from "../assets/S_media/1.png" ;
import Icon_2 from "../assets/S_media/2.png" ;
import Icon_3 from "../assets/S_media/3.png" ;
import Icon_4 from "../assets/S_media/4.png" ;
import Icon_5 from "../assets/S_media/5.png" ;
import Icon_6 from "../assets/S_media/6.png" ;
import Icon_7 from "../assets/S_media/7.png" ;
import Icon_8 from "../assets/S_media/8.png" ;

import ImpactImg1 from "../assets/S_media/impact1.png" ;
import ImpactImg2 from "../assets/S_media/impact2.png" ;
import ImpactImg3 from "../assets/S_media/impact3.png" ;
import ImpactImg4 from "../assets/S_media/impact4.png" ;

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Animation from '../components/helpers/Animation'
import  { Divider } from '../components/patterns/Pattern1'
import IMG1 from "../assets/bg/b1.jpg"
import IMG2 from "../assets/bg/b2.jpg"
import IMG3 from "../assets/bg/b3.jpg"
import Contact from '../components/Contact'
import MetaTag from './MetaTag'
import Qutation from "../components/helpers/Qutation"
import Social_media from "../components/helpers/Social_media"
import ImpactComponent from "../components/helpers/Impact"
import Process from "../components/helpers/Process"


const li = [ "Google Ads Campaigns","Facebook Advertising","Instagram Advertising","LinkedIn Advertising","Snapchat Advertising","Twitter Advertising", "Tiktok Advertising"]
const Paid = [ 
  {classn: "hidden hidden-left"  ,img: X , path:"/x" ,title:"X (Twitter) Advertising" , desc:"Boost your brand on Twitter with our expert campaigns. Tailored to your needs, we'll help you engage, generate leads and drive sales."},
  {classn: "hidden hidden-left"  ,img: F , path:"/facebook" ,title:"Facebook Advertising" , desc:"Connect with your target audience on one of their most frequented platforms. Our in-depth expertise leverages Facebook's detailed targeting capabilities to engage the most receptive consumers."},
  {classn: "hidden hidden-left"  ,img: I , path:"/instagram" ,title:"Instagram Advertising" , desc:"Showcase your brand with visually captivating Instagram ads. Stay top-of-mind with powerful advertising features that drive brand recognition and engagement."},
  {classn: "hidden hidden-left"  ,img: L , path:"/linkedin" ,title:"LinkedIn Advertising" , desc:"Contact business owners and potential clients through LinkedIn's specialized advertising platform. Our strategies ensure you connect with the right audience for your business goals."},
  {classn: "hidden hidden-left"  ,img: T , path:"/tiktok" ,title:"TikTok Advertising" , desc:"Ignite excitement around your brand with fun and engaging ads on the latest Social Media sensation, TikTok. Harness the creativity of this popular new platform to connect with your target audience."},
  {classn: "hidden hidden-left"  ,img: S , path:"/snapchat" ,title:"Snapchat Advertising" , desc:"Captivate the Snapchat audience with creative and impactful advertising. Share your brand's story and products in a format that resonates with this unique demographic."},
  {classn: "hidden hidden-left"  ,img: G  ,title:"Google Ads Campaigns" , desc:"Effective PPC management requires specialized expertise in advertising strategies, budget planning, and execution. Our experienced team leverages data-driven insights, cutting-edge technology, and creative solutions to create high-performing campaigns that can significantly impact your bottom line."},
]
const Impact = [
  {img:ImpactImg1 , title:"Higher Conversion Rate" , desc:"By utilizing the latest tools and techniques, we guarantee highly effective social media ad campaigns that drive conversions and significantly boost your business's conversion rate."  } ,
  {img:ImpactImg2 , title:"Better Customer Engagement" , desc:"Our team of creative writers and graphic designers excel at crafting engaging content that resonates with your target audience. This content increases engagement and attracts a growing base of social media followers."  } ,
  {img:ImpactImg3 , title:"Cost-Effective Solutions" , desc:"Worried about the cost? Don't be. We offer cost-effective social media management services that deliver exceptional value for your investment. "  } ,
  {img:ImpactImg4 , title:"More Inbound Traffic" , desc:"Besides increasing inbound traffic to your social media profiles and website, our strategies enhance your brand's visibility and impact with consistent visitor flow."  } ,
]
const process = [
  {img: Icon_1, title:"Strategy Development" ,desc:"We dive deep into your business, understanding your goals, audience, and competition to create a tailored strategy."},
  {img: Icon_2, title:"Customized Campaign Creation" ,desc:"Our team of skilled advertising specialists creates customized campaigns tailored to your unique needs.3. Precise Targeting:"},
  {img: Icon_3, title:"We prioritize conversions over clicks" ,desc:"Our advanced targeting techniques ensure that your ads reach the right audience at the right time, making the most of your budget."},
  {img: Icon_4, title:"Engaging Ad Creative" ,desc:"Compelling ad copy and eye-catching visuals are essential. Our creative team designs ads that grab attention and convey your message effectively."},
  {img: Icon_5, title:"Continuous Optimization" ,desc:"The digital landscape is ever-changing. We continually monitor and optimize your campaigns to ensure they perform at their best. "},
  {img: Icon_6, title:"Detailed Reporting" ,desc:"Transparency is at the core of our service. You'll receive detailed reports that provide insights into campaign performance. We believe in keeping you informed every step of the way."},
  {img: Icon_7, title:"A/B Testing" ,desc:"We always strive for good when we can make it great. A/B testing allows us to refine ad elements, ensuring your campaigns are continually improving."},
  {img: Icon_8, title:"Ongoing Support" ,desc:"Our commitment to your success continues after the campaign is launched. We provide ongoing support and insights to ensure your advertising efforts remain effective and aligned with your goals."},
]

const S_Media = () => {
  const schema = {
    "@context": "http://schema.org",
    "@type": "media-buying",
    "url": "https://mrmadvertisingdubai.com/media-buying-agency-in-dubai",
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
  <div className="S_media landing">
    <MetaTag canonical="media-buying" schema={schema} title=" Boost Your Brand with Top Advertising Companies in Dubai" desc="Transform your social platforms, run effective Google Ads campaigns, and achieve measurable growth with MRM's advertising experts in Dubai." />
    <Animation />
      <div className="container"> <Navbar /> </div>
      <div className="coverIntro " data-aos="zoom-in-left" > <img src={ImgIntro} alt="media buying services" loading="lazy" /></div>

      <div className="home">
        <div className="container">
            <div className="boxImg hidden-img " data-aos="zoom-in-left" data-aos-delay="400"  >  <img src={ImgSection} alt="media buying services" loading="lazy" /> </div>
            <div className="boxs" >
                <h2 className='h1 ' data-aos="zoom-in-right" data-aos-delay="600" > Boost your brand's presence and supercharge your online growth with MRM's paid advertising expertise</h2>
                <h2 className='h2 ' data-aos="zoom-in-right" data-aos-delay="600" >Transform your social platforms into full revenue drivers and maximize your return on investment </h2>
                <div className="inner-boxs"  data-aos="zoom-in-left" data-aos-delay="600">
              <ul className="box" >
                <li className='li ' > {li[0]} </li>
                <li className='li ' > {li[1]} </li>
                <li className='li ' > {li[2]} </li>
                <li className='li ' > {li[3]} </li>
              </ul>

              <ul className="box box-2">
                <li className='li ' > {li[4]} </li>
                <li className='li ' > {li[5]} </li>
                <li className='li ' > {li[6]} </li>
              </ul>
            </div>
          </div>
      </div>
      </div>
      
      <Qutation Img={IMG1} title1="Experience the Power of Paid Amplification" desc1="We create paid campaigns with specific goals, such as boosting brand awareness, engaging with audiences, generating leads, and driving sales. We understand that success varies for each business, so we tailor our campaigns to align with your unique Key Performance Indicators.  Our in-depth expertise leverages Facebook's detailed targeting capabilities to engage the most receptive consumers. Connect with your target audience on one of their most frequented platforms."  />
      
      <Divider classn="divider-left" />
      <Social_media Img ={IMG2} title ="We offer standout paid campaigns for your business" desc ="" data={Paid} />

      <Divider classn="divider" />
      <ImpactComponent classn="impact" Img={IMG3}   title="Impact of what you'll get" data={Impact} desc="MRM is the preferred choice for social media marketing services in Dubai.  We specialize in tailoring effective strategies that fit your brand and objectives. Here's how we can help" nameServices="media buying services"  />
        
      <Divider classn="divider-left" />
      <Process Img={IMG2} title="Our Process" desc="" data={process}/>
      
      <Contact />
      <Footer />
    </div>
  )
}

export default S_Media
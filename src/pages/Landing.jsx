import Navbar from '../components/Navbar'
import ImgIntro from "../assets/bg/b9.jpg"

import Community from "../assets/Intro&Cover/cover-socialMedia.jpg" ;

import Social_1   from "../assets/Icon/Impact_ (8).png"
  import Social_2 from "../assets/Icon/Impact (2).png"
  import Social_3 from "../assets/Icon/Impact_ (9).png"
  import Social_4 from "../assets/Icon/Impact_ (10).png"
  import Social_5 from "../assets/Icon/Impact_ (1).png"
  import Social_6 from "../assets/Icon/Impact_ (2).png"

import Icon_1 from   "../assets/Icons/icon (1).png"
  import Icon_2 from "../assets/Icons/icon (2).png"
  import Icon_3 from "../assets/Icons/icon (3).png"
  import Icon_4 from "../assets/Icons/icon (4).png"
  import Icon_5 from "../assets/Icons/icon (5).png"
  import Icon_6 from "../assets/Icons/icon (6).png"
  import OnePlatform from '../components/OnePlatform';

import Grid1 from "../assets/landing/Grid1.jpg" ;
  import Grid2 from "../assets/landing/Grid2.jpg" ;
  import Grid3 from "../assets/landing/Grid3.jpg" ;
  import Grid4 from "../assets/landing/Grid4.jpg" ;

import Process1 from "../assets/landing/process1.png" ;
  import Process2 from "../assets/landing/process2.png" ;
  import Process3 from "../assets/landing/process3.png" ;
  import Process4 from "../assets/landing/process4.png" ;
  import Process5 from "../assets/landing/process5.png" ;

import OneProcess from '../components/OneProcess';
import Footer from '../components/Footer';
import Animation from '../components/helpers/Animation';
import { Divider} from '../components/patterns/Pattern1';

import IMG1 from "../assets/bg/b1.jpg"
import IMG2 from "../assets/bg/b2.jpg"
import Contact from '../components/Contact';
import MetaTag from './MetaTag';
import Social_media from '../components/helpers/Social_media';

const SocialMedia = [
  {classn :"hidden hidden-left" , img:Social_1 , title:"Social Media Strategy"    , desc:"Our social media experts will create a custom strategy that aligns with your brand's objectives and target audience."},
  {classn :"hidden hidden-left" , img:Social_2 , title:"Content Creation "        , desc:"Producing captivating, high-quality content that reflects your brand's identity and appeals to your target audience is the cornerstone of successful social media marketing, and our skilled content creators specialize in just that."},
  {classn :"hidden hidden-left" , img:Social_3 , title:"Platform Optimization"    , desc:"Our platform optimization services aim to maximize your social media profiles' effectiveness and appeal. We optimize your profile descriptions, images, and keywords for organic growth and visibility."},
  {classn :"hidden hidden-left" , img:Social_4 , title:"Social Media Advertising" , desc:"Paid advertising can effectively increase brand reach and conversions. Our team creates targeted social media ad campaigns using platform-specific ad formats and advanced targeting options."},
  {classn :"hidden hidden-left" , img:Social_5 , title:"Community Management"     , desc:"A robust online community is crucial for brand loyalty and success. We build and maintain relationships with your audience by engaging regularly, responding promptly to inquiries, and monitoring your brand's reputation."},
  {classn :"hidden hidden-left" , img:Social_6 , title:"Analytics and Reporting"  , desc:"Data empowers informed decision-making. Our analytics and reports provide detailed insights into social media performance, including engagement, reach, conversions, and growth."},
]

const Process = [
  {img:Process1 , classn:"h" , title :"Optimized For Results"  , desc : "We work closely with our clients to understand their business goals, target audience, industry, and competitors. With this knowledge, we create a tailored social media plan that meets their unique needs. We aim to deliver a strategy customized to each client's specific requirements." },
  {img:Process2 , classn:"h" , title :"Planning"  , desc : "During the planning phase, we create a detailed strategy outlining tactics for achieving the client's goals such as content creation, advertising, and social media management." },
  {img:Process3 , classn:"h" , title :"Implementation"  , desc : "We begin executing the plan. Our team of social media experts creates and publishes high-quality content, manages social media accounts, and runs advertising campaigns. We constantly monitor and analyze our campaigns to ensure we achieve our clients' goals." },
  {img:Process4 , classn:"h" , title :"Optimization"  , desc : "As we collect data on our campaigns, we use it to optimize our strategy and tactics, making data-driven decisions that improve engagement, drive traffic, and generate leads and sales." },
  {img:Process5 , classn:"h" , title :"Reporting"  , desc : "We regularly provide clients with detailed reports on the progress of their social media campaigns. These reports include key metrics like engagement, reach, traffic, and leads. They help clients understand the value of our services and make data-driven decisions for future campaigns." },
]
const Landing = () => {
  const schema = {
    "@context": "http://schema.org",
    "@type": "social-media-marketing",
    "url": "https://mrmadvertisingdubai.com/social-media-marketing-agency-in-dubai",
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
    <div className='landing'>
      <Animation />
      <MetaTag canonical="social-media-marketing-agency-in-dubai" schema={schema} title="Social Media Marketing Services in Dubai to Boost Your Brand" desc="Partner with MRM, one of the leading social media marketing agencies in Dubai, to ensure a excellent digital journey for your brand." />
      <div className="container"> <Navbar /> </div>
      <div className="coverIntro" data-aos="zoom-in-left"> <img  src={ImgIntro} alt="social media marketing services" loading="lazy" /></div>
      
      <div className="home">
        <div className="container">
          <div className="boxImg n-border" data-aos="zoom-in-left" data-aos-delay="400"  >  <img className='' src={Community} alt="Social media icons floating over a phon" loading="lazy" /> </div>
          <div className="boxs " data-aos="zoom-in-right" data-aos-delay="400"  >
            <h1 className='h1 '>Improve the Impact of your Social Media Presence with the Best Digital Marketing Agency In Dubai </h1>
            <h2 className='h2 '>Boost Your Brand Online with the Top Social Media Marketing Services in Dubai </h2>
            <div className="inner-boxs"  >

              <ul className="box">
                <li className='li '>Social media advertising</li>
                <li className='li '>Social media Marketing</li>
                <li className='li '>Community management</li>
                <li className='li '>Content creation</li>
              </ul>

              <ul className="box box-2">
                <li className='li '>Social media development</li>
                <li className='li '>Reputation management</li>
                <li className='li '>Influencer marketing</li>
                <li className='li '>Crisis management</li>
              </ul>

            </div>
          </div>
        </div>
      </div>

      <Divider classn="divider" />
      <div className="searching search-edite">
        <div className="bgCover"  >  <img  src={IMG1} alt="social media marketing services" loading="lazy" /> </div>
          <div className="container">
              <div className="coverImg  "> 
                  <img data-aos="zoom-in-right"  src={Grid1} alt="Golden Instagram and video icons" loading="lazy" /> 
                  <img data-aos="zoom-in-top"      src={Grid2} alt="Golden TikTok, LinkedIn, and Facebook icons" loading="lazy" /> 
                  <img data-aos="zoom-in-right"  src={Grid3} alt="Golden Twitter icon on magnifier over black" loading="lazy" /> 
                  <img data-aos="zoom-in-top"      src={Grid4} alt="Golden Telegram icon" loading="lazy" /> 
              </div>

              <div className="boxs ">
                  <h2 className='h2 ' data-aos="fade-left">Are you searching for top-notch social media management services in Dubai?</h2>
                  <div className="box">
                      <h3 className='h3 ' data-aos="fade-left"> We've got you covered</h3>
                      <div className='p ' data-aos="fade-left"> We take pride in delivering exceptional results that help increase sales while minimizing costs. We collaborate with you to develop a tailored strategy that aligns with your business goals. Our team can help you achieve your digital marketing goals, whether you need to drive traffic, increase brand awareness, or boost sales. </div>
                  </div>

                  <div className="box">
                      <h3 className='h3 ' data-aos="fade-left">We're A Full-Service Digital Marketing Agency In Dubai </h3>
                      <div className='p ' data-aos="fade-left"> MRM is an innovative social media management agency that helps brands fully leverage their online presence. We have a dynamic team of strategists, content creators, and social media experts who collaborate to develop innovative, data-driven solutions tailored to your specific goals and objectives. Partnering with MRM unlocks the power of expert social media management to elevate your brand's digital presence.</div>
                  </div>

              </div>
          </div>
      </div>


      <Divider classn="divider-left" />
      <Social_media Img={IMG2} data={SocialMedia} title="Our Social Media Marketing Services" />

      <Divider classn="divider" />
      <div className="platforms">
        <div className="bgCover"  >  <img  src={IMG2} alt="social media marketing services" loading="lazy" /> </div>
          <div className="container">
              <h2 className='h1 'data-aos="fade-up">Social Media Platforms that we have Managed</h2>
              <div className="boxs" data-aos="fade-up">
                  <OnePlatform trueBtn={true} path="/facebook"  img={Icon_1} title="Facbook Marketing "   paragraph="we can increase your brand interaction on Facebook and Instagram with deep engagement methods and rich content, including video marketing. Our specialists help you achieve your marketing goals by leveraging your Facebook presence to raise brand awareness, reach new customers, generate leads, boost website traffic, or gather market and competitor information." />
                  <OnePlatform trueBtn={true} path="/snapchat"  img={Icon_4} title="Snapchat Marketing "  paragraph="We specialize in creating effective Snapchat Ads to boost your brand's visibility, drive traffic, and increase sales. Our region-specific marketing tactics leverage features like Snap Ads, Geofilters, and Sponsored Lens to optimize your presence on this fast-growing platform. We can help you incorporate Snapchat into your marketing strategy for short-term, impactful campaigns." />
                  <OnePlatform trueBtn={true} path="/instagram" img={Icon_2} title="Instagram Marketing " paragraph="We bring your brand to life on Instagram through innovative visual marketing. Our marketing services are customized to help businesses reach their goals and generate leads, increase engagement, and drive sales. Our specialists conduct research before creating regular content to ensure effective campaigns." />
                  <OnePlatform trueBtn={true} path="/x"         img={Icon_5} title="X Marketing "         paragraph="We can help you enhance your Twitter presence by connecting you with millions of users and creating viral videos. Our X management services provide prompt responses and strategic messaging, resulting in positive word-of-mouth that enhances your business's profits." />
                  <OnePlatform trueBtn={true} path="/linkedin"  img={Icon_3} title="LinkedIn Marketing "  paragraph="LinkedIn is essential for B2B companies. Partner with our team of specialists to manage your company's LinkedIn page, connect with decision-makers, and increase your online rankings. Prism is a leading LinkedIn marketing agency that provides outstanding content and advertising services to help your company stand out." />
                  <OnePlatform trueBtn={true} path="/tiktok"    img={Icon_6} title="TikTok Marketing "    paragraph="We can help you develop campaigns that maximize your advertising budget's ROI and capture your target audience's attention with creative videos." />
              </div>
          </div>
      </div>

      <Divider classn="divider-left" />
    <div className="process">
        <div className="container1"> <h2 className="h1" data-aos="fade-up">Our Social Media Marketing Process </h2></div>
        <div className="container">
            <div className="box box1">
                <OneProcess num="1"  img={Process[0].img} title={Process[0].title} paragraph={Process[0].desc}/>
                <OneProcess num="2"  img={Process[1].img} title={Process[1].title} paragraph={Process[1].desc}/>
                <OneProcess num="3"  img={Process[2].img} title={Process[2].title} paragraph={Process[2].desc}/>
            </div>
            <div className="box box2">
                <OneProcess num="4"  img={Process[3].img} title={Process[3].title} paragraph={Process[3].desc}/>
                <OneProcess num="5"  img={Process[4].img} title={Process[4].title} paragraph={Process[4].desc}/>
            </div>
        </div>
    </div>

      <Contact number={5} />
      <Footer />
    </div>
  )
}

export default Landing
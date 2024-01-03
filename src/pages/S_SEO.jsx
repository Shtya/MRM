import ImgIntro from "../assets/bg/b9.jpg"
import ImgSection from "../assets/Intro&Cover/cover-seo.jpg" ;

import Analysis_1 from "../assets/SEO/Analysis-1.png"
import Analysis_2 from "../assets/SEO/Analysis-2.png"
import Analysis_3 from "../assets/SEO/Analysis-3.png"
import Analysis_4 from "../assets/SEO/Analysis-4.png"
import Analysis_5 from "../assets/SEO/Analysis-5.png"
import Analysis_6 from "../assets/SEO/Analysis-6.png"
import Analysis_7 from "../assets/SEO/Analysis-7.png"
import Analysis_8 from "../assets/SEO/Analysis-8.png"
import Analysis_9 from "../assets/SEO/Analysis-9.png"


import Icon_1 from "../assets/SEO/SEO-1.png"
import Icon_2 from "../assets/SEO/SEO-2.png"
import Icon_3 from "../assets/SEO/SEO-3.png"
import Icon_4 from "../assets/SEO/SEO-4.png"
import Icon_5 from "../assets/SEO/SEO-5.png"
import Icon_6 from "../assets/SEO/SEO-6.png"
import OneWhy from '../components/OneWhy';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

import seo_process_1 from "../assets/SEO/seo-process-1.jpg"
import seo_process_2 from "../assets/SEO/seo-process-2.jpg"
import seo_process_3 from "../assets/SEO/seo-process-3.jpg"
import seo_process_4 from "../assets/SEO/seo-process-4.jpg"
import seo_process_5 from "../assets/SEO/seo-process-5.jpg"
import Animation from '../components/helpers/Animation';
import { Divider} from '../components/patterns/Pattern1';

import IMG1 from "../assets/bg/b1.jpg"
import IMG2 from "../assets/bg/b2.jpg"
import IMG3 from "../assets/bg/b3.jpg"
import MetaTag from './MetaTag';
import Hero from '../components/helpers/Hero';
import Qutation from '../components/helpers/Qutation';
import Plateforms from '../components/helpers/Plateforms';
import Process2 from '../components/helpers/Process2';
import { Animate } from "../App";

const OUR_SEO = [
  {classn :" "            , img:Icon_1 , title:"Keyword Research"   , desc:"Our team conducts in-depth research to determine the most effective and high-traffic keywords to target for your website. By strategically selecting these keywords, we can boost your website's visibility and attract more visitors."},
  {classn :" " ,           img:Icon_2 , title:" On-Page SEO  "     , desc:"We use on-page SEO to optimize your website for search engines and users. Our approach prioritizes user-friendly language and concise sentences to ensure clarity and flow. We avoid technical jargon and use everyday language in active voice to enhance clarity. "},
  {classn :" different"  , img:Icon_3 , title:" Off-Page SEO"      , desc:"Our Off-Page SEO service builds high-quality backlinks to increase your website's credibility. We use simple language, short sentences, and the active voice. We haven't changed the meaning or removed any important information."},
  {classn :" "           , img:Icon_4 , title:" Content Marketing" , desc:"We create engaging content that meets our audience's unique needs. Our writing is direct, concise, and uses simple words, active voice, and a logical order."},
  {classn :" "           , img:Icon_5 , title:" Local SEO"         , desc:"For businesses with a local presence, we optimize your website for local search, ensuring you're found by potential customers in your area.  "},
  {classn :" "           , img:Icon_6 , title:" Technical SEO"     , desc:"Our Technical SEO Optimization service is designed to enhance your website's performance and search engine visibility. We understand the importance of technical SEO in achieving higher rankings and improving user experience."},
]

const PROCESS = [ 
  {img:Analysis_1 , classn:" " , title:"Website Analysis"         , desc:"We start with a comprehensive analysis of your website's current performance, including an audit of on-page and technical elements, keyword ranking, and competitor benchmarking. " },
  {img:Analysis_2 , classn:" " , title:"Keyword Research"        , desc:"Our SEO specialists conduct thorough keyword research to identify relevant and valuable terms. This ensures alignment with your goals and audience search intent." },
  {img:Analysis_3 , classn:" " , title:"On-Page Optimization"     , desc:"Our team optimizes on-page elements, including meta tags, content, headings, and images, to enhance user experience and engagement." },
  {img:Analysis_4 , classn:" " , title:"Technical SEO"            , desc:"We ensure your website's technical aspects are in perfect order, including improving site speed and mobile-friendliness, fixing crawl errors, and enhancing security, creating a solid technical foundation." },
  {img:Analysis_5 , classn:" " , title:"Content Strategy"         , desc:"Content is king, and our content strategists work closely with our SEO experts to create high-quality, SEO-friendly content. We develop informative blog posts, landing pages, and other valuable resources that not only rank well but also resonate with your audience." },
  {img:Analysis_6 , classn:"" , title:"Link Building"            , desc:"Building high-quality backlinks is a vital part of SEO. We secure authoritative, relevant links that strengthen your website's authority and trustworthiness in the eyes of search engines." },
  {img:Analysis_7 , classn:"" , title:"Monitoring and Reporting" , desc:"We continuously monitor your SEO campaign's performance. Regular reporting keeps you informed about your progress and the impact of our strategies. " },
  {img:Analysis_8 , classn:"" , title:"Ongoing Optimization"     , desc:"SEO is an ongoing process. As search engines evolve, so do our strategies. We adapt to the latest trends and algorithms, ensuring your website remains at the forefront of search engine results." },
  {img:Analysis_9 , classn:"" , title:"Results and Growth"       , desc:"With our data-driven approach, you'll see your website's organic traffic and rankings improve over time. Your online presence will continue to grow, driving more leads and conversions for your business " },
]
const WHY_MRM = [
  {img:seo_process_1 , altCover:"Executive with holographic projection of business icons  " , classn:"", title:"Profound Expertise "        , desc:"Our SEO team has extensive experience and knowledge in the field, allowing them to navigate SEO intricacies and deliver outstanding results."},
  {img:seo_process_2 , altCover:"Business hand presents light bulb with strategy icons  " , classn:"", title:"Transparent Communication " , desc:"We maintain clear and transparent communication throughout our partnership. You will be kept updated on our strategies, progress, and their impact on your business, ensuring you are with us every step of the way.."},
  {img:seo_process_3 , altCover:"Hands framing a digital globe with network lines  " , classn:"", title:"Creative Problem Solvers"   , desc:"SEO is not just a technical endeavor; it requires creative problem-solving. Our team approaches each project with innovation and a determination to overcome challenges, ensuring your SEO strategy is effective and adaptable."},
  {img:seo_process_4 , altCover:"Man interacts with digital solution  " , classn:"", title:"Data-Driven Strategies "    , desc:"We rely on data-driven insights to formulate SEO strategies, allowing us to pinpoint opportunities, measure performance, and continuously refine our approach for optimal outcomes."},
  {img:seo_process_5 , altCover:"Finger pointing at growth graph on screen  " , classn:"", title:"Customized Solutions "      , desc:"We understand that each business is unique, and our SEO strategies are tailored to your specific needs, business goals, target audience, and industry. This customized approach ensures that we deliver results that align with your unique requirements."},
]
const S_SEO = () => {

  const schema = {
    "@context": "http://schema.org",
    "@type": "seo",
    "url": "https://mrmadvertisingdubai.com/seo-agency-in-dubai",
    "publisher": {
      "@type": "Organization",
      "name": "MRM Advertising",
      "logo": {
        "@type": "ImageObject",
        "url": "https://mrmadvertisingdubai.com/Logo1.png"
      }
    }
  }

  return (
    <div className='M_SEO landing'>
      <MetaTag canonical="seo-agency-in-dubai" schema={schema} title="Leading SEO Agency in Dubai | Higher Website Rankings Insured" desc="Improve your Website's Visibility, Ranking on Search Engines and Beat Your competitors with MRM One of the Best SEO Agencies in Dubai ,UAE" />
      <Animation />
      <Hero  
        H1="Unleash the full potential of your website with the best SEO services in Dubai " 
        H2="Improve your Website's Visibility and Ranking on Search Engines with One of the Best SEO Agencies in Dubai" 
        H3="Having a strong online presence is crucial in today's fast-paced digital world. Your website's ability to stand out and capture your audience's attention can make all the difference between success and obscurity. It's not enough to simply exist online - your website must captivate your audience and drive your business forward." Img={ImgSection} nameServices="Desktop monitor, keyboard, mouse" Imgintro={ImgIntro} />
      
      <Qutation Img={IMG1} title1="Maximizing SEO Impact and Achieving Number 1# Ranking among Competitors with MRM SEO Services "  desc1="We don't just make empty promises about our commitment to SEO in Dubai, UAE. We take concrete actions to prove it. Our primary objective is to help businesses thrive in the digital world. To achieve this, we provide tailor-made local SEO services that cater to their specific requirements.Our unwavering promise to secure a top ranking on Google's first page makes us different, ensuring that your business stands out in the highly competitive world of search." />

      <Divider classn="divider-left" />
      <Plateforms Img={IMG2} title="Our SEO Services" data={OUR_SEO} nameServices="search-engine-optomization services" />

      <Divider classn="divider" />
      <Process2 data={PROCESS} Img={IMG3} title="Our SEO Process" />
      
    <Divider classn="divider-left" />
    <div className="WHY">
        <div className="bgCover"  >  <img  src={IMG2} alt="search-engine-optomization services" loading="lazy" /> </div>
      <h2 className="h1" data-aos={Animate}> Why MRM Excels in SEO?  </h2>
      <div className="container" data-aos={Animate}>
        {
          WHY_MRM.map((e,index)=> (
            <OneWhy altCover={e.altCover} key={index} img={e.img} title={e.title} desc={e.desc} classn={`${e.classn} one-why-${index+1}`} />
          ))
        }
      </div>
    </div>

    <Contact number={9} title="Let's Skyrocket Your Rankings and Drive Organic Traffic"  desc="Reach Out to Get a Free SEO Audit" />
    <Footer />
    </div>
  )
}

export default S_SEO
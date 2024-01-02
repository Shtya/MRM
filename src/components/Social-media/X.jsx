import Footer from '../Footer'
import FacebookIntro from "../../assets/Socialmedia/bg-social.jpg"
import FacebookCover from "../../assets/Socialmedia/x.png"

import { Divider } from '../patterns/Pattern1'
import IMG1 from "../../assets/bg/b1.jpg"
import IMG2 from "../../assets/bg/b2.jpg"
import IMG3 from "../../assets/bg/b3.jpg"

import X1 from "../../assets/Socialmedia/X (1).png"
import X2 from "../../assets/Socialmedia/X (2).png"
import X3 from "../../assets/Socialmedia/X (3).png"
import X4 from "../../assets/Socialmedia/X (4).png"
import X5 from "../../assets/Socialmedia/X (5).png"
import X6 from "../../assets/Socialmedia/X (6).png"
import X7 from "../../assets/Socialmedia/X (7).png"
import MetaTag from '../../pages/MetaTag'
import Social_Hero from '../helpers/Social_Hero'
import Box_4 from '../helpers2/Box_4'

import x1 from "../../assets/Icon/x1.avif"
import x2 from "../../assets/Icon/x2.avif"
import x3 from "../../assets/Icon/x3.avif"

import x_2_1 from "../../assets/Icon/x-2-1.png"
import x_2_2 from "../../assets/Icon/x-2-2.png"
import x_2_3 from "../../assets/Icon/x-2-3.png"
import x_2_4 from "../../assets/Icon/x-2-4.png"
import x_2_5 from "../../assets/Icon/x-2-5.png"

import Box5 from '../helpers2/Box-5'
import BoxBorderRight from '../helpers2/BoxBorderRight'
const TYPES = [
  {icon :x1 ,title:"Promoted Tweets" , desc:"Promoted Tweets are designed to reach users who do not follow your account. As your social media management agency, we pay to deliver these tweets to diverse audiences. These Twitter marketing initiatives can expand your business's reach and engage new potential customers. Similar to boosting posts on Facebook, promoted tweets increase visibility and engagement."},
  {icon :x2 ,title:"Promoted Accounts" , desc:"With Promoted Accounts, advertisers pay to have your complete Twitter account displayed to a carefully targeted audience. These ads are shown to individuals interested in your business or services. This is ideal for those seeking to attract specific users based on their business objectives, encouraging them to follow your account and become acquainted with your brand or service."},
  {icon :x3 ,title:"Promoted Trends" , desc:"Hashtags are the key to tracking online trends. Promoted Trends allow you to promote your unique hashtag to the top of the trending list. Create a distinctive hashtag, promote it, and watch it gain momentum as people use it in their tweets. While highly effective, it's important to note that running this form of advertisement can be costly and complex. Entrust it to social media marketing experts to effectively manage your budget, targeting, and content relevance."},
 ]

const SERVICES = [
  {icon:X1 , title:"Strategic Planning" , desc:"We begin by understanding your business, goals, and target audience. Based on this information, we formulate a comprehensive Twitter marketing strategy tailored to your unique objectives."} ,
  {icon:X2 , title:"Audience Targeting" , desc:"Precise audience targeting is crucial for Twitter's marketing success. We use Twitter's advanced targeting options to reach the right demographics, interests, and behaviours, ensuring your message reaches those most likely to engage with your brand."} ,
  {icon:X3 , title:"Content Creation" , desc:"Our creative team develops engaging content that resonates with your audience. From compelling tweets to eye-catching visuals, we craft content that drives engagement and boosts brand visibility."} ,
  {icon:X4 , title:"Ad Campaign Execution" , desc:"We carefully launch and manage your Twitter ad campaigns, whether they involve Promoted Tweets, Promoted Accounts, or Promoted Trends. Our experts monitor campaign performance in real time to optimize budget allocation and maximize results."} ,
  {icon:X5 , title:"Analytics and Reporting" , desc:"We provide regular reports and insights into your campaign's performance. Our analytics help you track key metrics, such as engagement rates, click-through rates, and lead conversions, ensuring transparency and accountability."} ,
  {icon:X6 , title:"Continuous Optimization" , desc:"Twitter marketing is dynamic, and we stay agile. We continuously optimize your campaigns based on data-driven insights to ensure the best possible results and return on investment."} ,
  {icon:X7 , title:"Strategic Guidance" , desc:"Beyond campaigns, we offer strategic guidance on Twitter content, trends, and industry best practices. We aim to empower your brand to thrive on Twitter independently."} ,
]


const SERVICES1 = [
  {icon:x_2_1 , title:"Real-time Engagement" , desc:"Twitter's real-time nature enables businesses to engage with their audience instantly. Timely responses, updates, and interactions strengthen customer relationships, increasing loyalty and trust."},
  {icon:x_2_2 , title:"Audience Insights" , desc:"Twitter provides valuable data on your audience's preferences, opinions, and behaviours. These insights inform marketing strategies, allowing you to tailor content for maximum impact and relevance."},
  {icon:x_2_3 , title:"Brand Visibility" , desc:"Active presence on Twitter ensures your brand remains visible to your target audience. Consistent tweeting, sharing relevant content, and meaningful engagement enhance your brand's recognition and credibility."},
  {icon:x_2_4 , title:"Instant Feedback" , desc:"Twitter facilitates instant feedback from your audience. Users often express their opinions openly, whether it's about a product, service, or marketing campaign. This feedback helps you make real-time adjustments and improvements."},
  {icon:x_2_5 , title:"Amplified Reach" , desc:"Twitter's vast user base and viral potential mean your message can quickly reach a broad audience. Effective Twitter marketing can lead to wider recognition and a stronger position within your industry."},
]


const X = () => {
   return (
    <div className="x shared">
      <MetaTag canonical="x" title=" Best Twitter Marketing Agency in Dubai "  desc="Enhance your brand's online presence,grow your followers, boost engagement,and generate potential leads via MRM's Twitter marketing services. Contact Us Now" />
      <Social_Hero Cover={FacebookCover} Intro={FacebookIntro} 
      H1="Transform Your Business with our Expert X Marketing Services"
      Img={IMG1} 
      Span1="Unlocking X Marketing Success With MRM "
      Span2="X is a powerful social media platform with immense potential for business growth, boasting over 353 million active users. Recent studies reveal that 79% of X users recommend businesses and brands they follow, making it an excellent tool for advertising. To fully utilize X's advertising capabilities, taking necessary measures and reaching the right audience is vital."
      Span3="MRM - Your Partner for Successful X Marketing in Dubai"
      Span4="We are dedicated to creating a unique brand identity, promoting growth, and ensuring the success of your business through our advertising campaigns.Our X advertising services allow you to connect with the right audience, increase brand visibility, improve engagement rates, and expand your online presence. By partnering with us, you can unlock the full potential of X marketing."
      />
      
        <Divider classn="divider" />
        <Box_4 Img={IMG1} data={SERVICES} />


        <Divider classn="divider-left" />
        <div className="impact1">
          <div className="bgCover"  >  <img  src={IMG3} alt="twitter-page"  /> </div>
              <div className="container">
                  <div className="h1 " data-aos="zoom-in"> Types of Twitter Ads MRM Offers </div>
                  <div className="boxs" >
                    {
                      TYPES.map((e,index)=> (
                        <div className="box" key={index} data-aos="zoom-in-left"   >
                          <div className="coverImg"><img src={e.icon} alt="" /></div>
                            <div className="text">
                                <div className="h2 clip hidden-text" >{e.title} </div>
                                <div className="p hidden-text" >{e.desc} </div>
                            </div>
                        </div>
                      ))
                    }
                  </div>
              </div>
          </div>

        <Divider classn="divider" />
        <Box5  data={SERVICES} Img={IMG2} title=" Our Twitter Marketing Businesses" desc="At MRM, we have a refined Twitter marketing process that ensures the success of your campaigns. Here's a glimpse into our systematic approach"/>

        <Divider classn="divider-left" />
        <BoxBorderRight Img={IMG3} data={SERVICES1} title="How Twitter Marketing Helps Businesses" phead="Twitter marketing plays a pivotal role in driving business success. Here's how it can benefit your brand" />

      <Footer />
      </div>
  )
}

export default X






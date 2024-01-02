import Footer from '../Footer'
import FacebookIntro from "../../assets/Socialmedia/bg-social.jpg"
import FacebookCover from "../../assets/Socialmedia/tiktok.png"
import { Divider} from '../patterns/Pattern1'


import IMG1 from "../../assets/bg/b1.jpg"
import IMG2 from "../../assets/bg/b2.jpg"
import IMG3 from "../../assets/bg/b3.jpg"
import MetaTag from '../../pages/MetaTag'
import Social_Hero from '../helpers/Social_Hero'
const TYPES = [
  {icon :"" ,title:"In-Feed Ads" , desc:"Seamlessly integrated into users' For You Page (FYP), In-Feed Ads capture high in-app engagement. With durations spanning from 5 to 60 seconds, these ads feature compelling call-to-action buttons that lead users to external landing pages. It's the perfect way to blend into users' content feeds while driving them toward your brand's offerings."},
  {icon :"" ,title:"Top View Ads" , desc:"TopView Ads are the first in-feed videos users encounter upon opening the app, guaranteeing a precious three seconds of undivided attention. Crafting impactful content is paramount here, as these initial moments can make or break the user's interest. Our creative team excels at creating content that grabs attention from the get-go."},
  {icon :"" ,title:"Brand Takeover Ads" , desc:"Imagine users opening the app to an eye-catching, full-screen ad. That's precisely what Brand Takeover Ads offer. These ads allow for creative presentations through videos, GIFs, or screenshots. They provide a powerful platform for making a memorable first impression and creating lasting brand recall."},
  {icon :"" ,title:"Branded Effects" , desc:"Filters are integral to any social media platform, and TikTok is no exception. With Branded Effects, brands can craft their shareable stickers, AR filters, and lenses.  This presents an ideal opportunity to encourage user-generated content and raise awareness for campaigns, especially those with a meaningful cause."},
  {icon :"" ,title:"Branded Hashtag Challenge" , desc:"The Branded Hashtag Challenge ad format thrives when presented alongside other challenges. It encourages users to showcase their creativity and engage with your brand by introducing a custom hashtag challenge. This user-generated content can spread like wildfire, amplifying your brand's reach."},
 ]

const SERVICES = [
  {icon :"" ,title:"You Can Significantly Increase Your Brand Awareness" , desc:"TikTok's massive user base offers an unparalleled opportunity to increase your brand's visibility and recognition among a diverse audience."},
  {icon :"" ,title:"TikTok Is An All-In-One Platform For Making The Best Video Marketing Campaigns" , desc:"Short-form videos are the reigning champions of content consumption, and TikTok provides the ideal platform to create captivating video campaigns."},
  {icon :"" ,title:"Short-Form Videos Are Still The Most Trending Form Of Content" , desc:"In an era of short attention spans, TikTok's short-form videos are ideally suited.to capture and retain audience interest. "},
  {icon :"" ,title:"TikTok Makes It Easy To Hook Your Audience" , desc:"The platform's user-friendly features and interactive elements make engaging and connecting with your target audience easy."},
  {icon :"" ,title:"TikTok Allows You To Find Your Niche" , desc:"With advanced targeting options, TikTok enables you to reach a specific audience that aligns with your brand's values and goals."},
  {icon :"" ,title:"TikTok Has The Largest Engagement Rate On Social Media Trends Early" , desc:"Being an early adopter of TikTok can give your brand a significant advantage in riding the wave of emerging trends."},
  {icon :"" ,title:"TikTok Has Less Competition Amongst Businesses" , desc:"TikTok's advertising space is less crowded than other social media platforms, giving your brand more visibility."},
  {icon :"" ,title:"TikTok Social Media Marketing Is Cheap And Easy To Start" , desc:"TikTok offers cost-effective advertising options, making it accessible to businesses of all sizes."},
]

const Tiktok = () => {
   return (
    <div className="Tiktok shared">
      <MetaTag canonical="tiktok" title=" Top TikTok Marketing Agency in Dubai   "  desc="Boost your brand's visibility and sales on TikTok with MRM's advertising services. Maximize your reach and engage your audience effectively. Contact Us Now" />
      <Social_Hero Cover={FacebookCover} Intro={FacebookIntro} 
      H1="Maximize Engagement and Build Your Brand with Our TikTok Marketing Strategies"
      Img={IMG1} 
      Span1="Get Ahead of the Competition with MRM's Effective TikTok Marketing Service"
      Span2="At MRM Agency, we are dedicated to providing you with tangible results through innovative problem-solving and a relentless focus on your success. Our commitment sets us apart, and we invite you to join us on a journey of digital growth and triumph where your brand's story is not only heard but celebrated globally"
      Span3="The Power of TikTok Marketing for Businesse"
      Span4="TikTok is a social media platform designed for sharing short videos and music.  Originally created as a creative outlet for young adults and teenagers to showcase their talents in acting, singing, dancing, and comedy,  TikTok has expanded its impact beyond generational boundaries. It has become a hub for entertaining, informative, and engaging videos.  For businesses, TikTok presents a unique opportunity to connect with a younger audience and use demographics as a potent marketing tool. TikTok marketing is a dynamic force in the ever-evolving landscape of digital advertising. If you're interested, let's dive deeper"
      />

      <Divider classn="divider-left" />
      <div className="impact">
        <div className="bgCover"  >  <img  src={IMG3} alt="tiktok-page"  /> </div>
            <div className="container">
                <div className="h1 "  data-aos="fade-down" > Types of TikTok Ads we offer</div>
                <div className="phead"   data-aos="fade-down" data-aos-delay="200">TikTok's advertising landscape offers diverse options tailored to your unique marketing objectives. MRM agency specializes in executing these TikTok ad types to elevate your brand's visibility and engagement. </div>
                <div className="boxs" >
                  {
                    TYPES.map((e,index)=> (
                      <div className="box" key={index}  data-aos="fade-down"  >
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
        <div className="box-style-4">
          <div className="bgCover"  >  <img  src={IMG2} alt="tiktok-page"  /> </div>
          <div className="container">
            <div className="h1"  data-aos="fade-down"  style={{marginBottom:""}}>Why Choose TikTok Marketing?</div>
            <div className="phead"  data-aos="fade-down" data-aos-delay="200">Still trying to convince you about the power of TikTok for your marketing strategy? Let's explore eight key benefits</div>
            <div className="boxs">
            {
              SERVICES.map((e,index)=> (
                <div className="box"  data-aos="fade-down" >
                    <h2 className='number'>{index+1 >= 10 ?"":"0"}{index+1}</h2>
                    <h3 className='h2'>{e.title}</h3>
                    <p className='p'>{e.desc}</p>
                  </div>          
              ))
            }
            </div>
          </div>
        </div>

      <Footer />
      </div>
  )
}

export default Tiktok






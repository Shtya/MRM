import React from 'react'
import Footer from '../Footer'
import CoverSectionImg from "../../assets/Socialmedia/bg.jpg"
import FacebookIntro from "../../assets/Socialmedia/bg-social.jpg"
import FacebookCover from "../../assets/Socialmedia/snapchat.png"

import X1 from "../../assets/Socialmedia/x1.png"
import X2 from "../../assets/Socialmedia/x2.png"
import X3 from "../../assets/Socialmedia/x3.png"
import X4 from "../../assets/Socialmedia/x4.png"
import X5 from "../../assets/Socialmedia/x5.png"
import X6 from "../../assets/Socialmedia/x6.png"


import{ Divider } from '../patterns/Pattern1'
import IMG1 from "../../assets/bg/b1.jpg"
import IMG2 from "../../assets/bg/b2.jpg"
import IMG3 from "../../assets/bg/b3.jpg"

import MetaTag from '../../pages/MetaTag'
import Social_Hero from '../helpers/Social_Hero'



const TYPES = [
  {icon :X2 ,title :"Story Ads"  , desc:"A unique content experience appearing in the app's discover section. Users tap a branded title, revealing a collection of ads. Snap designs these ads based on your provided assets."  },
  {icon :X3 ,title :"Filters"  , desc:"Customized Snap filters for your brand, including face filters tailored to your audience's preferences, ensuring engaging content that resonates with your clients."  },
  {icon :X5 ,title :"Collection Ads"  , desc:"Utilized for various product ads on your e-commerce website or driving traffic to a landing page or mobile e-commerce site."  },
  {icon :X6 ,title :"AR Lenses"  , desc:"Leveraging augmented reality to create interactive moments, including Face and World Lenses, enhances user engagement."  },
  {icon :X4 ,title :"Commercials"  , desc:"Non-skippable 6-second video ads to boost brand awareness within your target audience."  },
  {icon :X1 ,title :"Snap Ads"  , desc:"These are full-screen vertical videos with background sound, lasting ten seconds. They include a 'swipe up' CTA button, redirecting users to websites, apps, landing pages, and more, enhancing your app's branding."  },
]

const SERVICES = [
  {icon:"" , title:"Geo-filters" , desc:"Increase engagement by targeting users in specific locations."},
  {icon:"" , title:"Social media presence" , desc:"Boost your online presence by showcasing your content to Snapchat's vast user base."},
  {icon:"" , title:"Massive audience" , desc:"Reach a vast audience of over 300 million active monthly users."},
  {icon:"" , title:"Brand awareness" , desc:"Build and strengthen your brand's image with Snapchat's unique creative tools."},
  {icon:"" , title:"Consumer behaviour" , desc:"Track user behavior with the Snap Pixel to gain insights into their actions and preferences."},
  {icon:"" , title:"Engagement" , desc:"Create meaningful interactions with your audience through Snapchat's interactive features."},
  {icon:"" , title:"Influencer marketing" , desc:"Leverage influencers effectively by partnering with relevant influencers on Snapchat."},
  {icon:"" , title:"Mobile users" , desc:"Reach a mobile-centric audience who prefer using their smartphones for social media."},
]



const SERVICES1 = [
  {icon : " " , title:"Drive store sales" , desc : "Help potential customers find your business effortlessly."},
  {icon : " " , title:"Boost online sales" , desc : "Showcase ads to engage shoppers likely to click and make purchases."},
  {icon : " " , title:"Generate leads" , desc : "Transform your Snapchat campaign into a lead-generation powerhouse."},
  {icon : " " , title:"Product/service promotion" , desc : "Generate excitement for new offerings with compelling graphics and captivating videos."},
]


const Snapchat = () => {
   return (
    <div className="Snapchat shared">
      <MetaTag canonical="snapchat" title=" Best Snapchat Marketing Agency In Dubai  "  desc="Looking for Snapchat advertising services? Discover MRM`s Snapchat marketing services that empower your brand, boost engagement, and supercharge your sales" />
      <Social_Hero Cover={FacebookCover} Intro={FacebookIntro} 
      H1="Create Engaging Snapchat Campaigns with Our Expert Marketing Solutions" 
      Img={IMG1} 
      Span1="Unleash the Potential of Snapchat Marketing with MRM Agency" 
      Span2="At MRM Agency, we specialize in creating personalized and captivating Snapchat Ads enriched with engaging content such as short films, GIFs, and images that leave a lasting impression on your audience. As one of Dubai's best Snapchat marketing agencies, our solutions are designed to resonate with a younger demographic. If your products or services target a youthful audience, allocating a portion of your digital and social media marketing budget to Snapchat is strategic." 
      Span3="Why Snapchat Marketing?"
      Span4="Snapchat has become one of the most popular platforms for sharing images and videos worldwide.  With over 186 million active users, mostly between the ages of 18 and 24, this demographic plays a significant role in contributing to the staggering daily count of 3 billion pictures shared on the platform. If your business caters to the younger generation, Snapchat is your go-to platform. It simplifies advertising and makes it cost-effective and efficient."
      />

      <Divider classn="divider" />
      <div className="box-style-3">
        <div className="bg"> <img src={CoverSectionImg} alt="Snapchat-page" loading="lazy" /></div>
        <div className="container">
        <div className="h1 clip" data-aos="fade-up" > Types of Snapchat Ads MRM Can Run For You </div>
        <div className="boxs">
        {
          TYPES.map((e,index)=> (
            <div className="box" key={index}  data-aos="zoom-in-right" >
              <div className='main'>
                <img className='tokenImage' src={e.icon} alt="NFT" />
                <h2 className='h2'>{e.title} </h2>
                <p  className='p'>{e.desc}</p>
                <hr />
              </div>
            </div>
           ))
        }
        </div>
      </div>
    </div>

        <Divider classn="divider" />
        <div className="reason2">
          <div className="bgCover"  >  <img  src={IMG2} alt="Snapchat-page" loading="lazy" /> </div>
        <div className='clip h1'data-aos="fade-up" >8 Reasons to Choose Snapchat for Digital Marketing</div> 
        <article className="gallery">
          {
            SERVICES.map((e,index)=>(<div className="img" key={index} data-aos="zoom-in-right" > 
            <div className="num hidden-text"> {index + 1} </div>
              <div className="h2 ">{e.title}</div>
              <div className="p">{e.desc}</div>
             </div>) )
          }
        </article>
        </div>

        <Divider classn="divider-left" />
      <div className="box-style-1">
        <div className="bgCover"  >  <img  src={IMG3} alt="Snapchat-page" loading="lazy" /> </div>
            <div className="container">
                <div className="h1 clip" data-aos="fade-up"> What MRM, a Premier Snapchat Marketing Agency, Can Do for You? </div>

                <div className="boxs" >
                  {
                    SERVICES1.map((e,index)=> (
                      <div className="box" key={index} data-aos="zoom-in"  >
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


      <Footer />
      </div>
  )
}

export default Snapchat






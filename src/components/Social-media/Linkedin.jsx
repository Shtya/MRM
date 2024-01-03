import React, { useRef, useState } from 'react'
import Footer from '../Footer'
import FacebookIntro from "../../assets/Socialmedia/bg-social.jpg"
import FacebookCover from "../../assets/Socialmedia/linkedin.png"

import  { Divider} from '../patterns/Pattern1'
import IMG1 from "../../assets/bg/b1.jpg"
import IMG2 from "../../assets/bg/b2.jpg"
import IMG3 from "../../assets/bg/b3.jpg"
import MetaTag from '../../pages/MetaTag'
import Social_Hero from '../helpers/Social_Hero'

import LinkedImg1 from "../../assets/Icon/linkedin-2-33.png"
import LinkedImg2 from "../../assets/Icon/linkedin-2-22.png"
import LinkedImg3 from "../../assets/Icon/linkedin-2-11.png"

import BoxBorderRight from '../helpers2/BoxBorderRight'

import LinkedinImg_2_1 from "../../assets/Icon/linkedin-2-1.png"
import LinkedinImg_2_2 from "../../assets/Icon/linkedin-2-2.png"
import LinkedinImg_2_3 from "../../assets/Icon/linkedin-2-3.png"
import LinkedinImg_2_4 from "../../assets/Icon/linkedin-2-4.png"
import LinkedinImg_2_5 from "../../assets/Icon/linkedin-2-5.png"


import LinkedinImg_3_1 from "../../assets/Icon/link1.png"
import LinkedinImg_3_2 from "../../assets/Icon/link2.png"
import LinkedinImg_3_3 from "../../assets/Icon/link3.png"
import LinkedinImg_3_4 from "../../assets/Icon/link4.png"
import LinkedinImg_3_5 from "../../assets/Icon/link5.png"
import LinkedinImg_3_6 from "../../assets/Icon/link6.png"

const TYPES = [
  {icon : LinkedImg1 ,title:" Sponsored Content" , desc:" Promote existing content from your business page to a tailored target demographic. Utilize LinkedIn's robust profile data to create an ideal audience and engage with those genuinely interested in your brand."},
  {icon : LinkedImg2 ,title:" Sponsored In Mail" , desc:" Deliver personalized ads directly to a LinkedIn user's inbox, adding a personal touch to your messages. Sponsored InMail reaches active users across both desktop and mobile devices, making it a potent tool"},
  {icon : LinkedImg3 ,title:"Text Ads" , desc:" Text Ads include compelling headlines, descriptions, and images. With this ad format, we create multiple ad versions for each campaign to optimize performance. These ads are viewable on desktop computers, providing a versatile advertising option."},
 ]

const SERVICES = [
  {icon:LinkedinImg_3_1 , title:"Strategic Audience Targeting" , desc:"Our expert team utilizes LinkedIn's precise targeting options to identify and reach the most relevant professionals for your business. We tailor your marketing campaigns to connect with decision-makers, industry experts, and potential clients who are genuinely interested in your offerings."} ,
  {icon:LinkedinImg_3_2 , title:"Optimized Brand Visibility" , desc:"MRM focuses on optimizing your brand's visibility on LinkedIn. We create and share insightful content that resonates with your target audience, positioning your business as a thought leader in your industry. This heightened visibility fosters trust and recognition among your peers and potential customers."} ,
  {icon:LinkedinImg_3_3 , title:"Quality Lead Generation" , desc:"We recognize that LinkedIn's user base is composed of professionals actively seeking business-related opportunities. Our strategies are designed to generate high-quality leads, ensuring that the individuals you connect with are more likely to engage with your business and convert into valuable clients."} ,
  {icon:LinkedinImg_3_4 , title:"B2B Networking Excellence" , desc:"LinkedIn is a powerful platform for B2B networking, and we make the most of it. We help you build and nurture professional relationships with decision-makers, potential partners, and industry influencers. These connections can lead to collaborative ventures, referrals, and overall business growth."} ,
  {icon:LinkedinImg_3_5 , title:"Content Sharing and Thought Leadership" , desc:"MRM emphasizes content sharing and thought leadership on LinkedIn. We publish informative articles, share compelling case studies, and offer valuable insights that not only attract your target audience but also establish your business as an industry authority."} ,
  {icon:LinkedinImg_3_6 , title:"Recruitment and Employer Branding" , desc:"Beyond marketing, we recognize LinkedIn's potential for recruitment and employer branding. We assist in identifying and connecting with potential employees, posting job openings, and promoting your company culture. This comprehensive approach aids in talent acquisition and enhances your reputation as an employer of choice."} ,
]


const SERVICES1 = [
  {icon:LinkedinImg_2_1 , title:"Research" , desc:"We gather in-depth knowledge about your business and services to identify your target audience based on various parameters such as company, job position, education, and skills."},
  {icon:LinkedinImg_2_2 , title:"Budgeting" , desc:"We create an advertising plan tailored to your budget, ensuring a high return on investment without compromising results."},
  {icon:LinkedinImg_2_3 , title:"Targeting" , desc:"Our expertise in targeting allows us to leverage LinkedIn's self-reported data for precise audience selection, minimizing advertising waste."},
  {icon:LinkedinImg_2_4 , title:"Campaign Setup" , desc:"We choose the right ad format, create multiple ad variations, and continuously optimize to maximize results."},
  {icon:LinkedinImg_2_5 , title:"Measure and Optimize" , desc:"We closely monitor metrics, adjusting campaigns to improve performance and deliver the best possible outcomes."},
]

const Linkedin = () => {

   return (
    <div className="Linkedin shared">
      <MetaTag canonical="linkedin" title=" Best LinkedIn Advertising Services in Dubai, UAE "  desc="Looking for B2B  marketing agency in Dubai? With MRM you can Reach decision-makers, establish thought leadership, and generate high-quality B2B leads" />
      <Social_Hero Cover={FacebookCover} Intro={FacebookIntro} 
      H1="Grow Your Business with Our Comprehensive LinkedIn Marketing Solutions"
      Img={IMG1} 
      Span1="Partner with MRM for Results-Driven LinkedIn Marketing in Dubai "
      Span2="At MRM, we strive to captivate and engage your audience on LinkedIn by going above and beyond. Our team specializes in creating custom ads featuring compelling content, such as short videos, GIFs, and images. As the leading social media agency in Dubai, our solutions are meticulously optimized and tailored to meet your objectives and connect with your target audiences. We excel at identifying the right audience and monitoring brand conversations on social media. LinkedIn's powerful targeting capabilities enable us to reach individuals based on their occupation, job title, corporate position, location, and more, making it an ideal platform for B2B clients to generate high-quality leads."
      Span3="The Power of LinkedIn Marketing for Businesses"
      Span4="LinkedIn is certainly a great platform for professionals to connect with each other from all over the world. With over 1.5 billion active users, it provides a unique opportunity to enhance personal brand and professional influence. By using LinkedIn, you can enhance your professional influence and expand your social network."
      />
      
        <Divider classn="divider-left" />
        <div className="impact1 impact-custom">
          <div className="bgCover"  >  <img  src={IMG2} alt="twitter-page"  /> </div>
              <div className="container">
                  <div className="h1 " data-aos="zoom-in">Types of Linkedin Ads</div>
                  <div className="boxs" >
                    {
                      TYPES.map((e,index)=> (
                        <div className="box" key={index} data-aos="zoom-in-left"   >
                          <div className="coverImg"><img src={e.icon} alt="" /></div>
                            <div className="text">
                              <span/> 
                                <div className="h2 clip hidden-text">{e.title} </div>
                                <div className="p hidden-text" >{e.desc} </div>
                            </div>
                        </div>
                      ))
                    }
                  </div>
              </div>
          </div>


        <Divider classn="divider" />
        
        <div className="box-style-7">
          <div className="bgCover"  >  <img  src={IMG3} alt="Linkedin-page"  /> </div>
          <div className="container">
            <div className="h1"  data-aos="zoom-in">How MRM Utilizes LinkedIn's Advantages for Your Business Success</div>
            <div className="phead" data-aos="zoom-in" data-aos-delay="200" >At MRM, we understand that LinkedIn is a dynamic platform with unique features </div>
            <div className="boxs">
            {
              SERVICES.map((e,index)=> (
                <div className="box" data-aos="zoom-in-right"  key={index} >
                    <h2 className='number'><img src={e.icon} alt="" /></h2>
                    <div className="text">
                      <h3 className='h2'>{e.title}</h3>
                      <p className='p'>{e.desc}</p>
                    </div>
                </div>
              ))
            }
            </div>
          </div>
        </div>


        <Divider classn="divider-left" />
        <BoxBorderRight Img={IMG2} data={SERVICES1} title="MRM's LinkedIn Advertising Process"  />

      <Footer />
      </div>
  )
}

export default Linkedin






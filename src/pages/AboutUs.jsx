import React, { useLayoutEffect, useRef, useState } from 'react'
import ImgIntro from "../assets/about-us/intro.jpg"
import ImgBox1 from "../assets/about-us/mission.jpg"
import ImgBox2 from "../assets/about-us/vision.jpg"
import ImgBox3 from "../assets/about-us/vision.jpg"
import ImgContact from "../assets/about-us/contact.jpg"
import Navbar from '../components/Navbar'
import OneWhy from '../components/OneWhy'
import Footer from '../components/Footer'
import Animation from '../components/helpers/Animation'
import Pattern1, { Divider, Pattern2, Pattern3, Pattern9 } from '../components/patterns/Pattern1'
import IMG2 from "../assets/bg/bg3.jpg"
import IMG1 from "../assets/bg/bg3.jpg"

const AboutUs = () => {
  const [width , setwidth] = useState(0)
  const ref = useRef()
  useLayoutEffect(_=>{  setwidth(ref.current?.offsetWidth)} ,[])

  const vission_mission = [ 
    {title:"Our Vision" , img:ImgBox2 , desc :"Our goal is to become one of the leading figures in the industry, known for our excellence. We are dedicated to being the preferred choice for individuals and businesses aiming to elevate their work to the highest standards. Ultimately, we aim to be a primary source of original and creative ideas, providing a pathway to unlock creativity and achieve remarkable results."} ,
    {title:"Our Mission" , img:ImgBox1 , desc :"Our mission is to empower businesses and brands to succeed in the constantly evolving realms of marketing and digital solutions. We are committed to delivering outstanding outcomes by leveraging our knowledge in advertising, branding, and innovative strategies."} ,
  ]
  return (
    <div className='about-us'>
      <Animation />
      <div className="container"> <Navbar /> </div>
      <div className="coverIntro hidden-img"> <img src={ImgIntro}  /></div>

        <Divider classn=" divider-top " />
        {/* <Pattern9 classn="divider-top" /> */}
        <div className="searching ">
        <div className="bgCover"> <img  src={IMG1} alt="" /> </div>
          <div className="container">
            <div className="coverImg "> <img src={ImgContact} alt="" /> </div>
            <div className="boxs ">
                <h3 className='box p '>We are a global creative agency based in the UAE and a leading agency in advertising, marketing, and digital solutions. Our expertise is helping companies establish a strong and professional presence in physical and digital spaces using innovative and effective strategies.</h3>
                <h2 className='box p '>We create exceptional visual identities and build robust online presences for brands. Our team is dedicated to delivering top-notch services, utilizing the latest technologies and top-notch solutions to achieve tangible results. We offer professional marketing services to help your brand shine, from visual identities to online experiences. </h2>
            </div>
          </div>
        </div>

        <Divider classn="divider" />
        {/* <Pattern9 /> */}
        <div className="WHY">
          <div className="bgCover"> <img  src={IMG2} alt="" /> </div>
          <div className="container">
            {vission_mission.map((e,index)=> (
                <OneWhy key={index} img={e.img} title={e.title} desc={e.desc} />
              ))}
        </div>
        </div>

      <Footer />
    </div>
  )
}

export default AboutUs
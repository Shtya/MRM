import React, { useState , useEffect } from 'react'
import Animation from './helpers/Animation'

import WhyImg from "../assets/Why.jpg"
import IMG2 from "../assets/bg/bg3.jpg"
import Fade from 'react-reveal/Fade';

const Why = () => {



  const choose = [
    {idx:"0" , icon : 'fas fa-pencil-ruler font-icon' , title : "We're problem solvers"  , desc:"We conquer all challenges with creativity, determination, and a 'can-do' attitude. We have solutions to your problems. "} ,
    {idx:"1" , icon : 'fas fa-drafting-compass font-icon' , title : "We deliver results, not just talk"  , desc:"Our commitment is to implement effective strategies, never overpromise, work hard, and measure success by our achievements. "} ,
    {idx:"2" , icon : 'fas fa-layer-group font-icon' , title : "We prioritize you"  , desc:"Your success drives us. We're always available to meet your needs, offer guidance, and listen closely to your input.  "} ,
    {idx:"3" , icon : 'fas fa-rocket font-icon' , title : "We focus on your growth"  , desc:" Our solutions are always advanced, results-driven, and up-to-date with the latest technologies and trends. "} ,
  ]
  
  return (
    <section id='Why' className='Why'>
      <Animation />
      <div className="bgCover"  >  <img  src={IMG2} alt="" /> </div>
    <Fade top distance="20%" duration={1000} >
      <div className="container1">
        <div className="h1 clip hidden-text" >WHY CHOOSE US</div>
      </div>
      <div className="container">
              <div className="boxs"  >
                  {choose.map((e,idx)=> (
                    <div className="box" key={idx} >
                      <div className="group" >
                          <i  className={`${e.icon} hidden-img`}></i>
                          <h3 className='h2 hidden-text' > {e.title}  </h3>
                      </div>
                      <span className={` p hidden-text`}>{e.desc}</span>
                    </div>
                  ))}
              </div>

            <div className="Img hidden-img"  >
              <img src={WhyImg} alt="" />
            </div>
      </div>
    </Fade>
    </section>
  )
}

export default Why
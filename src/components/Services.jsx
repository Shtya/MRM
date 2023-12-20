import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import IMG3 from "../assets/bg/bg5.jpg"
import { Fade } from "react-awesome-reveal";

const services = [
  {route:"/social",     animate:"fade-up",  title:"social media marketing"       , icon:"clip  fa-solid fa-bullhorn "        ,desc:"Enhance your online presence with our social media management." ,                                                                 },
  {route:"/web-design", animate:"fade-up",  title:"web design & Development "    , icon:"clip  fa-solid fa-pen-nib"          ,desc:"We transform your online presence with responsive web design, e-commerce solutions, and ongoing maintenance" ,                   },
  {route:"/signages",   animate:"fade-up",  title:"indoor & outdoor signages " , icon:"clip  fa-solid fa-signs-post"       ,desc:"Maximize brand visibility with our eye-catching indoor and outdoor advertising solutions." ,                                            },
  {route:"/photography",animate:"fade-up",  title:"photography & videography "   , icon:"clip  fa-regular fa-circle-play"    ,desc:"We offer captivating visuals for your marketing. our high-quality images and videos tell a story that engages your audience." ,       },
  {route:"/exhibition", animate:"fade-up",  title:"exhibition display stands"    , icon:"clip  fa-solid fa-layer-group"      ,desc:"Enhance your physical presence at events with custom-designed exhibition stands creatively showcasing your products or services.  " , },
  {route:"/gifts",      animate:"fade-up",  title:"cooperated gifts "            , icon:"clip  fa-solid fa-gift"             ,desc:"Discover our premium gifting options, including customized items and trophies, to make any occasion special." ,                       },
  {route:"/media",      animate:"fade-up",  title:"media buying"                 , icon:"clip  fa-solid fa-shop"             ,desc:"Maximize online reach with effective advertising. Optimize campaigns with social media and Google Ads."    ,                              },
  {route:"/branding",   animate:"fade-up",  title:"Branding "                    , icon:"clip  fa-brands fa-connectdevelop"  ,desc:"A strong brand identity connects with your audience. Let our branding services help you create a resonant brand." ,                   },
  {route:"/seo",        animate:"fade-up",  title:"SEO "                         , icon:"clip  fa-solid fa-magnifying-glass" ,desc:"Drive organic traffic and secure top search engine rankings with our expert SEO services.  " ,                                     },
];

export function Services() {

  return (
    <>
    <section className='services search-edite' id='Services'>
      <div className="bgCover"  >  <img  src={IMG3} alt="" /> </div>
      <h2 className='h1 clip hidden-text' >OUR SERVICES</h2> 
      
      <div className="container">
      <ul className='ul' >
        {services.map((e , index) => (
    <Fade top distance="20%" duration={1000} >
          <div key={index} className="box" >
            <div className="animate" ></div>
            <Link to={e.route}   >
              <Link to={e.route}><i className={`${e.icon} clip `}> <span />  <span /> </i> </Link>
              <h3 className='h2 clip hidden-text'>{e.title}</h3>
              <h4 className='p hidden-text'>{e.desc}</h4>
          </Link>
          </div>
        </Fade>
        ))}
      </ul>
      </div>
    </section>
    </>
  );
}

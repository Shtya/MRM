import React, { useEffect, useState } from 'react';
import {createRoot} from 'react-dom/client';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import './i18n';
import App from './App';
import IMG3 from "./assets/bg/b3.webp"
import logo from "./assets/Logo1.webp"
import {BrowserRouter, useLocation} from "react-router-dom"
import MetaTag from './pages/MetaTag';


const sitelinksData = {
  "@context": "http://schema.org",
  "@type": "WebSite",
  "url": "https://mrmadvertisingdubai.com/",
  "name": "MRM",
  "mainEntity": [
    {
      "@type": "Services",
      "@id": "https://mrmadvertisingdubai.com/#services",
      "url": "https://mrmadvertisingdubai.com/#services",
      "name": "Services"
    },
    {
      "@type": "Blog",
      "@id": "https://mrmadvertisingdubai.com/blog",
      "url": "https://mrmadvertisingdubai.com/blog",
      "name": "Blog"
    },
    {
      "@type": "Contact Us",
      "@id": "https://mrmadvertisingdubai.com/contact-us",
      "url": "https://mrmadvertisingdubai.com/contact-us",
      "name": "Contact Us"
    }
  ]
};
const Loading = () => {
  const {pathname} = useLocation() ;
  const [time , settime] = useState(true)
  useEffect(_=>{
    const data = async()=>{
      await pathname == "/blog" || pathname == "/" ? settime(true) : settime(false)
      setTimeout(() => {
        settime(false)
      }, 2000);
    }

    data()
  } ,[pathname])
  return (
   time == true && <div className="animation_text" >
        <div className="bgCover"  >  <img  src={IMG3}  alt="home"  /> </div>
          <div className="coverImg"> <img src={logo}  alt="" /> </div>
          <div className="container2">  <span></span>  <span></span>  <span></span>  <span></span></div>
      </div>
  )
}


createRoot(document.getElementById("root")).render(<BrowserRouter> 
<MetaTag 
schema={sitelinksData}
  canonical="https://mrmadvertisingdubai.com/" 
  title="MRM | Best Digital Marketing & Advertising Agency in Dubai" 
  desc="we are a Dubai-based agency specialized in advertising, and digital marketing with years of experience. Our team delivers the highest level of service,..." /> 
<App /> <Loading/> </BrowserRouter>)

{/* <App />  </BrowserRouter>) */}






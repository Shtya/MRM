import React, { useEffect, useState } from 'react';
import {createRoot} from 'react-dom/client';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import App from './App';
import IMG3 from "./assets/bg/b9.jpg"

import {BrowserRouter, useLocation} from "react-router-dom"
import { Helmet } from 'react-helmet';



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
        <div className="bgCover"  >  <img  src={IMG3} alt="home" loading="lazy" /> </div>
        <div className="Loading">
        <div class="cube-wrapper">
          <div class="cube-folding">   <span class="leaf1"></span>   <span class="leaf2"></span>   <span class="leaf3"></span>   <span class="leaf4"></span> </div>
          <span class="loading" data-name="Loading">Loading</span>
        </div>
        </div>
      </div>
  )
}


createRoot(document.getElementById("root")).render(<BrowserRouter> 
<Helmet >
    <link rel="canonical" href="https://mrmadvertisingdubai.com/" />   
    <title>MRM | Best Digital Marketing & Advertising Agency in Dubai</title>   
    <meta name="description" content="Boost your brand with MRM, Dubai's premier digital marketing & advertising agency with SEO, social media marketing and PPC for top visibility and impact" /> 
    
</Helmet>

 <App /> <Loading/> </BrowserRouter>)
 {/* <App />  </BrowserRouter>) */}






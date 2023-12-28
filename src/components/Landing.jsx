import Navbar from './Navbar';
import Dashboard from "./Dashboard.mp4"
import IMG3 from "../assets/bg/b3.jpg"

import { memo, useEffect, useRef } from 'react';

const Landing = memo(() => {
  const videoRef = useRef(null);
  useEffect(() => {
    if (videoRef.current) {videoRef.current.addEventListener('loadeddata', handleVideoLoaded);}
    return () => { if (videoRef.current) {   videoRef.current.removeEventListener('loadeddata', handleVideoLoaded); } }
  }, []);

  const handleVideoLoaded = () => {
    videoRef.current.removeEventListener('loadeddata', handleVideoLoaded);
    videoRef.current.setAttribute('preload', 'auto');
  };

  return (
    <header id='header'  >
      <div className="bgCover" style={{zIndex:"0"}}  >  <img   src={IMG3} alt="Landing" loading="lazy" /> </div>
      <div className="container"> <Navbar /> </div>
      <section id='video' >
          <video preload="auto" ref={videoRef}  src={Dashboard} controls={false} id='myVideo'   autoPlay loop muted type="video/mp4">
          </video>
        </section>
    </header>
  )
})

export default Landing
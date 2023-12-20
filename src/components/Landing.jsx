import Navbar from './Navbar';
import Dashboard from "../assets/Dashboard.mp4"
import IMG3 from "../assets/bg/bg5.jpg"
import { useEffect } from 'react';
import { Fade } from "react-awesome-reveal";

const Landing = () => {

  return (
    <header  >
      <div className="bgCover" style={{zIndex:"0"}}  >  <img  src={IMG3} alt="" /> </div>
      <div className="container"> <Navbar /> </div>
      <Fade top  duration={1000} >
      <section id='video'>
          <video controls={false} id='myVideo' autoPlay={true} loop muted>
            <source src={Dashboard} type="video/mp4" />
          </video>
        </section>
        </Fade>
    </header>
  )
}

export default Landing
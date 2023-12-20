import Navbar from './Navbar';
import Dashboard from "../assets/Dashboard.mp4"
import IMG3 from "../assets/bg/bg5.jpg"
import { useEffect } from 'react';

const Landing = () => {

  return (
    <header  >
      <div className="bgCover" style={{zIndex:"0"}}  >  <img  src={IMG3} alt="" /> </div>
      <div className="container"> <Navbar /> </div>
      <section id='video' >
          <video controls={false} id='myVideo'data-aos="zoom-in" autoPlay={true} loop muted>
            <source src={Dashboard} type="video/mp4" />
          </video>
        </section>
    </header>
  )
}

export default Landing
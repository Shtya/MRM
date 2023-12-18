import Navbar from './Navbar';
import Dashboard from "../assets/Dashboard.mp4"
import IMG3 from "../assets/bg/bg5.jpg"
import { useEffect } from 'react';

const Landing = () => {

  return (
    <header  >
      <div className="container">
      <div className="bgCover" style={{zIndex:"0"}}  >  <img  src={IMG3} alt="" /> </div>
      <Navbar />
      <section id='home'>
        <div className="video" >
          <video controls={false} id='myVideo' autoPlay={true} loop muted>
            <source src={Dashboard} type="video/mp4" />
          </video>
        </div>
        {/* <Pattern7 /> */}


        </section>
      </div>
      

    </header>
  )
}

export default Landing
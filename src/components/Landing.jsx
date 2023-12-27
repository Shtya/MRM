import Navbar from './Navbar';
import Dashboard from "./Dashboard.mp4"
import IMG3 from "../assets/bg/b3.jpg"

const Landing = () => {

  return (
    <header id='header'  >
      <div className="bgCover" style={{zIndex:"0"}}  >  <img   src={IMG3} alt="Landing" loading="lazy" /> </div>
      <div className="container"> <Navbar /> </div>
      <section id='video' >
          <video preload="auto"  src={Dashboard} controls={false} id='myVideo'   autoPlay loop muted type="video/mp4">
            {/* <source src={Dashboard}  type="video/mp4" /> */}
          </video>
        </section>
    </header>
  )
}

export default Landing
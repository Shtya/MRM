import Navbar from './Navbar';
import Dashboard from "./Dashboard.mp4"
import IMG3 from "../assets/bg/b3.jpg"

const Landing = () => {

  return (
    <header  >
      <div className="bgCover" style={{zIndex:"0"}}  >  <img  src={IMG3} alt="" loading="lazy" /> </div>
      <div className="container"> <Navbar /> </div>
      <section id='video' >
          <video controls={false} id='myVideo'  autoPlay={true} loop muted>
            <source src={Dashboard} type="video/mp4" />
          </video>
        </section>
    </header>
  )
}

export default Landing
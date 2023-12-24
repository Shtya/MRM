import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import IntroImg from "../assets/footer.jpg"
import { Link } from 'react-router-dom'

const Error = () => {

  return (
    <div className="error">
        <div className="container"> <Navbar /> </div>
        <div className="intro">
          <div className="CoverImg"> <img src={IntroImg} alt="" loading="lazy" /> </div>
          <h1>404</h1>
          <h2 className='clip'> Oops! </h2>
          <h3 className='phead'> Looks like you've taken a wrong turn. Don't worry, even the best of us get lost sometimes.</h3>
          <div className="group2">
            <input type="text" />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <ul className='buttons'>
            <Link to="/home" > Home</Link>
            <Link to="/services"  > Services</Link>
            <Link to="/contact-us" > Contact Us</Link>
          </ul>
        </div>
        <Footer />
    </div>
    )
  }
export default Error
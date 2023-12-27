import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import IntroImg from "../assets/footer.jpg"
import { Link, useLocation } from 'react-router-dom'

const Error = () => {
const {pathname} = useLocation() ;

  return (
    <div className="error">
        <div className="container"> <Navbar /> </div>
        <div className="intro">
          <div className="CoverImg"> <img src={IntroImg} alt="error" loading="lazy" /> </div>
          <h1>404</h1>
          <h2 className='clip'> Oops! </h2>
          <h3 className='phead'> Looks like you've taken a wrong turn. Don't worry, even the best of us get lost sometimes.</h3>
          <ul className='buttons'>
            <Link to="/" > Home</Link>
            <a href={pathname!= "/" ? "/#Services" : "#Services"}  > Services</a>
            <Link to="/contact-us" > Contact Us</Link>
          </ul>
        </div>
        <Footer />
    </div>
    )
  }
export default Error
import Blog from "../components/Blog";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Landing from "../components/Landing";
import { Services } from "../components/Services";
import Why from "../components/Why";
import Who from "../components/Who";
import SlideNav from "../components/SlideNav";
import { Divider } from "../components/patterns/Pattern1";
import MetaTag from "./MetaTag";
import Animation from "../components/helpers/Animation";
import Clients2 from "../components/Clients2";
import SliderHOME from "../components/SLIDER_MRM/SliderHOME"
import { ImageGalleryHome } from '../components/Images2';


function Home() {
  return (
    <div className="Home" >
        <MetaTag title="MRM | Best Digital Marketing & Advertising Agency in Dubai"  desc="Boost your brand with MRM, Dubai's premier digital marketing & advertising agency with SEO, social media marketing and PPC for top visibility and impact" />
        <Animation />
        <Landing />

        <SlideNav />

        <Divider classn="divider" />
        <Who />

        <Divider classn="divider-left" />
        <Why />

        <Divider classn="divider" />
        <Services />

        <Divider classn="divider-left" />
        <SliderHOME title="OUR WORKS" typeOftaps="all" Images={ImageGalleryHome}  taps={[{name :"all"  , type:"all"}, {name :"Signages" , type:"Signages"}, {name :"Stands" , type:"Displaystands"}, {name :"Exhibition" , type:"Exhibition"}, {name :"branding" , type:"branding"}, {name :"photography" , type:"photography"}, {name :"Web design" , type:"Web"},]} />

        
        <Divider classn="divider" />
        <Clients2 />

        <Contact />

        <Divider classn="divider" />
        <Blog />
        
        <Footer  />
        </div>
  );
}

export default Home;

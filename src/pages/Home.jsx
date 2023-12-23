import Blog from "../components/Blog";
import Footer from "../components/Footer";
import Clients from "../components/Clients";
import Contact from "../components/Contact";
import Landing from "../components/Landing";
import { Services } from "../components/Services";
import Why from "../components/Why";
import Who from "../components/Who";
import Portfolio from "../components/Portfolio";
import SlideNav from "../components/SlideNav";
import { Divider, Pattern2 } from "../components/patterns/Pattern1";
import MetaTag from "./MetaTag";
import Animation from "../components/helpers/Animation";
import BlogSwiper from "../components/BlogSwiper";
import Clients2 from "../components/Clients2";

function Home() {

  return (
    <div className="Home" >
      <MetaTag title="Best Advertising & Digital Marketing Agency in Dubai "  desc="Leading Advertising and digital marketing agency in Dubai offers full advertising services and digital marketing solutions to help businesses achieve growth" />
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
        <Portfolio typeGallery="all" header={true} />

        
        <Divider classn="divider" />
        <Clients2 />

        <Contact />

        <Divider classn="divider" />
        <Blog />
        
        <Footer appear={false} />
        </div>
  );
}

export default Home;

import Blog from "../components/Blog";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Landing from "../components/Landing";
import Services from "../components/Services";
import Why from "../components/Why";
import Who from "../components/Who";
import SlideNav from "../components/SlideNav";
import { Divider } from "../components/patterns/Pattern1";
import MetaTag from "./MetaTag";
import Animation from "../components/helpers/Animation";
import Clients2 from "../components/Clients2";
import SliderHOME from "../components/SLIDER_MRM/SliderHOME"
import { HomeMarkup } from "../components/SchemaMarkup/SchemaMarkup";
import { Helmet } from "react-helmet";


function Home() {

  return (
    <div className="Home" >
      <MetaTag script1={HomeMarkup}  title="Best Advertising & Digital Marketing Agency in Dubai "  desc="Leading Advertising and digital marketing agency in Dubai offers full advertising services and digital marketing solutions to help businesses achieve growth" />
      <Helmet>  
      <script type="application/ld+json">{`{
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Your Partner for Advertising & Digital Marketing Success in Dubai",
            "description": "We are a Dubai-based agency specialized in advertising, and digital marketing with years of experience. Our team delivers the highest level of service, combining creativity and strategic thinking for effective campaigns. Our values are dedication, excellence, and transparency.",
            "url": baseWEB,
            "telephone": "+971123456789",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Dubai",
              "addressCountry": "AE"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "opens": "09:00",
              "closes": "18:00"
            },
            "mission": "Our goal is to enable businesses and brands to succeed in marketing and digital solutions, using our expertise in advertising, branding, and innovative strategies to deliver outstanding results.",
            "vision": "We aim to be a leading figure in the industry, dedicated to elevating work to the highest standards. Our goal is to inspire creativity and achieve remarkable results through innovative ideas.",
            
            
          } `}</script>
      </Helmet>
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
        {/* <SliderHOME /> */}
        <SliderHOME />

        
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

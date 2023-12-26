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
import { Helmet } from "react-helmet";


function Home() {

  return (
    <div className="Home" >
      <MetaTag  title="MRM | Best Digital Marketing & Advertising Agency in Dubai"  desc="Boost your brand with MRM, Dubai's premier digital marketing & advertising agency with SEO, social media marketing and PPC for top visibility and impact" />
      <Helmet>  
      <script type="application/ld+json">{`
      {
        "@context": "http://schema.org",
        "@type": "LocalBusiness",
        "name": "MRM | Best Digital Marketing & Advertising Agency in Dubai        ",
        "description": "Boost your brand with MRM, Dubai's premier digital marketing & advertising agency with SEO, social media marketing and PPC for top visibility and impact",
        "url": "https://mrmadvertisingdubai.com/",
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
        "telephone": "+971123456789",
        "image": "https://mrmadvertisingdubai.com/,
      },
      {
        "@context": "http://schema.org",
        "@type": "Organization",
        "name": "MRM advertising",
        "url": "https://mrmadvertisingdubai.com/",
        "logo": "https://mrmadvertisingdubai.com/Logo1.png",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+971123456789",
        }
      }
      `}</script>
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

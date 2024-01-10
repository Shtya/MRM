import React , { Suspense, memo } from "react";
import Landing from "../components/Landing";
import Contact from "../components/Contact";
import { Divider } from "../components/patterns/Pattern1";
import MetaTag from "./MetaTag";
import { ImageGalleryHome, ImageGalleryHomeSchema } from '../components/Images2';
import SliderHOME from "../components/SLIDER_MRM/SliderHOME";
import { useTranslation } from 'react-i18next';

import Animation from "../components/helpers/Animation";
import LoadingMemo from "../components/helpers/LoadingLazy"

import Services from "../components/Services";
import Why from "../components/Why";
import Who from "../components/Who";
import Footer from "../components/Footer";
import Blog from "../components/Blog";

const Clients2 = React.lazy(() => import('../components/Clients2'));



function Home() {
  const { t, i18n } = useTranslation();

  const sitelinksData = {
    "@context": "http://schema.org",
    "@type": "WebSite",
    "url": "https://mrmadvertisingdubai.com/",
    "name": "MRM",
    "mainEntity": [
      {
        "@type": "Services",
        "@id": "https://mrmadvertisingdubai.com/#services",
        "url": "https://mrmadvertisingdubai.com/#services",
        "name": "Services"
      },
      {
        "@type": "Blog",
        "@id": "https://mrmadvertisingdubai.com/blog",
        "url": "https://mrmadvertisingdubai.com/blog",
        "name": "Blog"
      },
      {
        "@type": "Contact Us",
        "@id": "https://mrmadvertisingdubai.com/contact-us",
        "url": "https://mrmadvertisingdubai.com/contact-us",
        "name": "Contact Us"
      }
    ]
  };


  return (
    <div className="Home" >
      <MetaTag schema={sitelinksData}  canonical=""  title="MRM | Best Digital Marketing & Advertising Agency in Dubai"  desc="we are a Dubai-based agency specialized in advertising, and digital marketing with years of experience. Our team delivers the highest level of service,..." />
        <Animation />
        <Landing />

        <Divider classn="divider" />
        <Who />


        <Divider classn="divider-left" />
        <Why />


        <Divider classn="divider" />
        <Services />


        <Divider classn="divider-left" />
        <SliderHOME schema={ImageGalleryHomeSchema} DATA={ImageGalleryHome} typeOf="Signages" title={t("home.Home_Header.name")}   header1={t("home.Home_Header.header",{returnObjects:true})} /> 
        
        <Divider classn="divider" />
        <Suspense fallback={<LoadingMemo />}>   <Clients2 />  </Suspense>

         <Contact /> 


        <Divider classn="divider" />
        <Blog />

        
        <Footer  />
        </div>
  );
}

export default memo(Home);

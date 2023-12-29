import React , { Suspense, memo } from "react";
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
import LoadingMemo from "../components/helpers/LoadingLazy"
const Clients2 = React.lazy(() => import('../components/Clients2'));
const SliderHOME = React.lazy(() => import("../components/SLIDER_MRM/SliderHOME"));

function Home() {

  return (
    <div className="Home" >
      <MetaTag  canonical=""  title="MRM | Best Digital Marketing & Advertising Agency in Dubai"  desc="Boost your brand with MRM, Dubai's premier digital marketing & advertising agency with SEO, social media marketing and PPC for top visibility and impact" />
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
        <Suspense fallback={<LoadingMemo />}>   <SliderHOME />  </Suspense>
        
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

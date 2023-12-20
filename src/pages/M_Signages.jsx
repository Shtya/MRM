import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ImgIntro from "../assets/signages/intro.jpg";
import ImgSection from "../assets/signages/cover.jpg";

import Icon_1 from "../assets/S_media/1.png";
import Icon_2 from "../assets/S_media/2.png";
import Icon_3 from "../assets/S_media/3.png";
import Icon_4 from "../assets/S_media/4.png";
import Icon_5 from "../assets/S_media/5.png";

import Outdoor_1 from "../assets/gallery/outdoor/1.jpg";
import Outdoor_2 from "../assets/gallery/outdoor/2.jpg";
import Outdoor_3 from "../assets/gallery/outdoor/3.jpg";
import Outdoor_4 from "../assets/gallery/outdoor/4.jpg";
import Outdoor_5 from "../assets/gallery/outdoor/5.jpg";
import Outdoor_6 from "../assets/gallery/outdoor/6.jpg";
import Outdoor_7 from "../assets/gallery/outdoor/7.jpg";
import Outdoor_8 from "../assets/gallery/outdoor/8.jpg";
import Slider_2_Imgs from "../components/Slide/Slider_2_Imgs";
import Animation from "../components/helpers/Animation";
import { Pattern9 } from "../components/patterns/Pattern1";
import IMG2 from "../assets/bg/bg5.jpg";
import { Fade } from "react-awesome-reveal";

const process = [
  {
    img: Icon_1,
    title: " Planning",
    desc: "During planning, we consider every detail to create signage that resonates with your brand and clients.Effective planning saves time and resources.",
  },
  {
    img: Icon_2,
    title: "Designing",
    desc: "Our designers craft strategies to guide your visitors, and customers within your space. We assess colors, themes, and more for the perfect indoor and outdoor signage.",
  },
  {
    img: Icon_3,
    title: "Permits",
    desc: " Our team navigate city codes, ensuring your signage complies with regulations. We handle approvals, so your brand shines in every area.",
  },
  {
    img: Icon_4,
    title: "Fabrication",
    desc: "Our state-of-the-art facility uses cutting-edge technology to craft high-quality signage for your project.",
  },
  {
    img: Icon_5,
    title: "Installation",
    desc: "Proper installation ensures your signage is set up correctly and safely, allowing your brand to shine.",
  },
];
const data = [
  { img: Outdoor_1, class: "lar", type: ` all` },
  { img: Outdoor_2, class: "lar", type: ` all` },
  { img: Outdoor_3, class: "squ", type: ` all` },
  { img: Outdoor_4, class: "squ", type: ` all` },
  { img: Outdoor_5, class: "squ", type: ` all` },
  { img: Outdoor_6, class: "squ", type: ` all` },
  { img: Outdoor_7, class: "req", type: ` all` },
  { img: Outdoor_8, class: "req", type: ` all` },
];
const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 5000,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 300,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const M_Signages = () => {
  return (
    <div className="M_Signages landing">
      <div className="container">
        {" "}
        <Navbar />{" "}
      </div>
      <Animation />
      <div className="coverIntro">
        {" "}
        <Fade right>
          {" "}
          <img src={ImgIntro} alt="" />{" "}
        </Fade>
      </div>

      <div className="home">
        <div className="container">
          <div className="boxImg hidden-img ">
            {" "}
            <Fade left>
              {" "}
              <img src={ImgSection} alt="" />{" "}
            </Fade>{" "}
          </div>
          <div className="boxs ">
            <Fade right>
              <h2 className="h1  hidden-text">
                {" "}
                Craft Your Vision, Achieve Your Goals{" "}
              </h2>
              <h2 className="h2  hidden-text">
                MRM's End-to-End Custom Signage Solutions, from Concept to
                Installation in the UAE
              </h2>
              <p className="p hidden-text">
                MRM produces high-quality custom signs in the UAE using premium
                materials and state-of-the-art equipment to ensure your signage
                is truly outstanding.
              </p>
            </Fade>
          </div>
        </div>
      </div>

      <Pattern9 />
      <div className="quotation">
        <div className="bgCover">
          {" "}
          <img src={IMG2} alt="" />{" "}
        </div>
        <div className="container">
          <Fade>
            <div className="h2 hidden-text">
              MRM promises excellence in signage installation, blending your
              vision with our expertise
            </div>
            <div className="h3">
              MRM's team of experts specializes in developing custom sign
              designs based on clients' requirements. we take care of every
              project aspect, from the concept and design phase to production
              and installation. MRM is committed to delivering quality service
              and ensuring customer satisfaction. Clients can trust MRM to
              handle everything related to their custom signage installation.
            </div>
          </Fade>
        </div>
      </div>

      <Pattern9 />
      <div className="signages">
        <div className="bgCover">
          {" "}
          <img src={IMG2} alt="" />{" "}
        </div>
        <div className="container">
          <Fade top>
            {" "}
            <div
              className="h1 clip hidden-text"
              style={{ marginBottom: "10px" }}
            >
              Outdoor Signages gallery
            </div>
          </Fade>
        </div>
        <div className="outdoor">
          <div className="header1 header2">
            <Fade top>
              <li className="p active"> LED Signages </li>
              <li className="p"> Building Wrap </li>
              <li className="p"> Lamp Post Signs</li>
              <li className="p"> Unipole Signs </li>
            </Fade>
          </div>
          <Slider_2_Imgs data={data} settings={settings} />
        </div>

        <Pattern9 />
        <div className="indoor">
          <Fade top>
            <div
              className="h1 clip hidden-text"
              style={{ marginBottom: "20px" }}
            >
              Indoor Signages gallery
            </div>{" "}
          </Fade>
          <div className="bgCover">
            {" "}
            <img src={IMG2} alt="" />{" "}
          </div>
          <div className="header1 header2">
            <Fade top>
              <li className="p active"> Health-Safety </li>
              <li className="p"> Menu Boards </li>
              <li className="p"> Reception Signage </li>
              <li className="p"> Office Signs </li>
              <li className="p"> LED Signages </li>
            </Fade>
          </div>
          <Slider_2_Imgs data={data} settings={settings} />
        </div>
      </div>

      <Pattern9 />
      <div className="process2">
        <div className="bgCover">
          {" "}
          <img src={IMG2} alt="" />{" "}
        </div>
        <div className="container">
        <Fade top><div className="h1 hidden-text clip">Signage creation process</div></Fade>
        <Fade top><div className="phead hidden-text">
            {" "}
            Our custom signages captures attention and gives every project an
            elegant and professional finish
          </div></Fade>
          <div className="timeline">
            {process.map((e, index) => (
              <div className="check-point hidden-text" key={index}>
                <Fade>
                <div className="number hidden-text"> 0{index + 1} </div>
                <div className="inner-box">
                  <span className="hidden-img">
                    <img src={e.img} alt="" />
                  </span>
                  <h2 className="h2 clip  hidden-text">{e.title}</h2>
                  <p className="p  hidden-text"> {e.desc}</p>
                </div>
                </Fade>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default M_Signages;

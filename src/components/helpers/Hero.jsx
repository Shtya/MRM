import Navbar1 from '../Navbar'

const Hero = ({H1 , H2 , H3 , Img , nameServices , Imgintro}) => {
  return (
    <>
    <div className="container"> <Navbar1 /> </div>
      <div className="coverIntro" data-aos="zoom-in"  > <img src={Imgintro}  /></div>
    <div className="home">
          <div className="container">
              <div className="boxImg " data-aos="zoom-in-left" data-aos-delay="400"  >  <img   src={Img} alt={nameServices} loading="lazy" /> </div>
              <div className="boxs" data-aos="fade-left" data-aos-delay="600" >
                  <h2 className='h1 '>{H1}</h2>
                  <h2 className='h2 '>{H2}</h2>
                  <p className='p '>{H3}</p>
            </div>
        </div>
      </div>

      </>
  )
}

export default Hero
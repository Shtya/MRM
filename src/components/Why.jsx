import Animation from './helpers/Animation'
import WhyImg from "../assets/Why.jpg"
import IMG2 from "../assets/bg/b3.jpg"

const Why = () => {



  const choose = [
    {idx:"0", animate:"fade-up" , icon : 'fas fa-pencil-ruler font-icon' , title : "We're problem solvers"  , desc:"We conquer all challenges with creativity, determination, and a 'can-do' attitude. We have solutions to your problems. "} ,
    {idx:"1", animate:"fade-up" , icon : 'fas fa-drafting-compass font-icon' , title : "We deliver results, not just talk"  , desc:"Our commitment is to implement effective strategies, never overpromise, work hard, and measure success by our achievements. "} ,
    {idx:"2", animate:"fade-up" , icon : 'fas fa-layer-group font-icon' , title : "We prioritize you"  , desc:"Your success drives us. We're always available to meet your needs, offer guidance, and listen closely to your input.  "} ,
    {idx:"3", animate:"fade-up" , icon : 'fas fa-rocket font-icon' , title : "We focus on your growth"  , desc:" Our solutions are always advanced, results-driven, and up-to-date with the latest technologies and trends. "} ,
  ]
  
  return (

    <section id='Why' className='Why'>
      <Animation />
      <div className="bgCover"  >  <img  src={IMG2} alt="why" loading="lazy" /> </div>
      <div className="container1">
        <div className="h1" data-aos="fade-up" >WHY CHOOSE US</div>
      </div>
      <div className="container">
              <div className="boxs" data-aos="fade-right"    >
                  {choose.map((e,idx)=> (
                    <div className="box" data-aos="fade-right" key={idx} >
                      <div className="group" >
                          <i  className={`${e.icon} hidden-img`}></i>
                          <h3 className='h2' > {e.title}  </h3>
                      </div>
                      <span className={` p`}>{e.desc}</span>
                    </div>
                  ))}
              </div>

            <div className="Img hidden-img"  >
              <img data-aos="fade-left" data-aos-delay="200"  src={WhyImg} alt="Why-chooseus" />
            </div>
      </div>
    </section>
  )
}

export default Why
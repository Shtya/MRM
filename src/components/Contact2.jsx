import {useRef, useState} from 'react'
import MapImg from "../assets/contact-us/map1.jpg"
import emailjs from '@emailjs/browser';


const Contact2 = () => {
  const [value , setvalue] = useState() ;
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // emailjs.sendForm('service_kji00bn', 'template_faumv3m', form.current, 'NuQnsm_o-JAeio3Uv')
    emailjs.sendForm('service_pl60iqr', 'template_03nn5rk', form.current, '3BxbLM5srobXbwT-i')
      .then((result) => {
          console.log(result);
      }, (error) => {
          console.log(error);
      });
      e.target.reset() ;
  };

  let services = [ , "Exhibition & Display Stand" , "Indoor & Outdoor Signages" , "Photography & Videography" , "Web Design & Development" ,"Social Media Marketing" , "Cooperated Gifts" , "Media Buyin" , "Branding" , "SEO" ,]
    return (
    <section className='Contact2' id='Contact2'>
      <div className="container">
          
              <div className="box" data-aos="fade-right" data-aos-delay="200" >
                  <div className="coverMap"> <img className='mapImg' src={MapImg} alt="" loading="lazy" /> </div>
                  <div className="text"> <h2 className='h1 blur' data-aos="fade-right" data-aos-delay="300">Turn your dreams into digital realities </h2> </div>

                  <ul className='contact-list'>
                    <li className="list-item" data-aos="fade-right" data-aos-delay="300"> <a> <i className="fa-solid fa-phone"></i>         </a>    <span className='contact-text place p'>+971561384496</span></li>
                    <li className="list-item" data-aos="fade-right" data-aos-delay="400"> <a>  <i className="fa-solid fa-envelope"></i>     </a>    <span className='contact-text phone p'>info@mrmadvertisingdubai.com</span> </li>
                    <li className="list-item" data-aos="fade-right" data-aos-delay="500"> <a>  <i className="fa-solid fa-location-dot"></i> </a>    <span className='contact-text gmail p'>Business Bay - Dubai</span></li>
                    </ul>
                        <hr />
                    <ul className='social-media-list'>
                      <li > <a  data-aos="fade-up" data-aos-delay="300" className="Iicon">  <i className="fa-brands fa-facebook-f"></i>     </a></li>
                      <li > <a  data-aos="fade-up" data-aos-delay="400" className="Iicon">  <i className="fa-brands fa-instagram"></i> </a></li>
                      <li > <a  data-aos="fade-up" data-aos-delay="500" className="Iicon"> <i className= "fa-brands fa-whatsapp"></i>         </a></li>
                      <li > <a  data-aos="fade-up" data-aos-delay="600" className="Iicon">  <i className="fa-brands fa-linkedin-in"></i> </a></li>
                    </ul>
              </div>

              <div className="box1" data-aos="fade-left" data-aos-delay="300">
              <h1 className='h1' data-aos="fade-right" data-aos-delay="300">WE'RE HERE TO HELP YOU</h1>
              <h2 className='h2' data-aos="fade-right" data-aos-delay="300">Reach Out And Let's Talk</h2>
              <form ref={form} onSubmit={sendEmail}>
                  <input data-aos="fade-left" data-aos-delay="300" name="name" type="text"  placeholder='Your Name' id="" />
                  <input data-aos="fade-left" data-aos-delay="400" name="email" type="Email"  placeholder='Email address' id="" />
                  <input data-aos="fade-left" data-aos-delay="500" name="phone" type="text"  placeholder='Phone' id="" />
                  <select data-aos="fade-left" data-aos-delay="600" name="services" className='input form-select' aria-label=".form-select-lg examplev" value={value} onChange={e=> setvalue(e.target.value)}>
                    <option value="0">Select a service</option>
                    {services.map((e,index)=> <option key={index} value={e} >{e}</option> )}
                  </select>
                  <input data-aos="fade-left" data-aos-delay="700" name="message" placeholder="Write a message" id="" type='text'></input>
                   <button data-aos="fade-left" data-aos-delay="800" className='bt'>Send a message</button>
              </form>
              </div>
          </div>
    </section>


  
  )
}

export default Contact2
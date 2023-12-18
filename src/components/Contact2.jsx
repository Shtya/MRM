import {useRef, useState} from 'react'
import MapImg from "../assets/contact-us/map.jpg"
import { Link } from 'react-router-dom';
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
          
              <div className="box" >
                  <div className="text"> <h2 className='h1 clip blur'>Turn your dreams into digital realities. </h2> </div>

                  <ul className='contact-list'>
                    <li className="list-item"> <a> <i className="fa-solid fa-phone"></i>         </a>    <span className='contact-text place'>+971561384496</span></li>
                    <li className="list-item"> <a>  <i className="fa-solid fa-envelope"></i>     </a>    <span className='contact-text phone'>info@mrmadvertisingdubai.com</span> </li>
                    <li className="list-item"> <a>  <i className="fa-solid fa-location-dot"></i> </a>    <span className='contact-text gmail'>Business Bay - Dubai</span></li>
                    </ul>
                        <hr />
                    <ul className='social-media-list'>
                      <li> <a className="Iicon">  <i className="fa-brands fa-facebook-f"></i>     </a></li>
                      <li> <a className="Iicon">  <i className="fa-brands fa-instagram"></i> </a></li>
                      <li> <a className="Iicon"> <i className= "fa-brands fa-whatsapp"></i>         </a></li>
                      <li> <a className="Iicon">  <i className="fa-brands fa-linkedin-in"></i> </a></li>
                    </ul>
              </div>

              <div className="box1">
              <p className='h1 clip'>Reach Out And Let's Talk</p>
              <form ref={form} onSubmit={sendEmail}>
                  <input name="name" type="text"  placeholder='Your Name' id="" />
                  <input name="email" type="Email"  placeholder='Email address' id="" />
                  <input name="phone" type="text"  placeholder='Phone' id="" />
                  <select name="services" className='input form-select' aria-label=".form-select-lg examplev" value={value} onChange={e=> setvalue(e.target.value)}>
                    <option value="0">Select a service</option>
                    {services.map((e,index)=> <option key={index} value={e} >{e}</option> )}
                  </select>
                  <input name="message" placeholder="Write a message" id="" type='text'></input>
                   <button className='bt'>Send a message</button>
              </form>
              </div>
          </div>
    </section>


  
  )
}

export default Contact2
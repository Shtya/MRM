import {useEffect, useState} from 'react'
import MapImg from "../assets/contact-us/map.jpg"
import { Link } from 'react-router-dom';


const Contact2 = () => {
  const [value , setvalue] = useState() ;

  let services = [ "social media marketing" , "media buyin" , "web design & Development" , "SEO" , "Branding" , "indoor and outdoor signages" , "exhibition display stand" , "photography & videography" , "cooperated gifts" ,]
  return (
    <section className='Contact2' id='Contact2'>
      <div className="container">
          {/* <div className="coverImg"> <img src={MapImg} alt="" /> </div> */}
          
              <div className="box" >
                  <div className="text"> <h2 className='h1 clip blur'>Turn your dreams into digital realities. </h2> </div>

                  <ul className='contact-list'>
                    <li className="list-item"> <a> <i className="fa-solid fa-phone"></i>         </a>    <span className='contact-text place'>+971561384496</span></li>
                    <li className="list-item"> <a>  <i className="fa-solid fa-envelope"></i>     </a>    <span className='contact-text phone'>info@mrmadvertisingdubai.com</span> </li>
                    <li className="list-item"> <a>  <i className="fa-solid fa-location-dot"></i> </a>    <span className='contact-text gmail'>Business Bay - Dubai</span></li>
                  </ul>

                    <ul className='social-media-list'>
                      <li> <a className="Iicon">  <i className="fa-brands fa-facebook-f"></i>     </a></li>
                      <li> <a className="Iicon">  <i className="fa-brands fa-instagram"></i> </a></li>
                      <li> <a className="Iicon"> <i className= "fa-brands fa-whatsapp"></i>         </a></li>
                      <li> <a className="Iicon">  <i className="fa-brands fa-linkedin-in"></i> </a></li>
                    </ul>
              </div>

              <div className="box1">
              <p className='h1 clip'>Reach Out And Let's Talk</p>
              <form action="">
                  <input type="text" name="" placeholder='Your Name' id="" />
                  <input type="Email" name="" placeholder='Email address' id="" />
                  <input type="text" name="" placeholder='Phone' id="" />
                  <select className='input form-select' aria-label=".form-select-lg examplev" value={value} onChange={e=> setvalue(e.target.value)}>
                    <option value="0">Select a service</option>
                    {services.map((e,index)=> <option key={index} value={e} >{e}</option> )}
                  </select>
                  <input placeholder="Write a message" id="" type='text'></input>
                   <button className='bt'>Send a message</button>
              </form>
              </div>
          </div>
    </section>


  
  )
}

export default Contact2
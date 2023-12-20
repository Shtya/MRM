import {useEffect, useState  ,useRef} from 'react'
import Animation from './helpers/Animation';
import FormImg from "../assets/Form.jpg"
import IMG1 from "../assets/bg/b1.jpg"
import emailjs from '@emailjs/browser';
import Fade from 'react-reveal/Fade';

const Contact = ({title , desc , onHere}) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pl60iqr', 'template_03nn5rk', form.current, '3BxbLM5srobXbwT-i')
      .then((result) => {
          console.log(result);
      }, (error) => {
          console.log(error);
      });
      e.target.reset() ;
  };



  const [value , setvalue] = useState() ;
  let services = [ , "Exhibition & Display Stand" , "Indoor & Outdoor Signages" , "Photography & Videography" , "Web Design & Development" ,"Social Media Marketing" , "Cooperated Gifts" , "Media Buyin" , "Branding" , "SEO" ,]
  
  return (
    <section className='Contact' id='Contact'>
      <Animation />
      <div className="bgCover"  >  <img  src={IMG1} alt="" /> </div>
      <Fade bottom distance="20%" duration={1000} >
     <div className="container1">  <h2 className='h2'>{desc }</h2> </div>
      <div className="container">

      <div className="box box-img hidden-img">
          <img  src={FormImg} alt="" />
        </div>

        <div   className="box" >
          <h2 className='h1 clip hidden-text'>{title || "We're here to help you"}</h2> 
          <p className='h2'>{desc ? "" : "Reach Out and Let's Talk"} </p>

          <form ref={form} onSubmit={sendEmail}>
              <input required type="text" name="name" placeholder='Your Name' id="" />
              <input required type="Email" name="email" placeholder='Email address' id="" />
              <input required type="text" name="phone" placeholder='Phone' id="" />
              <select name='services' className='input form-select' aria-label=".form-select-lg examplev" value={value} onChange={e=> setvalue(e.target.value)}>
                <option value="0">Select a service</option>
                {services.map((e,index)=> <option key={index} value={e} >{e}</option> )}
              </select>
            <textarea name="message" placeholder="Write a message" id="" cols="30" rows="10"></textarea>

            <button className='bt'>Send a message</button>
          </form>
        </div>

      </div>
      </Fade>
    </section>
  )
}

export default Contact
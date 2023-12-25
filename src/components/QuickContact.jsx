import React , {useRef} from 'react'
import  { Pattern8 } from './patterns/Pattern1'
import IMG1 from "../assets/bg/b1.jpg"
import IMG2 from "../assets/bg/b2.jpg"
import IMG3 from "../assets/bg/b3.jpg"
import emailjs from '@emailjs/browser';


const QuickContact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_pl60iqr', 'template_vik1cfr', form.current, '3BxbLM5srobXbwT-i')
      .then((result) => {
          console.log(result);
      }, (error) => {
          console.log(error);
      });
      e.target.reset() ;
  };

  
  return (
    <div className='QuickContact'>
            <div className="bgCover" style={{zIndex:"0"}}  >  <img  src={IMG1} alt="landing" loading="lazy" /> </div>

      <Pattern8 />
      <div className="container">
      <div className="h1" data-aos="fade-up" >contact for your consultation </div>
      <form ref={form} onSubmit={sendEmail}>
        <input data-aos="zoom-in" type="text"  name="name" placeholder='Name' />
        <input data-aos="zoom-in" type="text"  name="phone" placeholder='Phone' />
        <input data-aos="zoom-in" type="email" name="email"  placeholder='Email' />
        <input data-aos="zoom-in" className='bt' type="submit" value="Submit" />
        
        <button className='btn3' data-aos="zoom-in"  type='submit'> <i className="bt2 fa-solid fa-paper-plane"></i> </button>
      </form>
      </div>
    </div>
  )
}

export default QuickContact
import React , {useRef} from 'react'
import  { Pattern8 } from './patterns/Pattern1'
import IMG1 from "../assets/bg/b1.jpg"
import IMG2 from "../assets/bg/bg3.jpg"
import IMG3 from "../assets/bg/bg5.jpg"
import emailjs from '@emailjs/browser';
import { Fade, Zoom } from 'react-reveal'


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
            <div className="bgCover" style={{zIndex:"0"}}  > <Zoom>  <img  src={IMG1} alt="" /> </Zoom> </div>

      <Pattern8 />
      <div className="container">
      <Fade top> <div className="h1">contact for your consultation </div></Fade>
      <form ref={form} onSubmit={sendEmail}>
        <Zoom>
        <input type="text"  name="name" placeholder='Name' />
        <input type="text"  name="phone" placeholder='Phone' />
        <input type="email" name="email"  placeholder='Email' />
        <input className='bt' type="submit" value="Submit" />
        <button className='btn3' type='submit'> <i class="bt2 fa-solid fa-paper-plane"></i> </button>
        </Zoom>
      </form>
      </div>
    </div>
  )
}

export default QuickContact
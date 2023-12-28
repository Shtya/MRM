import { useState  ,useRef} from 'react'
import Animation from './helpers/Animation';
import FormImg from "../assets/Form.jpg"
import IMG1 from "../assets/bg/b1.jpg"
import emailjs from '@emailjs/browser';
import { Pattern9 } from './patterns/Pattern1';

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
    <>
      <Pattern9 />
      <Animation />
    <section className='Contact' id='Contact'>
      <div className="bgCover"  >  <img  src={IMG1} alt="contact" loading="lazy" /> </div>
      {/* <div className="container1">  <div className='h2'>{desc }</div> </div> */}
      
      <div className="container">
      <div className="box box-img " data-aos="fade-right"  > <img  src={FormImg} alt="Smiling man with laptop on geometric patterned background with text 'We're Here to Help You”" loading="lazy" /> </div>
        <div   className="box" data-aos="fade-left" data-aos-delay="50"  >
          <div data-aos="fade-left" data-aos-delay="70"  className='h1 '>{title || "We're here to help you"}</div> 
          <p data-aos="fade-left" data-aos-delay="90"  className='h2'>{desc ? desc : "Reach Out and Let's Talk"} </p>

          <form ref={form} onSubmit={sendEmail}>
              <input data-aos="fade-left" data-aos-delay="110"  required type="text" name="name" placeholder='Your Name' id="" />
              <input data-aos="fade-left" data-aos-delay="130"  required type="Email" name="email" placeholder='Email address' id="" />
              <input data-aos="fade-left" data-aos-delay="150"  required type="text" name="phone" placeholder='Phone' id="" />
              <select data-aos="fade-left" data-aos-delay="180"  name='services' className='input form-select' aria-label=".form-select-lg examplev" value={value} onChange={e=> setvalue(e.target.value)}>
                <option value="0">Select a service</option>
                {services.map((e,index)=> <option key={index} value={e} >{e}</option> )}
              </select>
            <textarea data-aos="fade-left" data-aos-delay="200"  name="message" placeholder="Write a message" id="" cols="30" rows="10"></textarea>

            <button data-aos="fade-left" data-aos-delay="220"  className='bt'>Send a message</button>
          </form>
        </div>

      </div>
    </section>
    </>
  )
}

export default Contact
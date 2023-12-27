
import { Link } from 'react-router-dom'

const Social_media = ({Img , title , desc , data}) => {
  return (
    <div className="social-media">
          <div className="bgCover"> <img  src={Img} alt="web design services" loading="lazy" /> </div>
        <div className="container">
            <h2 data-aos="fade-up" className='h1 '>{title}</h2>
            <div data-aos="fade-up" className="phead ">{desc}</div> 
            <div className="boxs">
            { data.map((e,index)=> ( 
            <Link to={e?.path} key={index} className={`cover1 `} >
              <div className="box">
                <div className="IcomCover">  <img src={e.img} alt="social" loading="lazy" /> </div>
                <h3 className='h2 '>{e.title}</h3>
                <p className='p '>{e.desc}</p>
              </div>
            </Link> ))}
            </div>
        </div>
        </div>
  )
}

export default Social_media
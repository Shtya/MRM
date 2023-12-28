import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Plateforms = ({Img , title , data , nameServices ,}) => {
  const navigate = useNavigate()
  return (
    <div className="platforms">
         <div className="bgCover"  >  <img  src={Img} alt={nameServices} loading="lazy" /> </div>
          <div className="container">
              <h3 className='h1'data-aos="fade-up">{title}</h3>
              <div className="boxs" data-aos="fade-up">
                  {
                    data.map((e,index)=> (
                      <Link key={index} to={e.path}  className={`box box-${index+1}`}>
                        <div className="coverImg"> <img src={e.img} alt="platform" loading="lazy" /></div>
                        <div className="inner-box">
                            <span className="one"/>
                            <span className="two"/>
                            <h3 className='h2 '> {e.title} </h3>
                            <p className='p '>{e.desc}</p>
                        </div>
                      </Link>
                    ))
                  }
              </div>
          </div>
      </div>
  )
}

export default Plateforms
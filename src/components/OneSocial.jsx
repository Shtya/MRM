import React from 'react'
import { Link } from 'react-router-dom'
import { Fade } from "react-awesome-reveal";

const OneSocial = ({Img , title ,desc , classn , path}) => {
  return (
    <Link to={path} className={`cover1 `}><div className="box">
      <Fade>
        <div className="IcomCover ">  <img src={Img} alt="" /> </div>
        <h2 className='h2 '>{title}</h2>
        <p className='p '>{desc}</p>
        </Fade>
    </div></Link>
  )
}

export default OneSocial
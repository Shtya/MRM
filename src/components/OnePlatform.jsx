import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


const OnePlatform = ({title , paragraph , img , classn , path , trueBtn}) => {
  const navigate = useNavigate()

  return (
    <Link to={path}  className={`box ${classn}`}>
        <div className="coverImg"> <img src={img} alt="" /></div>
        <div className="inner-box">
            <span className="one"/>
            <span className="two"/>
            <h2 className='h2 '> {title} </h2>
            <p className='p '>{paragraph}</p>
            {trueBtn &&<button className='bt' onClick={_=> navigate(path)}> see more</button>}
        </div>
      </Link>
  )
}

export default OnePlatform
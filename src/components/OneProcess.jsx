import React from 'react'

const OneProcess = ({title , paragraph , img , classn , num}) => {
  return (
    <div className={`one-process ${classn} `} data-aos="fade-right"  >
      <div className="coverImg "> <img src={img} alt="" /> </div>
      <span></span>
      <div className="num">{num}</div>
      <div className="inner-box" >
        <h2 className="h2 clip " data-aos="fade-right">{title} </h2>
        <p className="p " data-aos="fade-right">{paragraph}</p>
      </div>
    </div>
  )
}

export default OneProcess
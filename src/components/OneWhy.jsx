import React from 'react'

const OneWhy = ({img , title , desc , classn , alt}) => {
  return (
    <div className={`one-why ${classn}`} data-aos="fade-up">
      <div className="coverImg" data-aos="fade-up"> <img src={img} alt={alt} loading="lazy" /> </div>
      <div className="inner-box">
        <h3 className="p ">{desc}</h3>
      </div>
  </div>
  )
}

export default OneWhy
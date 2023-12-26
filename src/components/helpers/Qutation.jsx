import React, { memo } from 'react'
import { Pattern9 } from '../patterns/Pattern1'

const Qutation = memo(({Img , title1 , title2 , desc1 , desc2}) => {
  return (
    <>
    <Pattern9 />
    <div className="quotation">
      <div className="bgCover"> <img  src={Img} alt="web design services" loading="lazy" /> </div>
            <div className="container" >
            <p className='h2 'data-aos="fade-up" >{title1}</p>
            <p className='h3 ' data-aos="fade-up" data-aos-delay="200">{desc1}</p>
            </div>
        </div>
    </>
  )
})

export default Qutation
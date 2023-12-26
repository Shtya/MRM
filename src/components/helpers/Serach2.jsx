import React, { memo } from 'react'

const Serach2 = memo(({Img , Imgsection ,title , data ,}) => {
  return (
    <div className="searching2">
        <div className="bgCover"   >  <img  src={Img} alt="photography services" loading="lazy" /> </div>
            <div className="container">
              <div className="coverImg " data-aos="zoom-in-left"> <img src={Imgsection} alt="photography services" loading="lazy" /> </div>

              <div className="boxs">
              <div className="h1" data-aos="zoom-in-right">{title}</div>
              {data.map((e,index)=>(
                <div key={index} data-aos="zoom-in-right">
                  <h3 className='h2 '>{e.title}</h3>
                  <h2 className='p '>{e.desc}</h2>
                </div>
                  ))}
              </div>
          </div>
      </div>
  )
})

export default Serach2
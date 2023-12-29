import React, { memo, useState } from 'react'

const ExhibitionGallery = memo(({ classn ,Img , nameServices , data , title  }) => {
  const [ImgView , setImgView] = useState()
  return (
    <div className={classn}>
        <div className="bgCover"  >   <img  src={Img} alt={nameServices} loading="lazy" />  </div>
        <div className="container"> <div className="h1" style={{marginBottom:"30px"}}>{title}</div></div>
        <div className="container">
          <div className="boxs">
            {data.map((e,index)=> ( <div key={index} data-aos="zoom-in-up"  className="coverImg"> <i onClick={_=> setImgView(e.img)} className="fa-solid fa-compress"></i> <img src={e.img} alt="slider" /> </div> ))}
            {ImgView && <div className="show-img"> 
              <img src={ImgView} alt={nameServices} loading="lazy" data-aos="zoom-in-up" /> 
              <i onClick={_=>setImgView("")} className="fa-regular fa-circle-xmark"></i>
            </div>}
          </div>
        </div>
      </div>
  )
})

export default ExhibitionGallery
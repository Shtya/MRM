import React from 'react'

const Impact = ({ classn ,Img , data , title , desc , nameServices ,}) => {
  return (
    <div className={classn}>
        <div className="bgCover"  >   <img  src={Img} alt={nameServices} loading="lazy" />  </div>
            <div className="container">
            <div className="container"><div className="h1" data-aos="fade-up">{title}</div></div>
            {desc && <div className="container"><div className="phead" data-aos="fade-up">{desc}</div></div>}
                <div className="boxs">
                  {
                    data.map((e,index)=> (
                      <div className="box"  key={index} data-aos="zoom-in-up">
                          <div className="coverImg hidden-img"> <img src={e.img} alt={nameServices} loading="lazy" /> </div>
                          <div className="text" >
                              <h2 className="h2 clip ">{e.title} </h2>
                              <div className="p ">{e.desc} </div>
                          </div>
                      </div>
                    ))
                  }
                </div>
            </div>
        </div>
  )
}

export default Impact
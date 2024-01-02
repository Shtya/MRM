import React from 'react'

const Box_4 = ({Img , data}) => {
  return (
    <div className="box-style-5">
    <div className="bgCover"  >  <img  src={Img} alt="twitter-page"  /> </div>
    <div className="container">
      {data.map((e,index)=> (
      <div className='box' key={index} data-aos="zoom-in"  >
          <div className="cover"> <img src={e.icon}  alt="twitter-page"  /> </div>
          <div className="text">
            <h3 className="h2" >{e.title}</h3>
            <p className="p" >{e.desc}</p>
          </div>
      </div>
      ))}
    </div>
  </div>
  )
}

export default Box_4
import { memo } from "react"


const PHOTOgraphy = memo(({classn ,Img , nameServices , title , data}) => {
  return (
    <div className={classn}>
      <div className="bgCover"  >  <img  src={Img} alt={nameServices} loading="lazy" /> </div>
        <h1 className="h1" data-aos="zoom-in-up">{title}</h1> 
        <div className="container">
          {
            data.map((e,index)=> (
              <div className="box" key={index} data-aos="fade-up">
                <div className="innerbox">
                <div className="coverImg "> <img src={e.img} alt={nameServices} loading="lazy" />  </div>
                <div className="text">
                  <h2 className="h2 "> {e.title} </h2>
                  <h3 className="p ">{e.desc} </h3>
                </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
  )
})

export default PHOTOgraphy
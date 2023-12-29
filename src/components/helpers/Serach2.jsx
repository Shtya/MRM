import { memo } from "react"
import { Animate } from "../../App"

const Serach2 = memo(({Img , Imgsection ,title , data ,}) => {
  return (
    <div className="searching2">
        <div className="bgCover"   >  <img  src={Img} alt="photography services" loading="lazy" /> </div>
            <div className="container">
              <div className="coverImg " data-aos={Animate}> <img src={Imgsection} alt="photography services" loading="lazy" /> </div>

              <div className="boxs">
              <div className="h1" data-aos={Animate}>{title}</div>
              {data.map((e,index)=>(
                <div key={index} data-aos={Animate}>
                  <h3 className='h2 '>{e.title}</h3>
                  <div className='p '>{e.desc}</div>
                </div>
                  ))}
              </div>
          </div>
      </div>
  )
})

export default Serach2
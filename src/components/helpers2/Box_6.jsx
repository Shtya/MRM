import React from 'react'

const Box_6 = ({title , desc , data , Img}) => {
  return (
    <section className='box_6'>
      <div className="bgCover"  >  <img  src={Img} alt="tiktok-page"  /> </div>
      <div className="container">
        <div className="h1">{title}</div>
        <div className="phead">{desc}</div>
      </div>
        {
          data.map((e,index)=>(
            <div class="row">
              <div class="col-md-4 col-sm-6 col-xs-12">
                <div class="card">
                  <div class="cover item-a">
                    <h1>{e.title}</h1>
                    <div class="card-back">
                      <div className='p'>{e.desc}</div>
                    </div>
                  </div>
                </div>
              </div>
      </div>
          ))
        }
        
    </section>
  )
}

export default Box_6
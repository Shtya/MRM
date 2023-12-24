import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";




const Slider_3_Img =  ({ settings , data }) => {
  const len = Math.ceil(data?.length/2)
  return (
    <div className="Slider_2_Imgs2">
          <Slider {...settings} className='container' >

            <div className="box">
               <div className="box-shape box-0"> <span/> <img src={data[0]} alt={data[1]} />   </div> 
               <div className="box-shape box-1"> <span/> <img src={data[1]} alt={data[2]} />   </div> 
               <div className="box-shape box-2"> <span/> <img src={data[2]} alt={data[3]} />   </div> 
            </div>

            <div className="box">
               <div className="box-shape box-0"> <span/> <img src={data[3]} alt={data[4]} />   </div> 
               <div className="box-shape box-1"> <span/> <img src={data[4]} alt={data[5]} />   </div> 
               <div className="box-shape box-2"> <span/> <img src={data[5]} alt={data[6]} />   </div> 
            </div>

            <div className="box">
               <div className="box-shape box-0"> <span/> <img src={data[6]} alt={data[7]} />   </div> 
               <div className="box-shape box-1"> <span/> <img src={data[7]} alt={data[8]} />   </div> 
               <div className="box-shape box-2"> <span/> <img src={data[8]} alt={data[9]} />   </div> 
            </div>

            <div className="box">
               <div className="box-shape box-0"> <span/> <img src={data[9]} alt={data[10]} />   </div> 
               <div className="box-shape box-1"> <span/> <img src={data[10]} alt={data[11]} />   </div> 
               <div className="box-shape box-2"> <span/> <img src={data[11]} alt={data[12]} />   </div> 
            </div>

            <div className="box">
               <div className="box-shape box-0"> <span/> <img src={data[12]} alt={data[13]} />   </div> 
               <div className="box-shape box-1"> <span/> <img src={data[13]} alt={data[14]} />   </div> 
               <div className="box-shape box-2"> <span/> <img src={data[14]} alt={data[15]} />   </div> 
            </div>

            <div className="box">
               <div className="box-shape box-0"> <span/> <img src={data[15]} alt={data[16]} />   </div> 
               <div className="box-shape box-1"> <span/> <img src={data[16]} alt={data[17]} />   </div> 
               <div className="box-shape box-2"> <span/> <img src={data[17]} alt={data[18]} />   </div> 
            </div>

            <div className="box">
               <div className="box-shape box-0"> <span/> <img src={data[18]} alt={data[19]} />   </div> 
               <div className="box-shape box-1"> <span/> <img src={data[19]} alt={data[20]} />   </div> 
               <div className="box-shape box-2"> <span/> <img src={data[20]} alt={data[21]} />   </div> 
            </div>

            <div className="box">
               <div className="box-shape box-0"> <span/> <img src={data[21]} alt={data[22]} />   </div> 
               <div className="box-shape box-1"> <span/> <img src={data[22]} alt={data[23]} />   </div> 
               <div className="box-shape box-2"> <span/> <img src={data[23]} alt={data[24]} />   </div> 
            </div>

            <div className="box">
               <div className="box-shape box-0"> <span/> <img src={data[24]} alt={data[25]} />   </div> 
               <div className="box-shape box-1"> <span/> <img src={data[25]} alt={data[26]} />   </div> 
               <div className="box-shape box-2"> <span/> <img src={data[26]} alt={data[27]} />   </div> 
            </div>

            <div className="box">
               <div className="box-shape box-0"> <span/> <img src={data[27]} alt={data[28]} />   </div> 
               <div className="box-shape box-1"> <span/> <img src={data[28]} alt={data[29]} />   </div> 
               <div className="box-shape box-2"> <span/> <img src={data[29]} alt={data[30]} />   </div> 
            </div>

            <div className="box">
               <div className="box-shape box-0"> <span/> <img src={data[30]} alt={data[31]} />   </div> 
               <div className="box-shape box-1"> <span/> <img src={data[31]} alt={data[32]} />   </div> 
               <div className="box-shape box-2"> <span/> <img src={data[32]} alt={data[0]} />   </div> 
            </div>

          </Slider>
        </div>
  )

  return (
    <div className="Slider_3_Img">
          {/* <Slider {...settings} className='container' >
          <div className="coverImg"> {data?.slice(0 , 2).map((e,index) => ( <img key={index} src={e} alt={data[34]} /> ))}</div>
            <div className="coverImg"> {data?.slice(2 , 5).map((e,index) => ( <img key={index} src={e} alt={data[35]} /> ))}</div>
            <div className="coverImg"> {data?.slice(5 , 9).map((e,index) => ( <img key={index} src={e} alt={data[36]} /> ))}</div>
            <div className="coverImg"> {data?.slice(9 , 13).map((e,index) => ( <img key={index} src={e} alt={data[37]} /> ))}</div>
            <div className="coverImg"> {data?.slice(13 , 16).map((e,index) => ( <img key={index} src={e} alt={data[38]} /> ))}</div>
            <div className="coverImg"> {data?.slice(16 , 18).map((e,index) => ( <img key={index} src={e} alt={data[39]} /> ))}</div>
            <div className="coverImg"> {data?.slice(19 , 21).map((e,index) => ( <img key={index} src={e} alt={data[40]} /> ))}</div>
            <div className="coverImg"> {data?.slice(21 , 24).map((e,index) => ( <img key={index} src={e} alt={data[41]} /> ))}</div>
            <div className="coverImg"> {data?.slice(24 , 28).map((e,index) => ( <img key={index} src={e} alt={data[42]} /> ))}</div>
            <div className="coverImg"> {data?.slice(28 , 32).map((e,index) => ( <img key={index} src={e} alt={data[43]} /> ))}</div>
          </Slider> */}
        </div>
  )
}

export default Slider_3_Img
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
               <div className="box-shape box-0"> <span/> <img src={data[0]} alt="" />   </div> 
               <div className="box-shape box-1"> <span/> <img src={data[1]} alt="" />   </div> 
               <div className="box-shape box-2"> <span/> <img src={data[2]} alt="" />   </div> 
            </div>

            <div className="box">
               <div className="box-shape box-0"> <span/> <img src={data[3]} alt="" />   </div> 
               <div className="box-shape box-1"> <span/> <img src={data[4]} alt="" />   </div> 
               <div className="box-shape box-2"> <span/> <img src={data[5]} alt="" />   </div> 
            </div>

            <div className="box">
               <div className="box-shape box-0"> <span/> <img src={data[6]} alt="" />   </div> 
               <div className="box-shape box-1"> <span/> <img src={data[7]} alt="" />   </div> 
               <div className="box-shape box-2"> <span/> <img src={data[8]} alt="" />   </div> 
            </div>

            <div className="box">
               <div className="box-shape box-0"> <span/> <img src={data[9]} alt="" />   </div> 
               <div className="box-shape box-1"> <span/> <img src={data[10]} alt="" />   </div> 
               <div className="box-shape box-2"> <span/> <img src={data[11]} alt="" />   </div> 
            </div>

            <div className="box">
               <div className="box-shape box-0"> <span/> <img src={data[12]} alt="" />   </div> 
               <div className="box-shape box-1"> <span/> <img src={data[13]} alt="" />   </div> 
               <div className="box-shape box-2"> <span/> <img src={data[14]} alt="" />   </div> 
            </div>

            <div className="box">
               <div className="box-shape box-0"> <span/> <img src={data[15]} alt="" />   </div> 
               <div className="box-shape box-1"> <span/> <img src={data[16]} alt="" />   </div> 
               <div className="box-shape box-2"> <span/> <img src={data[17]} alt="" />   </div> 
            </div>

            <div className="box">
               <div className="box-shape box-0"> <span/> <img src={data[18]} alt="" />   </div> 
               <div className="box-shape box-1"> <span/> <img src={data[19]} alt="" />   </div> 
               <div className="box-shape box-2"> <span/> <img src={data[20]} alt="" />   </div> 
            </div>

            <div className="box">
               <div className="box-shape box-0"> <span/> <img src={data[21]} alt="" />   </div> 
               <div className="box-shape box-1"> <span/> <img src={data[22]} alt="" />   </div> 
               <div className="box-shape box-2"> <span/> <img src={data[23]} alt="" />   </div> 
            </div>

            <div className="box">
               <div className="box-shape box-0"> <span/> <img src={data[24]} alt="" />   </div> 
               <div className="box-shape box-1"> <span/> <img src={data[25]} alt="" />   </div> 
               <div className="box-shape box-2"> <span/> <img src={data[26]} alt="" />   </div> 
            </div>

            <div className="box">
               <div className="box-shape box-0"> <span/> <img src={data[27]} alt="" />   </div> 
               <div className="box-shape box-1"> <span/> <img src={data[28]} alt="" />   </div> 
               <div className="box-shape box-2"> <span/> <img src={data[29]} alt="" />   </div> 
            </div>

            <div className="box">
               <div className="box-shape box-0"> <span/> <img src={data[30]} alt="" />   </div> 
               <div className="box-shape box-1"> <span/> <img src={data[31]} alt="" />   </div> 
               <div className="box-shape box-2"> <span/> <img src={data[32]} alt="" />   </div> 
            </div>

          </Slider>
        </div>
  )

  return (
    <div className="Slider_3_Img">
          {/* <Slider {...settings} className='container' >
          <div className="coverImg"> {data?.slice(0 , 2).map((e,index) => ( <img key={index} src={e} alt="" /> ))}</div>
            <div className="coverImg"> {data?.slice(2 , 5).map((e,index) => ( <img key={index} src={e} alt="" /> ))}</div>
            <div className="coverImg"> {data?.slice(5 , 9).map((e,index) => ( <img key={index} src={e} alt="" /> ))}</div>
            <div className="coverImg"> {data?.slice(9 , 13).map((e,index) => ( <img key={index} src={e} alt="" /> ))}</div>
            <div className="coverImg"> {data?.slice(13 , 16).map((e,index) => ( <img key={index} src={e} alt="" /> ))}</div>
            <div className="coverImg"> {data?.slice(16 , 18).map((e,index) => ( <img key={index} src={e} alt="" /> ))}</div>
            <div className="coverImg"> {data?.slice(19 , 21).map((e,index) => ( <img key={index} src={e} alt="" /> ))}</div>
            <div className="coverImg"> {data?.slice(21 , 24).map((e,index) => ( <img key={index} src={e} alt="" /> ))}</div>
            <div className="coverImg"> {data?.slice(24 , 28).map((e,index) => ( <img key={index} src={e} alt="" /> ))}</div>
            <div className="coverImg"> {data?.slice(28 , 32).map((e,index) => ( <img key={index} src={e} alt="" /> ))}</div>
          </Slider> */}
        </div>
  )
}

export default Slider_3_Img
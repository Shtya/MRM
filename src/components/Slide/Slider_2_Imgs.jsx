import React, { useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { AnimatePresence  , motion} from 'framer-motion';


const Slider_2_Imgs = ({data , settings }) => {
  const [show , setshow] = useState(true)
  const style={
    position: "relative",
    width: "200px" ,
    margin: "0 auto 30px"
  }
  const len = Math.ceil(data?.length/2)
  return (
    <motion.div className="Slider_2_Imgs" layout>
      
        <Slider {...settings} className='container' >

          {Array(len).fill(1).map((e,index)=>(
            <motion.div layout initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}  transition={{duration:0.5}}  className="box" key={index} > 
              <div className="cover"> <img src={data[index]?.img} /> </div>
              <div className="cover"> {data[index + len]?.img && <img src={data[index + len]?.img} />} </div>
            </motion.div>
            ))}

        </Slider>
        </motion.div>
  )
}

export default Slider_2_Imgs
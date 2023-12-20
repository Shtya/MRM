import React, { useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { AnimatePresence  , motion} from 'framer-motion';


const Slider_2_Imgs = ({data , settings }) => {
  console.log(data)
  const len = Math.ceil(data?.length/2)
  return (
    <motion.div className="Slider_2_Imgs" >
      <AnimatePresence >
        <Slider {...settings} className='container' >
          {/* {Array(len).fill(1).map((e,index)=>(
            <motion.div  initial={{opacity:0}}  animate={{opacity:1}} exit={{ opacity: 0, }} transition={{duration:1}}   className="box" key={index} > 
              <div  className="cover"> <img  src={data[index]?.img} /> </div>
              <div className="cover"> {data[index + len]?.img && <img src={data[index + len]?.img} />} </div>
            </motion.div>
            ))} */}
          {data.map((e,index)=>(
            <motion.div  initial={{opacity:0}}  animate={{opacity:1}} exit={{ opacity: 0, }} transition={{duration:1}}   className="box" key={index} > 
              <motion.div  initial={{opacity:0}}  animate={{opacity:1}} exit={{ opacity: 0, }}transition={{duration:1}}  className="cover"> <img  src={e.img} /> </motion.div>
            </motion.div>
            ))}

        </Slider>
        </AnimatePresence>
        </motion.div>
  )
}

export default Slider_2_Imgs
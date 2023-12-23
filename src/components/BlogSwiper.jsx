import {useState , useRef , useEffect} from "react"
import {motion} from "framer-motion"
import img1 from "../assets/clients/  (1).png"
import img2 from "../assets/clients/  (2).png"
import img3 from "../assets/clients/  (3).png"
import img4 from "../assets/clients/  (4).png"
import img5 from "../assets/clients/  (5).png"
import img6 from "../assets/clients/  (6).png"
import img7 from "../assets/clients/  (7).png"
import img8 from "../assets/clients/  (8).png"
import img9 from "../assets/clients/  (9).png"
import img10 from "../assets/clients/  (10).png"
import img11 from "../assets/clients/  (11).png"
import img12 from "../assets/clients/  (12).png"
import img13 from "../assets/clients/  (13).png"
import img14 from "../assets/clients/  (14).png"



function BlogSwiper() {
  const [width , setwidth] = useState(0)
  const carouselRef = useRef()
  useEffect(_=> setwidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth) ,[])

  const imgs = [img1 , img2 , img3 , img4 , img5 ,img6 , img7]

  
  return (
    <div className="BlogSwiper">
      <motion.div className="carousel" ref={carouselRef} >
        <motion.div drag="x" dragConstraints={{right:0 ,left:-width }}  className="inner-carousel">
          {
            imgs?.map((e,index)=> (
              <motion.div key={index} className="CoverImg" whileTap={{ cursor :"grabbing"}}>
                <img src={e}  />
              </motion.div>
            ))
          }
        </motion.div>
        <motion.div drag="x" dragConstraints={{right:0 ,left:-width }}  className="inner-carousel">
          {
            imgs?.map((e,index)=> (
              <motion.div key={index} className="CoverImg" whileTap={{ cursor :"grabbing"}}>
                <img src={e}  />
              </motion.div>
            ))
          }
        </motion.div>
      </motion.div>
    </div>
  );
}

export default BlogSwiper;

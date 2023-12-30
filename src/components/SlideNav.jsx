import React, { memo, useEffect, useState } from 'react'
import { Social_Media } from '../App'
import { useLocation } from 'react-router-dom'

const SlideNav = memo(({share , whats}) => {
  const [height , setheight] = useState(3500)
  const {pathname } = useLocation() ;

  // UP
  const [top , settop] = useState(false)
  useEffect(_=>{
    if(pathname == "/") { setheight(3500) }
    else {setheight(500)}

    const handelScroll =  _=> window.scrollY > height ? settop(true) : settop(false)
    window.addEventListener("scroll" , handelScroll)
    return _=> window.removeEventListener("scroll" , handelScroll)} ,[pathname])

  const handleScroll = ()=> window.scrollTo(0 , 0)

  return (
    <div className='slidenav' style={{display : "flex"}}>
      <a  style={{display:"flex" }} target='_black' href={Social_Media[3]} className='active'> <i  className={`fa-brands fa-whatsapp whatsapp ${top ? "show-btn":""}`}></i></a>
      {/* {
        pathname.split("/").map(e=> e == "/blog")  ? <a> <i  className={`fa-solid fa-share-nodes floatIcon `}></i> </a>  : ""
      } */}
      <a  href='#' style={{display:`${top ? "flex" : "none"}`}}  > <i onClick={handleScroll} className={`fa-solid fa-chevron-up floatIcon ${top ? "show-btn":""}`}></i> </a>
    </div>
  )
})

export default SlideNav
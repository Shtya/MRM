import React from 'react'
import "../patterns/pattern.css"

export const Divider = ({classn}) => {
  return(
    <div className={`Pattern9 ${classn}`}>
    <span></span>
    <span> <li className='one'/>   <li className='two'/>   <li className='three'/>  </span>
    <span></span>
  </div>
    )
}

export const Pattern9 = ({classn})=>{
  return (
    <div className={`Pattern9 ${classn}`}>
      <span></span>
      <span> <li className='one'/>   <li className='two'/>   <li className='three'/>  </span>
      <span></span>
    </div>
  )
  }

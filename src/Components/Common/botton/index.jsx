import React from 'react'
import "./styles.css"
function Button({text ,onClick,outlined}) {
  return (
    <div className={outlined?'outline':'btn'} onClick={()=>onClick()}>
     {text} 
    </div>
  )
}

export default Button

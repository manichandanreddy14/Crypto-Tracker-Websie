import React, { useState } from 'react'
import "./styles.css"

function CoinInfo({heading,desc}) {
  const shortDesc = desc.slice(0,350)+"<p style='color:var(--grey)'>   Read more...</p>";
  const londDesc=desc +"<p style='color:var(--grey)'>   Read less...</p>";
  const [flag,setFlag]=useState(false)
  return (
    <div className='gray-wrapper'>
      <h2 className='coin-info'>{heading}</h2>
      {
        desc.length>350 ? (<p onClick={()=>setFlag(!flag)} 
      className='coin-desc'
       dangerouslySetInnerHTML={{__html: !flag ?shortDesc:londDesc }}/>):
       (<p  dangerouslySetInnerHTML={{__html: !flag ?shortDesc:londDesc }}/>)
      }
      
    </div>
  )
}

export default CoinInfo;

import React from 'react'
import "./styles.css"
import Button from '../../Common/botton'
import iphone from '../../../assets/iphone.png'
import gradient from '../../../assets/gradient.png'
import { delay, motion } from 'framer-motion'
function Main() {
  return (
    <div className='flex-info'>
      <div className='left-coponents'>
        <motion.h1 className='track-crypto-heading'
        initial={{opacity:0 ,y:50}} 
        animate={{opacity:1 ,y:0}} 
        transition={{duration:0.5}}>
            Track Crypto</motion.h1>
        <motion.h1 className='real-time-heading'
        initial={{opacity:0 ,y:50}} 
        animate={{opacity:1 ,y:0}} 
        transition={{duration:1}}>Real Time</motion.h1>
        <motion.p className='info-text' 
        initial={{opacity:0 ,y:50}} 
        animate={{opacity:1 ,y:0}} 
        transition={{duration:1.5}}>Track Crypto through a public api in real time. Visit the dasboard to do so!</motion.p>
      <motion.div className='btn-flex'
      initial={{opacity:0 ,x:70}} 
      animate={{opacity:1 ,x:0}} 
      transition={{duration:1, delay:1} }>
        <Button text={"Dashboard"}/>
        <Button text={'Share'} outlined={true}/>
      </motion.div>
      </div>
      <div className='phone-container'>
        <motion.img src={iphone}
         initial={{y:-10}} 
         animate={{y:10}} 
         transition={{duration:2,
            type:"smooth",
            repeatType:"mirror",
            repeat:Infinity
         }}
          className='iphone'/>
        <img src={gradient} className='gradient'/>
      </div>
    </div>
  )
}

export default Main

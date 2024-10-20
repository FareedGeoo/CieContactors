import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion';
import Images from './Images';

export default function Slider(props) {
    const carouselRef = useRef()
    const [width,setWidth]=useState(0)
    useEffect(()=>{
        setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth)
    },[carouselRef,width])
    
    
  return (
    <>
    {
        props?.lang == "ar"?
                <motion.div ref={carouselRef} className='carousel'>
        <motion.div drag="x" dragConstraints={{right:width,left:0}} className='inner-carousel'>
        {
            Images.map((img)=>(
                <motion.div className='item' key={img}>
                    <img src={img} alt="" />
                    <div className='layout'>
                        <h6>Project_one</h6>
                        <p>Eco-friendly living is a new trends, so we having a task to give your house a little green.</p>
                    </div>
                </motion.div>
            ))
        }
        </motion.div>
    
            </motion.div>:
            <motion.div ref={carouselRef} className='carousel'>
 <motion.div drag="x" dragConstraints={{right:0,left:-width}} className='inner-carousel'>
 {
     Images.map((img)=>(
         <motion.div className='item' key={img}>
             <img src={img} alt="" />
             <div className='layout'>
                 <h6>Project_one</h6>
                 <p>Eco-friendly living is a new trends, so we having a task to give your house a little green.</p>
             </div>
         </motion.div>
     ))
 }
 </motion.div>

            </motion.div>

    }
    </>

  )
}

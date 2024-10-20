import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Services() {
    const {state}= useLocation()
    const navigate = useNavigate()
  return (
    <div className='container'>
      <div className='serv-det'>
        <div className='title'>
               <h1>{state?.title}</h1>
        </div>
 
     <div className='row'>
        <div className='col-md-2'>
            <img src={state?.imgPath} alt="" />
        </div>
        <div className='col-md-10 d-flex align-items-center'>
    
        <p className='serv-prog'>{state?.desc}</p>
        </div>
    </div>
    <div className='row'>
      <div className='col-12'>
        <button className='btn btn-info text-white' onClick={()=>{navigate('home')}}>back to home</button>
      </div>
    </div>
            
    </div>
    </div>

  )
}

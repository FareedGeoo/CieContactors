import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Services from '../page/Services'
import Home from '../page/Home'
import AllProject from '../page/AllProject'
import ProjectDetails from '../page/ProjectDetails'






export default function Routing() {
 

  return (
    <Routes>
      <Route path='/services' element={<Services/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='*' element={<Home/>}/>
      <Route path='/allproject' element={<AllProject/>}/>
      <Route path='/viewproject' element={<ProjectDetails/>}/>

    </Routes>
  )
}

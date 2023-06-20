import React from 'react'
import { Routes,Route,Link } from 'react-router-dom'
import Home from "./componets/home"
import Bollyhood from './componets/bollyhood'
import Technology from './componets/technology'
import Hollywood from './componets/hollywood'
import Fittness from './componets/fittness'
import Food from './componets/food'
import Detail from './detail'


function Navbar() {
  return (
    <div>
        <h1 className='heading'><span className='left'>The</span><span className='right'>siren</span></h1>
        <hr/>

        <div className='link'>
            <Link to='/'>Home</Link>
            <Link to='/bollyhood'>Bollyhood</Link>
            <Link to='/technology'>Technology</Link>
            <Link to='/hollywood'>Hollywood</Link>
            <Link to='/fittness'>Fittness</Link>
            <Link to='/food'>Food</Link>

        </div>


     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/bollyhood' element={<Bollyhood/>}/>
      <Route path='/technology' element={<Technology/>}/>
      <Route path='/hollywood' element={<Hollywood/>}/>
      <Route path='/fittness'element={<Fittness/>}/>
      <Route path='/food'element={<Food/>}/>
      <Route path='/details/:id'element={<Detail/>}/>

    </Routes>
    </div>
  )
}

export default Navbar
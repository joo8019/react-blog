import React from 'react'
import {useLocation} from "react-router-dom"
import {Link} from "react-router-dom"
import { blogs } from './data'



function Detail() {
    const value=useLocation().state
  return (
    <>
    <div className='detail'>
     <h1>{value.item.title}</h1>
     <img className='dimg' src={value.item.cover} alt=''></img>
     <p className='dd'>{value.item.description}</p>
    </div>
    <div className='blog'>
    

    {blogs.filter((e)=>{return e.class==="blog"}).map((item,index)=>(
       <div className='hood'>
       <Link to={`/details/${item.id}`} state={{item}} key={index}> <img src={item.cover} className='bhood' alt="" /></Link>
        <div className='b2'>
       <Link to={`/details/${item.id}`} state={{item}} key={index}><h3 className='b3'>{item.title}</h3></Link>
       <p>{item.description}</p><hr/>
       </div>
       </div>
       
      ))}
    
        
    </div>
    </>
  )
}

export default Detail
import React from 'react'
import {data} from '../data';
import {Link} from "react-router-dom";

function Bollyhood() {
  return (
    <div className='bolly'>
    <div>
    <h1 className='bh'>Bollyhood</h1>
    
      {data.filter((e)=>{return e.class==="bollywood1"}).map((item,index)=>(
       <div className='hood'>
       <Link to={`/details/${item.id}`} state={{item}} key={index}> <img src={item.cover} className='bhood' alt="" /></Link>
        <div className='b2'>
       <Link to={`/details/${item.id}`} state={{item}} key={index}><h3 className='b3'>{item.title}</h3></Link>
       <p>{item.description}</p><hr/>
       </div>
       </div>
       
      ))}
    
    </div>
    <div>
      <div className='tp1'>
        <h4 style={{textDecoration:"underline"}} > Top Posts</h4>
        <div className='head'></div>
        <img src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8="  style={{width:"300px",height:"150px"}} alt=""  className='Img1'/>
        <div className='btoppost'>{
           data.filter((e)=>{return e.class==="bollyhood2"}).map((item,index)=>(
            <div >
             <Link to={`/details/${item.id}`} state={{item}} key={index}> <img src={item.cover} className='pics' alt=''/></Link>
              <div>
                <Link to={`/details/${item.id}`} state={{item}} key={index}><h3>{item.title}</h3></Link>
               <p>{item.description}</p><hr/>
              </div>
            </div>
           ))
        }</div>
        </div>
        <div className="advertisment">
          <h4>Advertisment</h4>
        </div>
        </div>
      
    </div>
    
  )
}

export default Bollyhood;
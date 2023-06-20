import React from 'react'
import {data} from '../data';
import {Link} from "react-router-dom";

function Technology() {
  return (
    <div className='bolly'>
    <div>
     <h1 className='bh'>Technology</h1>
     
      {data.filter((e)=>{
   return e.class==="technology1"
      }).map((item,index)=>(
        <div className='hood'>
          <Link to={`/details/${item.id}`} state={{item}} key={index}> <img src={item.cover} style={{width:"300px",height:"150px"}} alt=''/></Link>
           <div className='b2'>
       <Link to={`/details/${item.id}`} state={{item}} key={index}><h3 className='b3'>{item.title}</h3> </Link>
       <p>{item.description}</p><hr/>
       </div>
       </div>
      ))}
     </div>
     <div>
    <div className='tp1'>
    <h4 style={{textDecoration:"underline"}}> Top Posts</h4>
        <div className='head'></div>
        <img src="https://sp-ao.shortpixel.ai/client/to_avif,q_lossy,ret_img,w_1200/https://www.netscribes.com/wp-content/uploads/2019/06/Technology-Watch.jpg" style={{width:"300px",height:"150px"}} alt=""  className='Img1'/>
        <div  className='btoppost'>{
           data.filter((e)=>{return e.class==="technology2"}).map((item,index)=>(
            <div>
             <Link to={`/details/${item.id}`} state={{item}} key={index}> <img src={item.cover} className='pics' alt=''/></Link>
              <div>
               <Link to={`/details/${item.id}`} state={{item}} key={index}> <h3>{item.title}</h3></Link>
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

export default Technology
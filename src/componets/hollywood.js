import React from 'react'
import {data} from '../data';
import {Link} from "react-router-dom";

function Hollywood() {
  return (
    <div className='bolly'>
      <div>
      <h1 className='bh'>Hollwhood</h1> 

    {data.filter((e)=>{
      
return e.class==="hollyhood1"
    }).map((item,index)=>(
      <div className='hood'>
         <Link to={`/details/${item.id}`} state={{item}} key={index}><img src={item.cover}  style={{width:"300px",height:'150px'}} alt=''/></Link>
         <div className='b2'>
        <Link to={`/details/${item.id}`} state={{item}} key={index}><h3 className='b3'>{item.title}</h3></Link>
        <p>{item.description}</p><hr/>
        </div>
      </div>
    ))}
     </div>

     <div>
      <div className='tp1'> 
     <h4 style={{textDecoration:"underline"}}> Top Posts</h4>
        <div className='head'></div>
        <img src="https://www.recordnet.com/gcdn/presto/2021/03/22/NRCD/9d9dd9e4-e84a-402e-ba8f-daa659e6e6c5-PhotoWord_003.JPG"  style={{width:"300px",height:"150px"}} alt=""  className='Img1'/>
        <div  className='btoppost'>{
           data.filter((e)=>{return e.class==="hollywood2"}).map((item,index)=>(
            <div>
             <Link to={`/details/${item.id}`} state={{item}} key={index}><img src={item.cover} className='pics' alt=''/></Link> 
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

export default Hollywood
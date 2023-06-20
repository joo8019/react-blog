import React from 'react'
import { home, latestarticle, lateststories, thelatest,toppost} from '../data'
import {Link} from "react-router-dom";

function Home() {
  return (
    <div>
    <div className='home'>
      {home.filter((e)=>{
        return e.class==="home"
      }).map((item)=>(
        <div className='img' >
          <img src={item.cover} className='img' alt=''/>
        </div>
      ))}
    </div>,
    <div >
      <h2 className='bh'> the latest</h2>
    <div className='grid'>{
      thelatest.filter((e)=>{
        return e.class==="homelatest"
      }).map((item,index)=>(

        <div className='latestbox'>
        <div>          
         <Link to={`/details/${item.id}`} state={{item}} key={index}><img src={item.cover} alt=''/></Link> 
          </div>
          <div>
           <Link to={`/details/${item.id}`} state={{item}} key={index}> <h4 className='tech'>{item.title}</h4></Link>
            <p>{item.description}</p><hr/>
          </div>
        
        </div>
      ))
    }</div>
</div>
<div>
  <h2 className='bh'>Latest articles</h2>
<div>{
  latestarticle.filter((e)=>{
    return e.class==="latestarticle"
  }).map((item,index)=>(
    <div className='laa'>
      <Link to={`/details/${item.id}`} state={{item}} key={index}><img src={item.cover} alt=''/></Link>
      <div>
       <Link to={`/details/${item.id}`} state={{item}} key={index}> <h3 className='tech'>{item.title}</h3></Link>
        <p>{item.description}</p><hr/>
      </div>
    </div>
  ))}
</div>
</div>

     <img src={"https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"} style={{width:"850px",height:"600px"}} alt=''/>

        <div className='tp2'>
        <h4 style={{textDecoration:"underline"}} > Top Posts</h4>
        <div className='head'></div>
        <img src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg"  style={{width:"300px",height:"150px"}} alt=""  className='Img1'/>
        <div className='toppost'>{
           toppost.filter((e)=>{return e.class==="toppost"}).map((item,index)=>(
            <div >
             <Link to={`/details/${item.id}`} state={{item}} key={index}><img src={item.cover} className='pics' alt=''/></Link> 
              <div>
                <Link to={`/details/${item.id}`} state={{item}} key={index}><h3>{item.title}</h3></Link>
                <p>{item.description}</p><hr/>
              </div>
            </div>
           ))
        }</div>
        </div>

        <div className="advertisment1">
          <h4>Advertisment</h4>
        </div>

        <div className='ls1'>
  <h2 className='lss'>Latest stories</h2>< hr className='hrr'></hr>

<div className='lateststory'>{
  lateststories.filter((e)=>{
    return e.class==="lateststories"
  }).map((item)=>(
    
      <div className='ls'>
        <h3 className='tech'>{item.title}</h3>
        <p>{item.description}</p><hr/>
      </div> 
  ))}<hr/>
</div>
</div>


    </div>
  )
}

export default Home
import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'


export default function header() {
  return (
    <>
 <div style={{backgroundColor:"black",color:"white",display:'flex'}}>
   
    <header  style={{display:"flex"}}>
        <div >

<h2 style={{marginLeft:"18px",marginTop:"28px",textAlign:"center",fontWeight:"bold"}}>Music Blog</h2>

</div>

    <nav>

<ul style={{display:"flex",marginLeft:'1000px',padding:"20px",color:"black"}}>
<li >
   <button  style={{  color:"white", backgroundColor: "#000000",fontSize:14,fontFamily:"Arial",borderRadius:"3px"}}> <Link to="./" style={{color:"white"}}>Home</Link>
   </button></li>

<li style={{marginLeft:"15px"}}> <button style={{  color:"white", backgroundColor: "#000000",fontSize:14,fontFamily:"Arial",borderRadius:"3px"}} > <Link to="./Blog" style={{color:"white"}}>Blogs</Link>
</button></li>


</ul>

    </nav>
   
    </header>
    </div>      
    </>
  )
}
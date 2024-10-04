import React from 'react'
import { Link } from 'react-router-dom'

 

export default function Homepage() {
  return (
    <div >
   <section style={{ padding: "10px 20px", textAlign: "center", color: "black" ,fontSize:30,fontFamily:"Arial"}}>
    <h1 >Music Blog</h1>
    <button style={{  color: "white", backgroundColor: "#000000",border:" solid 2px",borderRadius:8,padding:"5px"}}> 
        <Link to="/Blog" style={{  color: "white", backgroundColor: "#000000",fontSize:20,fontFamily:"Arial",padding:"5px", marginTop:"20px"}}>See My Blogs</Link>
    </button>
   </section>
    </div>
  )
}

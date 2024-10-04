import React from 'react'
import { useState,useEffect } from 'react'
import client from '../client'
import { Link } from 'react-router-dom'

export default function Blogs() {
  const[posts,setPosts]=useState([])

  useEffect(()=>{
client.fetch(
  `*[_type=="post"]
  {
title,
slug,
body,
mainImage{
  asset->{
    _id,
    url
  },
  alt
}  
}
  `).then((data)=>setPosts(data)).catch(console.error)



  },[])
  return (
    <section  style={{backgroundColor:"#f0f0f0"}}>
      <h2 style={{ marginLeft:"550px", padding:"10px",alignItems:"center",alignContent:"center"}}>My Blogs</h2>
  

      <div style={{ marginLeft:"80px", padding:"10px",alignItems:"center",alignContent:"center"}}>

{posts.map((post)=>(

<article key={post.slug.current}>
<div style={{float:"left", margin:"20px", padding:"10px",alignItems:"center",alignContent:"center"}}>
<img style={{width:"300px",height:"300px",alignItems:"center",borderRadius:"5px"}} src={post.mainImage.asset.url} alt="{post.title}"/>
<h4> {post.title}  </h4>
<Link to="/Singlepost"></Link>
<Link style={{  color: "white", backgroundColor: "#000000",fontSize:20,fontFamily:"Arial",padding:"5px",borderRadius:"10px"}}  to={`blog/${post.slug.current}`} >Read Full Article</Link>

</div>




</article>






)






)}




      </div>


      </section>


    
  )
}

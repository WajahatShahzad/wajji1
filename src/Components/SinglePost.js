import { useState,useEffect } from "react"
import {Link,useParams} from 'react-router-dom'
import client from '../client'
import BlockContent from '@sanity/block-content-to-react'

export default function SinglePost() {
  const[singlePost,setSinglePost]=useState([])
    const[isLoading,setIsLoading]=useState(true)
    const{ slug } = useParams()

   useEffect(()=>{
    client.fetch(
`*[slug.current=="${slug}"]{
title,
body,
mainImage{
asset->{
_id,
url
},
alt

}
}
` )
.then((data)=>setSinglePost(data[0]))
setIsLoading(false)



   },[slug])
        

  return (
    <>
      {isLoading ? <h1>Loading.....</h1>:
      <section  style={{backgroundColor:"#f0f0f0"}}>
<h1 style={{alignItems:"center", marginLeft:"430px",fontSize:20}} >  {singlePost.title}</h1>
{singlePost.mainImage && singlePost.mainImage.asset && (
<img style={{width:"600px",height:"400px",alignItems:"center", marginLeft:"430px",borderRadius:"5px"}}  src={singlePost.mainImage.asset.url} alt={singlePost.title} title={singlePost.title}/>)}

<strong> <p>By Wajahat Shahzad</p></strong> 
<div>
<BlockContent 
blocks={singlePost.body}
projectId="6l1kpea"
dataset="production"
/>



</div>

<Link to="/blog"  style={{  color: "white", backgroundColor: "#000000",fontSize:20,fontFamily:"Arial",padding:"5px",marginLeft:"530px",marginTop:"10px"}}>   Read more Blogs</Link>


      </section>
      
      
      
      }
      
    </>
  )
      }

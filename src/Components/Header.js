import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'


export default function header() {
  return (
    <>
    <div >
    <div style={{backgroundColor:"black",float:"left"}} >
    <header  >
        <div  >

<h2 >Music Blog</h2>
</div>
    </header>

    <nav>

<ul>
<li>
   <button > <Link to="./Homepage">Home</Link>
   </button></li>

<li> <button> <Link to="./Blogs">Blogs</Link>
</button></li>


</ul>

    </nav>
    </div>
    </div>      
    </>
  )
}

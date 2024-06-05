import React from 'react'
import {NavLink} from "react-router-dom"
const Navbar = () => {
  return (
    <div className='bg-gray-400 flex justify-evenly'>
<NavLink to="/" >Home</NavLink>
<NavLink to="/snippets" >Snippet</NavLink>
    </div>
  )
}

export default Navbar